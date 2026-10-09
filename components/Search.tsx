'use client';

import { useEffect, useMemo, useState } from 'react';
import { Search as SearchIcon, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { CatalogPhone } from '@/lib/types';
import PhoneImage from './PhoneImage';

interface SearchProps { open: boolean; onClose: () => void; }

export default function Search({ open, onClose }: SearchProps) {
  const [query, setQuery] = useState('');
  const [phones, setPhones] = useState<CatalogPhone[]>([]);
  const router = useRouter();
  useEffect(() => { if (open) fetch('/api/phones').then(r=>r.json()).then(d=>setPhones(d.items||[])).catch(()=>{}); }, [open]);
  useEffect(() => { if (!open) setQuery(''); }, [open]);
  useEffect(() => { const fn=(e:KeyboardEvent)=>e.key==='Escape'&&onClose(); document.addEventListener('keydown',fn); return()=>document.removeEventListener('keydown',fn); }, [onClose]);
  const results = useMemo(()=>{
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return phones.filter(p => [p.name,p.brand,p.price,p.specs.chip,p.specs.manHinh].join(' ').toLowerCase().includes(q)).slice(0,12);
  }, [phones, query]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[120] bg-black/35 px-4 pt-[9vh] backdrop-blur-sm" onClick={(e)=>{ if(e.target===e.currentTarget) onClose(); }}>
      <div className="tw-search-modal mx-auto w-full max-w-3xl liquid-card overflow-hidden p-3">
        <div className="tw-search-input-wrap flex items-center gap-3 rounded-[24px] border border-white/20 bg-white/60 px-4 py-3 backdrop-blur-xl dark:bg-white/5">
          <SearchIcon className="h-5 w-5 text-slate-500 dark:text-white/50" />
          <input autoFocus value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Tìm thiết bị, hãng, chip, phân khúc giá..." className="tw-search-field w-full bg-transparent text-base outline-none placeholder:text-slate-400 dark:placeholder:text-white/35" />
          <span className="rounded-full border border-white/20 bg-white/40 px-3 py-1 text-[11px] font-bold text-slate-600 dark:bg-white/10 dark:text-white/65">Esc</span>
        </div>
        <div className="tw-search-results mt-3 max-h-[65vh] overflow-y-auto rounded-[24px] border border-white/15 bg-white/40 p-2 dark:bg-white/5">
          {!query && <div className="flex items-center gap-2 p-8 text-sm text-slate-600 dark:text-white/60"><Sparkles className="h-4 w-4 text-red-400" /> Gõ tên máy, chip hoặc hãng để tìm ngay trong catalog.</div>}
          {query && !results.length && <div className="p-8 text-center text-sm text-slate-600 dark:text-white/60">Không tìm thấy kết quả phù hợp.</div>}
          {results.map((phone)=> (
            <button key={phone.id} type="button" onClick={()=>{ onClose(); router.push(`/phone/${phone.id}`); }} className="tw-search-result flex w-full items-center gap-4 rounded-[20px] p-3 text-left transition hover:bg-white/60 dark:hover:bg-white/10">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[18px] border border-white/15 bg-white/60 dark:bg-white/5"><PhoneImage src={phone.image} alt={phone.name} /></div>
              <div className="min-w-0 flex-1">
                <div className="tw-search-result-title truncate text-sm font-extrabold text-slate-900 dark:text-white">{phone.name}</div>
                <div className="truncate text-xs text-slate-500 dark:text-white/55">{phone.brand} • {phone.specs.chip}</div>
              </div>
              <div className="tw-search-result-price text-sm font-black text-red-500">{phone.price}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
