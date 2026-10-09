'use client';
import Link from 'next/link';
import { useState } from 'react';
import type { CatalogPhone, PhoneVariant } from '@/lib/types';
import PhoneImage from './PhoneImage';

export default function PhoneDetailClient({ phone }: { phone: CatalogPhone }) {
  const [selectedVariant, setSelectedVariant] = useState<PhoneVariant | null>(phone.variants?.[0] || null);
  const [gallery, setGallery] = useState(phone.image);
  const displayPrice = selectedVariant?.price || phone.price;
  const galleryItems = [phone.image, ...(phone.gallery || [])].filter(Boolean);
  return (
    <div className="py-8 md:py-10">
      <Link href="/" className="liquid-button mb-5 inline-flex px-4 py-2 text-sm font-bold">← Quay Lại</Link>
      <div className="tw-detail-grid grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4">
          <div className="tw-detail-cover liquid-card p-5 md:p-7">
            <div className="relative mx-auto aspect-square max-w-[460px]">
              <PhoneImage src={gallery} alt={phone.name} priority />
            </div>
          </div>
          <div className="tw-gallery-list grid grid-cols-4 gap-3 sm:grid-cols-5">
            {galleryItems.map((img, idx)=><button key={img+idx} onClick={()=>setGallery(img)} className={`tw-gallery-thumb relative aspect-square overflow-hidden rounded-[22px] border ${gallery===img?'border-red-400 ring-2 ring-red-300/50':'border-white/15'} bg-white/50 p-2 dark:bg-white/5`}><PhoneImage src={img} alt={`${phone.name} ${idx+1}`} /></button>)}
          </div>
        </div>
        <div className="space-y-5">
          <div className="liquid-card p-5 md:p-7">
            <div className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-red-500">{phone.brand}</div>
            <h1 className="tw-detail-title text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl">{phone.name}</h1>
            <p className="tw-detail-summary mt-3 text-sm leading-7 text-slate-600 dark:text-white/65">{phone.summary || phone.note || 'Thông tin và cấu hình được cập nhật bởi Thanh Wind Admin.'}</p>
            <div className="tw-detail-price mt-5 text-3xl font-black text-red-500">{displayPrice}</div>
            {!!phone.highlights?.length && <div className="mt-5 flex flex-wrap gap-2">{phone.highlights.map((x, i)=><span key={i} className="rounded-full border border-white/15 bg-white/55 px-3 py-2 text-xs font-bold text-slate-700 dark:bg-white/8 dark:text-white/70">{x}</span>)}</div>}
          </div>
          {!!phone.variants?.length && <div className="liquid-card p-5"><div className="mb-3 text-sm font-black text-slate-900 dark:text-white">Chọn Phiên Bản • RAM / ROM / Màu</div><div className="tw-variant-list grid grid-cols-2 gap-3 md:grid-cols-3">{phone.variants.map((variant, idx)=>{const active=selectedVariant===variant;return <button key={idx} onClick={()=>setSelectedVariant(variant)} className={`tw-variant rounded-[20px] border px-4 py-3 text-left transition ${active?'border-red-500 bg-red-50 text-red-600 ring-2 ring-red-300/40 dark:bg-red-500/10 dark:text-red-400':'border-slate-200 bg-white text-slate-700 hover:-translate-y-1 dark:border-slate-700 dark:bg-[#283247] dark:text-white'}`}><div className="tw-variant-storage text-xs font-black uppercase tracking-[0.14em]">{variant.ram?variant.ram+' / ':''}{variant.storage}</div>{variant.color&&<div className="mt-1 text-xs opacity-70">{variant.color}</div>}<div className="mt-1 text-sm font-bold">{variant.price}</div>{typeof variant.stock==='number'&&<div className="mt-1 text-[11px] opacity-60">{variant.stock>0?'Còn '+variant.stock+' máy':'Liên hệ tồn kho'}</div>}</button>})}</div></div>}
          <div className="liquid-card overflow-hidden p-0">
            <div className="border-b border-white/10 px-5 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-800 dark:text-white">Thông Số Kỹ Thuật</div>
            <div className="divide-y divide-white/10 text-sm">{[
              ['Màn hình', phone.specs.manHinh],['Chip', phone.specs.chip],['Bộ nhớ', selectedVariant?.storage || phone.specs.boNho],['Camera', phone.specs.camera],['Pin', phone.specs.pin],['Hệ điều hành', phone.specs.heDieuHanh],
            ].map(([k,v])=><div key={k} className="tw-spec-row grid grid-cols-[120px_1fr] gap-4 px-5 py-4 md:grid-cols-[150px_1fr]"><div className="tw-spec-label font-bold text-slate-500 dark:text-white/45">{k}</div><div className="tw-spec-value font-medium text-slate-800 dark:text-white/82">{v}</div></div>)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
