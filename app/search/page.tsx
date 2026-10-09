import PhoneGrid from '@/components/PhoneGrid';
import { getPhones } from '@/lib/store';

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = '' } = await searchParams;
  const phones = await getPhones();
  const query = q.toLowerCase();
  const list = !query ? phones : phones.filter((p)=>[p.name,p.brand,p.price,p.specs.chip,p.specs.manHinh].join(' ').toLowerCase().includes(query));
  return <section className="space-y-5 py-8"><div className="liquid-card p-6"><div className="text-xs font-black uppercase tracking-[0.24em] text-red-500">Tìm kiếm</div><h1 className="mt-2 text-3xl font-black">Kết quả cho “{q}”</h1><div className="mt-2 text-sm text-slate-500 dark:text-white/55">{list.length} kết quả</div></div><PhoneGrid phones={list} /></section>;
}
