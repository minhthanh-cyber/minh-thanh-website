import type { BrandKey } from '@/lib/types';
import { getPhones } from '@/lib/store';
import PhoneGrid from './PhoneGrid';

export default async function BrandPage({ brand, label }: { brand: BrandKey; label: string }) {
  const list = (await getPhones()).filter((p) => p.brand === brand);
  return (
    <section className="space-y-5 py-8">
      <div className="liquid-card p-6">
        <div className="text-xs font-black uppercase tracking-[0.24em] text-red-500">Thanh Wind</div>
        <div className="mt-2 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">{label}</h1>
          <div className="text-sm text-slate-500 dark:text-white/55">{list.length} thiết bị</div>
        </div>
      </div>
      <PhoneGrid phones={list} />
    </section>
  );
}
