'use client';
import { Bot, SendHorizontal, Sparkles, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { SiteSettings } from '@/lib/types';

interface Msg { role:'user'|'assistant'; content:string; }

export default function AIChatWidget({ settings }: { settings: SiteSettings }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role:'assistant', content: settings.aiWelcome }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{ ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior:'smooth' }); }, [messages, loading]);
  async function send() {
    const value = input.trim(); if (!value || loading) return;
    setInput('');
    const next = [...messages, { role:'user' as const, content: value }];
    setMessages(next); setLoading(true);
    try {
      const res = await fetch('/api/chat', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ message:value, history: messages.slice(-8) }) });
      const data = await res.json();
      setMessages([...next, { role:'assistant', content: data.text || 'Chưa có phản hồi.' }]);
    } catch {
      setMessages([...next, { role:'assistant', content:'Thanh Wind AI hiện chưa kết nối được. Vui lòng thử lại sau.' }]);
    } finally { setLoading(false); }
  }
  return (
    <div id="thanh-wind-ai" className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="tw-ai-panel liquid-card flex h-[min(72vh,620px)] w-[min(94vw,390px)] flex-col overflow-hidden p-3 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-between gap-3 rounded-[22px] border border-white/15 bg-white/55 px-4 py-3 dark:bg-white/5">
            <div className="flex items-center gap-3">
              <div className="tw-ai-avatar flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-red-400/80 to-orange-400/80 text-white shadow-lg">{settings.aiAvatar ? <img src={settings.aiAvatar} alt={settings.aiName} className="h-full w-full rounded-2xl object-cover" /> : <Bot className="h-6 w-6" />}</div>
              <div>
                <div className="text-sm font-black text-slate-900 dark:text-white">{settings.aiName}</div>
                <div className="text-xs text-slate-500 dark:text-white/50">OpenRouter assistant</div>
              </div>
            </div>
            <button onClick={()=>setOpen(false)} className="liquid-button h-10 w-10 p-0"><X className="mx-auto h-4 w-4" /></button>
          </div>
          <div ref={ref} className="tw-ai-messages mt-3 flex-1 space-y-3 overflow-y-auto rounded-[22px] border border-white/15 bg-white/35 p-3 dark:bg-white/5">
            {messages.map((m, i)=><div key={i} className={`tw-ai-bubble max-w-[88%] rounded-[20px] px-4 py-3 text-sm leading-6 ${m.role==='assistant' ? 'mr-auto border border-white/15 bg-white/70 text-slate-800 dark:bg-white/10 dark:text-white' : 'ml-auto bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-lg'}`}>{m.content}</div>)}
            {loading && <div className="mr-auto rounded-[20px] border border-white/15 bg-white/70 px-4 py-3 text-sm text-slate-700 dark:bg-white/10 dark:text-white/80">Đang suy nghĩ...</div>}
          </div>
          <div className="mt-3 space-y-3">
            <div className="flex flex-wrap gap-2 text-xs">
              {['So sánh iPhone và Samsung','Máy nào pin tốt?','Tư vấn dưới 20 triệu'].map((q)=><button key={q} onClick={()=>setInput(q)} className="liquid-button px-3 py-2 text-xs"><Sparkles className="mr-1 inline h-3.5 w-3.5" />{q}</button>)}
            </div>
            <div className="flex items-center gap-2 rounded-[22px] border border-white/15 bg-white/55 p-2 dark:bg-white/5">
              <textarea value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=>{ if(e.key==='Enter'&&!e.shiftKey){e.preventDefault(); send();}}} placeholder="Hỏi Thanh Wind AI về điện thoại..." className="max-h-28 min-h-11 flex-1 resize-none bg-transparent px-3 py-2 text-sm outline-none placeholder:text-slate-400 dark:placeholder:text-white/35" />
              <button onClick={send} disabled={loading} className="liquid-button h-11 w-11 p-0 disabled:opacity-50"><SendHorizontal className="mx-auto h-[18px] w-[18px]" /></button>
            </div>
          </div>
        </div>
      )}
      <button onClick={()=>setOpen(v=>!v)} className="tw-ai-fab liquid-button h-14 w-14 rounded-full p-0 shadow-[0_18px_50px_rgba(255,91,91,0.35)]"><Bot className="mx-auto h-6 w-6" /></button>
    </div>
  );
}
