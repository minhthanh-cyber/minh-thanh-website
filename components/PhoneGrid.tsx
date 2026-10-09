import type { CatalogPhone } from '@/lib/types';
import PhoneCard from './PhoneCard';

export default function PhoneGrid({ phones }: { phones: CatalogPhone[] }) {
  if (!phones.length) return <div className="liquid-card p-10 text-center text-sm text-slate-600 dark:text-white/60">Chưa có thiết bị phù hợp.</div>;
  return <div className="tw-catalog-grid grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">{phones.map((phone) => <PhoneCard key={phone.id} phone={phone} />)}</div>;
}
