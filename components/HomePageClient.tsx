'use client';
import type { CatalogPhone, SiteSettings } from '@/lib/types';
import { Clock3, Sparkles, Bot } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import PhoneGrid from './PhoneGrid';
import { MAIN_BRANDS, KHAC_BRANDS } from '@/data/brands';

export default function HomePageClient({ phones, settings }: { phones: CatalogPhone[]; settings: SiteSettings }) {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [bgIndex, setBgIndex] = useState(0);
  const [brand, setBrand] = useState<string>('all');
  useEffect(() => {
    const run = () => { const now = new Date(); setTime(now.toLocaleTimeString('vi-VN', { hour12:false })); setDate(now.toLocaleDateString('vi-VN')); };
    run(); const t = setInterval(run, 1000); return ()=>clearInterval(t);
  }, []);
  useEffect(() => { const id = setInterval(()=>setBgIndex(v=>(v+1)%Math.max(settings.heroImages.length,1)), 7000); return ()=>clearInterval(id); }, [settings.heroImages.length]);
  const list = useMemo(()=> brand==='all' ? phones : phones.filter(p=>p.brand===brand), [phones, brand]);
  const featured = phones.filter(p=>p.featured).slice(0,6);
  return (
    <div className="tw-main space-y-10 pb-16 pt-5">
      <section className="hero-shell relative overflow-hidden">
        {settings.heroImages.map((img, index)=><div key={img+index} className={`hero-bg ${index===bgIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`} style={{backgroundImage:`url(${img})`}} />)}
        <div className="hero-overlay" />
        <div className="tw-hero-content relative z-10 flex min-h-[640px] flex-col justify-between p-5 md:p-8 xl:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <span className="status-pill"><span className={`online-dot ${settings.siteStatus!=='online' ? `status-${settings.siteStatus}` : ''}`} /> {settings.siteStatus === 'online' ? 'Đang Online' : settings.siteStatus === 'maintenance' ? 'Đang Bảo Trì' : 'Đang Offline'}</span>
              <span className="status-pill"><Clock3 className="h-4 w-4 text-red-400" /> <span className="tw-clock">{time || '00:00:00'} • {date || '00/00/0000'}</span></span>
              
            </div>
            <div className="glass-search-chip"><Bot className="h-4 w-4 text-red-400" /> Thanh Wind AI tích hợp OpenRouter</div>
          </div>
          <div className="tw-hero-columns grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div className="tw-hero-copy max-w-4xl space-y-6">
              <div className="tw-hero-intro inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/45 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-slate-700 backdrop-blur-xl dark:bg-white/8 dark:text-white/75"><Sparkles className="h-4 w-4 text-red-400" /> {settings.brandTagline}</div>
              <div className="space-y-4">
                <h1 className="tw-hero-title text-4xl font-black leading-[1.03] tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-7xl">{settings.heroTitle}<br /><span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">Liquid Glass Premium</span></h1>
                <p className="tw-hero-description max-w-2xl text-base leading-8 text-slate-700 dark:text-white/70 md:text-lg">{settings.heroDescription}</p>
              </div>
              <div className="tw-filter-actions flex flex-wrap gap-3">
                <Link href="#catalog" className="tw-hero-cta liquid-button px-5 py-3 text-sm font-black">Khám Phá Catalog</Link>
                
              </div>
            </div>
            <div className="liquid-card p-5">
              <div className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-slate-500 dark:text-white/45">Điểm nổi bật</div>
              <div className="space-y-3">
                {['Tìm kiếm điện thoại theo hãng và phân khúc giá','Ảnh, giá từng phiên bản bộ nhớ và cấu hình chi tiết','Thanh Wind AI dùng OpenRouter để tư vấn thiết bị'].map((x)=> <div key={x} className="rounded-[20px] border border-white/15 bg-white/50 px-4 py-3 text-sm font-medium text-slate-700 dark:bg-white/5 dark:text-white/75">{x}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tw-filter-card liquid-card p-5 md:p-6">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="tw-eyebrow text-xs font-black uppercase tracking-[0.26em] text-red-500">Bộ lọc nhanh</div>
            <h2 className="tw-section-heading text-2xl font-black text-slate-900 dark:text-white">Chọn hãng bạn muốn xem</h2>
          </div>
          <div className="tw-subtle text-sm text-slate-500 dark:text-white/50">{phones.length} thiết bị hiện có</div>
        </div>
        <div className="tw-filter-actions flex flex-wrap gap-3">
          <button onClick={()=>setBrand('all')} className={`tw-filter-chip liquid-button px-4 py-3 text-sm font-bold ${brand==='all'?'ring-2 ring-red-400/60':''}`}>Tất Cả</button>
          {[...MAIN_BRANDS, ...KHAC_BRANDS].map(b=><button key={b.key} onClick={()=>setBrand(b.key)} className={`tw-filter-chip liquid-button px-4 py-3 text-sm font-bold ${brand===b.key?'ring-2 ring-red-400/60':''}`}>{b.label}</button>)}
        </div>
      </section>

      {featured.length > 0 && (
        <section className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="tw-eyebrow text-xs font-black uppercase tracking-[0.24em] text-red-500">Featured</div>
              <h2 className="tw-section-heading text-2xl font-black text-slate-900 dark:text-white">Điện thoại nổi bật</h2>
            </div>
          </div>
          <PhoneGrid phones={featured} />
        </section>
      )}

      <section id="catalog" className="space-y-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="tw-eyebrow text-xs font-black uppercase tracking-[0.24em] text-red-500">Catalog</div>
            <h2 className="tw-section-heading text-2xl font-black text-slate-900 dark:text-white">Danh mục điện thoại</h2>
          </div>
          <div className="tw-subtle text-sm text-slate-500 dark:text-white/50">Hiển thị {list.length} thiết bị</div>
        </div>
        <PhoneGrid phones={list} />
      </section>
    </div>
  );
}
