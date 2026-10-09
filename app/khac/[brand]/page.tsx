import { notFound } from 'next/navigation';
import { KHAC_BRANDS } from '@/data/brands';
import BrandPage from '@/components/BrandPage';

export default async function Page({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params;
  const item = KHAC_BRANDS.find((x) => x.slug === brand);
  if (!item) return notFound();
  return <BrandPage brand={item.key as any} label={item.label} />;
}
