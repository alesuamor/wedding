import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  const { slug } = params;
  const { GOOGLE_SCRIPT_URL, RSVP_SECRET } = process.env;

  if (!GOOGLE_SCRIPT_URL || !RSVP_SECRET) {
    console.error("Missing env vars in getGuest API");
    return NextResponse.json(
      { success: false, error: "Missing server configuration" },
      { status: 500 }
    );
  }

  try {
    const url = new URL(GOOGLE_SCRIPT_URL);
    url.searchParams.append("action", "getGuest");
    url.searchParams.append("slug", slug);
    url.searchParams.append("secret", RSVP_SECRET);

    const response = await fetch(url.toString(), {
      method: 'GET',
      cache: 'no-store'
    });

    const responseText = await response.text();
    let result;

    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Google Apps Script did not return JSON:", responseText);
      return NextResponse.json(
        { success: false, error: "Invalid response from server" },
        { status: 500 }
      );
    }

    if (result.success === true && result.guest) {
      return NextResponse.json({
        success: true,
        guest: result.guest
      });
    }

    return NextResponse.json(
      { success: false, error: "Guest not found" },
      { status: 404 }
    );
  } catch (error) {
    console.error("getGuest API failed:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch guest" },
      { status: 500 }
    );
  }
}
