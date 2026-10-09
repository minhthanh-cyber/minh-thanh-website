'use client';
import { useEffect } from 'react';
import type { SiteSettings } from '@/lib/types';

export default function ShieldLayer({ settings }: { settings: SiteSettings }) {
  useEffect(() => {
    if (!settings.shieldEnabled) return;
    const key = (e: KeyboardEvent) => {
      const lower = e.key.toLowerCase();
      if (settings.blockF12 && e.key === 'F12') { e.preventDefault(); location.reload(); return; }
      if (settings.blockViewSource && (e.ctrlKey || e.metaKey) && lower === 'u') { e.preventDefault(); location.reload(); return; }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i','j','c'].includes(lower)) { e.preventDefault(); location.reload(); }
    };
    const ctx = (e: MouseEvent) => { if (settings.blockContextMenu) { e.preventDefault(); } };
    document.addEventListener('keydown', key);
    document.addEventListener('contextmenu', ctx);
    return () => { document.removeEventListener('keydown', key); document.removeEventListener('contextmenu', ctx); };
  }, [settings]);
  return null;
}
