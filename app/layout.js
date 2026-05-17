import './styles/globals.css'
import settings from './config/settings'
import { Montserrat, Playfair_Display, Cormorant_Garamond } from 'next/font/google'

// Configure fonts with Next.js font optimization
const inter = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dancing = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-dancing',
  display: 'swap',
})

// Use environment variable if available, otherwise use a default
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.michylalo.com/'

// Safely create URL object for metadataBase
let metadataBaseUrl;
try {
  metadataBaseUrl = new URL(siteUrl);
} catch (error) {
  // Fallback to a valid URL if the siteUrl is invalid
  console.warn('Invalid NEXT_PUBLIC_SITE_URL, using fallback URL');
  metadataBaseUrl = new URL('https://www.michylalo.com/');
}

export const metadata = {
  // Basic metadata
  title: "Mich & Lalo | Invitación de boda",
  description: "Acompáñanos a celebrar nuestra boda.",
  keywords: `wedding, ${settings.couple.bride.name.toLowerCase()}, ${settings.couple.groom.name.toLowerCase()}, ${settings.wedding.displayDate}, ${settings.venue.name}, ${settings.venue.address.city}, wedding invitation, RSVP`,
  authors: [{ name: `${settings.couple.bride.name} & ${settings.couple.groom.name}` }],
  creator: `${settings.couple.bride.name} & ${settings.couple.groom.name}`,
  publisher: `${settings.couple.bride.name} & ${settings.couple.groom.name}`,
  
  // Open Graph metadata for social media sharing
  openGraph: {
    title: "Mich & Lalo | Invitación de boda",
    description: "Acompáñanos a celebrar nuestra boda.",
    url: "https://www.michylalo.com/",
    siteName: "Mich & Lalo",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Invitación de boda Mich & Lalo",
        type: 'image/jpeg',
      }
    ],
    locale: 'es_MX',
    type: 'website',
  },
  
  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: "Mich & Lalo | Invitación de boda",
    description: "Acompáñanos a celebrar nuestra boda.",
    images: ['/og-image.jpg'],
    creator: settings.social.instagram.wedding || settings.social.instagram.bride,
  },
  
  // Additional metadata
  metadataBase: metadataBaseUrl,
  alternates: {
    canonical: '/',
  },
  
  // Robots and indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification (add your verification codes if needed)
  verification: {
    google: '', // Add Google Search Console verification
    yandex: '',
    yahoo: '',
  },
  
  // Icons
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  
  // Manifest for PWA
  manifest: '/manifest.json',
  
  // Format detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

// Separate viewport export as required by Next.js 14+
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: settings.theme.colors.primary,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${dancing.variable}`}>
      <head>
        {/* Additional structured data for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: `${settings.couple.bride.name} & ${settings.couple.groom.name} Wedding`,
              description: `Wedding celebration of ${settings.couple.bride.name} and ${settings.couple.groom.name}`,
              startDate: `${settings.wedding.date}T${settings.wedding.ceremony.time}:00`,
              endDate: `${settings.wedding.date}T${settings.wedding.reception.endTime}:00`,
              eventStatus: 'https://schema.org/EventScheduled',
              location: {
                '@type': 'Place',
                name: settings.venue.name,
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: settings.venue.address.street,
                  addressLocality: settings.venue.address.city,
                  postalCode: settings.venue.address.postalCode,
                  addressCountry: settings.venue.address.country,
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: settings.venue.coordinates.lat,
                  longitude: settings.venue.coordinates.lng,
                },
              },
              image: `${siteUrl}/thumbnail.png`,
              url: siteUrl,
              organizer: {
                '@type': 'Person',
                name: `${settings.couple.bride.name} & ${settings.couple.groom.name}`,
                url: siteUrl,
              },
              isAccessibleForFree: true,
              maximumAttendeeCapacity: 200,
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}