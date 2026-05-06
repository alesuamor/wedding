import { notFound } from 'next/navigation';
import { guests } from '../config/guests';
import Home from '../page';

export function generateStaticParams() {
  return guests.map((guest) => ({
    guest: guest.slug,
  }));
}

export default function GuestPage({ params }) {
  const guestData = guests.find((g) => g.slug === params.guest);

  if (!guestData) {
    notFound();
  }

  return <Home guest={guestData} />;
}
