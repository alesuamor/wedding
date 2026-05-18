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

    if (!guestDisplayName || reservedPasses === undefined || reservedPasses === null) {
      console.error("Missing required fields:", body);

      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields",
          debug: {
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

    // Fire and forget: hacemos la petición sin 'await' para no bloquear al usuario
    // y asumimos que se enviará correctamente a Google Apps Script.
    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).catch(error => {
      console.error("Error al enviar a Google Apps Script en segundo plano:", error);
    });

    // Retornamos éxito inmediatamente al frontend
    return NextResponse.json({ success: true });
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