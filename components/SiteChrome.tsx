'use client';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import type { SiteSettings } from '@/lib/types';
import Header from './Header';
import Footer from './Footer';
import AIChatWidget from './AIChatWidget';
import ShieldLayer from './ShieldLayer';
export default function SiteChrome({ settings, children }: { settings:SiteSettings; children:ReactNode }) {
 const path = usePathname();
 const isAdmin = path === '/ThanhWindAdmin';
 if(isAdmin) return <main className="tw-main tw-content mx-auto max-w-7xl px-4 md:px-6">{children}</main>;
 if(settings.siteStatus === 'maintenance') return <div className="flex min-h-screen items-center justify-center px-4"><div className="liquid-card max-w-xl p-8 text-center md:p-12"><img src="/images/logo.png" alt="Thanh Wind" className="mx-auto mb-5 h-20 w-20 rounded-3xl object-contain"/><div className="tw-eyebrow text-xs font-black tracking-[.25em] text-amber-500">Đang Bảo Trì</div><h1 className="mt-4 text-3xl font-black">Thanh Wind đang được nâng cấp</h1><p className="mt-4 text-base leading-7 text-slate-500 dark:text-slate-300">{settings.maintenanceMessage}</p><p className="mt-6 text-xs text-slate-400">Vui lòng quay lại sau. Cảm ơn bạn đã chờ đợi.</p></div></div>;
 return <><ShieldLayer settings={settings} /><div className="global-aurora" /><Header /><main className="tw-main tw-content mx-auto max-w-7xl px-4 md:px-6">{children}</main><Footer /><AIChatWidget settings={settings}/></>;
}
