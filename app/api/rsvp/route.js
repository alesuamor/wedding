import { NextResponse } from 'next/server';

export async function POST(request) {
  const { GOOGLE_SCRIPT_URL, RSVP_SECRET } = process.env;

  if (!GOOGLE_SCRIPT_URL || !RSVP_SECRET) {
    console.error("Missing env vars:", {
      hasGoogleScriptUrl: Boolean(GOOGLE_SCRIPT_URL),
      hasRsvpSecret: Boolean(RSVP_SECRET),
    });

    return NextResponse.json(
      {
        success: false,
        error: "Missing server configuration",
        debug: {
          hasGoogleScriptUrl: Boolean(GOOGLE_SCRIPT_URL),
          hasRsvpSecret: Boolean(RSVP_SECRET),
        },
      },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    const {
      slug,
      email,
      message,
      guestDisplayName,
      reservedPasses,
    } = body;

    if (!email || !guestDisplayName || reservedPasses === undefined || reservedPasses === null) {
      console.error("Missing required fields:", body);

      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields",
          debug: {
            email: Boolean(email),
            guestDisplayName: Boolean(guestDisplayName),
            reservedPasses,
          },
        },
        { status: 400 }
      );
    }

    const payload = {
      secret: RSVP_SECRET,
      slug: slug || "",
      firstName: "",
      lastName: "",
      email,
      message: message || "",
      guestDisplayName,
      reservedPasses,
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();

    let result;

    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Google Apps Script did not return JSON:", {
        status: response.status,
        statusText: response.statusText,
        responseText,
      });

      return NextResponse.json(
        {
          success: false,
          error: "Google Apps Script did not return JSON",
          debug: {
            status: response.status,
            statusText: response.statusText,
            responseText,
          },
        },
        { status: 500 }
      );
    }

    if (result.success === true) {
      return NextResponse.json({ success: true });
    }

    console.error("Google Apps Script returned an error:", result);

    return NextResponse.json(
      {
        success: false,
        error: "Google Script error",
        debug: result,
      },
      { status: 500 }
    );
  } catch (error) {
    console.error("RSVP API failed:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit RSVP",
        debug: error.message,
      },
      { status: 500 }
    );
  }
}