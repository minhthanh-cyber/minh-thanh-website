'use client';
import { Menu, Search as SearchIcon, Bot } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Search from './Search';
import MobileMenu from './MobileMenu';
import { MAIN_BRANDS } from '@/data/brands';

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navs = useMemo(() => MAIN_BRANDS, []);
  return (
    <>
      <header className="tw-header sticky top-0 z-40 border-b border-white/10 bg-white/55 backdrop-blur-2xl dark:bg-[#0b0b10]/55">
        <div className="tw-header-inner mx-auto flex h-20 max-w-7xl items-center gap-4 px-4 md:px-6">
          <button onClick={()=>setMenuOpen(true)} className="liquid-button flex h-11 w-11 items-center justify-center p-0 md:hidden" aria-label="Mở menu"><Menu className="h-5 w-5" /></button>
          <Link href="/" className="group flex items-center gap-3">
            <div className="tw-logo relative h-11 w-11 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-red-400/75 to-orange-400/70 p-1 shadow-[0_10px_30px_rgba(255,86,86,0.25)]">
              <img src="/images/logo.png" alt="Thanh Wind" className="h-full w-full rounded-[14px] object-cover" />
            </div>
            <div className="hidden sm:block">
              <div className="tw-brand-tagline text-[11px] font-black uppercase tracking-[0.32em] text-red-500">Thanh Wind</div>
              <div className="tw-brand-title text-lg font-black text-slate-900 dark:text-white">Phone Hub</div>
            </div>
          </Link>
          <nav className="tw-nav hidden flex-1 items-center justify-center gap-2 md:flex">
            {navs.map((n)=><Link key={n.slug} href={`/${n.slug}`} className="tw-nav-link liquid-button px-4 py-2 text-sm font-bold">{n.label}</Link>)}
            <Link href="/khac" className="tw-nav-link liquid-button px-4 py-2 text-sm font-bold">Khác</Link>
          </nav>
          <div className="tw-header-actions ml-auto flex items-center gap-2">
            <button onClick={()=>setSearchOpen(true)} className="liquid-button flex h-11 items-center gap-2 px-4 text-sm font-bold"><SearchIcon className="h-4 w-4" /><span className="hidden sm:inline">Tìm Kiếm</span></button>
            <Link href="#thanh-wind-ai" className="liquid-button hidden h-11 items-center gap-2 px-4 text-sm font-bold lg:flex"><Bot className="h-4 w-4" />AI</Link>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <Search open={searchOpen} onClose={()=>setSearchOpen(false)} />
      <MobileMenu open={menuOpen} onClose={()=>setMenuOpen(false)} />
    </>
  );
}
