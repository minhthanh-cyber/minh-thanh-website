'use client';
import Link from 'next/link';
import { ALL_BRANDS, MAIN_BRANDS, KHAC_BRANDS } from '@/data/brands';

export default function MobileMenu({ open, onClose }: { open:boolean; onClose:()=>void }) {
  return (
    <div className={`fixed inset-0 z-50 md:hidden ${open ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/40 transition ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute left-0 top-0 h-full w-[88vw] max-w-[390px] liquid-card rounded-none rounded-r-[28px] border-l-0 p-5 transition duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.3em] text-red-500">Thanh Wind</div>
            <div className="text-lg font-black">Phone Hub</div>
          </div>
          <button onClick={onClose} className="liquid-button h-11 w-11 p-0 text-lg font-black">×</button>
        </div>
        <nav className="space-y-2">
          <Link href="/" onClick={onClose} className="tw-mobile-nav mobile-nav-item">Trang Chủ</Link>
          {MAIN_BRANDS.map((b)=><Link key={b.slug} href={`/${b.slug}`} onClick={onClose} className="tw-mobile-nav mobile-nav-item">{b.label}</Link>)}
          <Link href="/khac" onClick={onClose} className="tw-mobile-nav mobile-nav-item">Các Hãng Khác</Link>
          <div className="rounded-[22px] border border-white/15 bg-white/35 p-3 dark:bg-white/5">
            <div className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-white/45">Khác</div>
            <div className="grid grid-cols-2 gap-2">{KHAC_BRANDS.map((b)=><Link key={b.slug} href={`/khac/${b.slug}`} onClick={onClose} className="rounded-2xl border border-white/15 bg-white/55 px-3 py-2 text-sm font-semibold dark:bg-white/5">{b.label}</Link>)}</div>
          </div>
          <div className="rounded-[22px] border border-white/15 bg-white/35 p-3 text-xs text-slate-600 dark:bg-white/5 dark:text-white/60">{ALL_BRANDS.length} thương hiệu đang có trong catalog. Admin có thể thêm thiết bị mới trong Thanh Wind Admin.</div>
        </nav>
      </aside>
    </div>
  );
}
