import { notFound } from 'next/navigation';
import { getPhones } from '@/lib/store';
import PhoneDetailClient from '@/components/PhoneDetailClient';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const phone = (await getPhones()).find((p) => p.id === id);
  if (!phone) return notFound();
  return <PhoneDetailClient phone={phone} />;
}
