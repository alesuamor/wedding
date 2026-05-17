import { notFound } from 'next/navigation';
import { guests as fallbackGuests } from '../config/guests';
import Home from '../page';

// Guest pages are dynamic.
// Slugs come from the AyudanteWhatsApp sheet.
// AyudanteWhatsApp is the source of truth for guest pages.
// app/config/guests.js is only fallback sample data.
export const dynamic = "force-dynamic";

// Server helper to fetch guest from Google Apps Script
async function fetchGuest(slug) {
  const { GOOGLE_SCRIPT_URL, RSVP_SECRET } = process.env;

  if (!GOOGLE_SCRIPT_URL || !RSVP_SECRET) {
    return null;
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

    if (!response.ok) {
      return null;
    }

    const text = await response.text();
    const result = JSON.parse(text);

    if (result.success && result.guest) {
      return result.guest;
    }
    
    return null;
  } catch (error) {
    console.error("Failed to fetch guest:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const slug = params.guest;

  let guestData = null;
  try {
    // Attempt to fetch dynamically from Google Sheets
    guestData = await fetchGuest(slug);
  } catch (error) {
    console.error("Metadata fetch error:", error);
  }

  // Fallback to local config if not found in sheets
  if (!guestData) {
    guestData = fallbackGuests.find((g) => g.slug === slug);
  }

  const title = guestData ? `Invitación para ${guestData.displayName}` : "Invitación de boda | Mich & Lalo";
  const description = "Mich & Lalo te invitan a celebrar su boda.";
  const url = `https://www.michylalo.com/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Mich & Lalo",
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: "Invitación de boda Mich & Lalo",
        }
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ['/og-image.jpg'],
    },
  };
}

export default async function GuestPage({ params }) {
  const slug = params.guest;

  // Attempt to fetch dynamically from Google Sheets
  let guestData = await fetchGuest(slug);

  // Fallback to local config if not found in sheets
  if (!guestData) {
    guestData = fallbackGuests.find((g) => g.slug === slug);
  }

  if (!guestData) {
    notFound();
  }

  return <Home guest={guestData} />;
}
