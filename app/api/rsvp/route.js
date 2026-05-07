import { NextResponse } from 'next/server';

export async function POST(request) {
  const { GOOGLE_SCRIPT_URL, RSVP_SECRET } = process.env;

  if (!GOOGLE_SCRIPT_URL || !RSVP_SECRET) {
    return NextResponse.json(
      { success: false, error: "Missing server configuration" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { slug, firstName, lastName, email, message, guestDisplayName, reservedPasses } = body;

    if (!firstName || !lastName || !email || !guestDisplayName || reservedPasses === undefined) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const payload = {
      secret: RSVP_SECRET,
      slug,
      firstName,
      lastName,
      email,
      message,
      guestDisplayName,
      reservedPasses
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (result.success === true) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: "Google Script error" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to submit RSVP" },
      { status: 500 }
    );
  }
}
