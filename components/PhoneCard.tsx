import Link from 'next/link';
import type { CatalogPhone } from '@/lib/types';
import PhoneImage from './PhoneImage';

export default function PhoneCard({ phone }: { phone: CatalogPhone }) {
  return (
    <Link href={`/phone/${phone.id}`} className="tw-product-card group liquid-card block overflow-hidden p-4 transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(255,92,92,0.2)]">
      <div className="tw-product-image relative aspect-square rounded-[26px] border border-white/15 bg-white/55 p-4 dark:bg-white/5">
        <div className="liquid-sheen" />
        <div className="tw-product-brand absolute right-3 top-3 rounded-full border border-white/20 bg-white/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-700 dark:bg-black/25 dark:text-white/75">{phone.brand}</div>
        <div className="tw-image-inner relative h-full w-full transition duration-300 group-hover:scale-[1.06] group-hover:-rotate-2">
          <PhoneImage src={phone.image} alt={phone.name} />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="tw-product-name line-clamp-2 text-base font-extrabold text-slate-900 dark:text-white">{phone.name}</h3>
        <p className="tw-product-description line-clamp-2 text-sm text-slate-600 dark:text-white/70">{phone.summary || phone.note || `${phone.brand} • ${phone.specs.chip}`}</p>
        <div className="flex items-center justify-between gap-3 pt-1">
          <span className="tw-product-price text-lg font-black text-red-500">{phone.price}</span>
          <span className="liquid-button px-3 py-2 text-xs font-bold">Xem Chi Tiết</span>
        </div>
      </div>
    </Link>
  );
}
