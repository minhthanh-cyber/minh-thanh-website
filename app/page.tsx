'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Search, Clock, ShieldAlert } from 'lucide-react';

// 1. DANH SÁCH HÌNH NỀN TỰ ĐỘNG CHUYỂN DỔI (Đổi link ảnh của bạn tại đây)
const BACKGROUND_IMAGES = [
  '/images/vivo-x300-ultra-background.jpg',
  '/images/xiaomi-17-ultra-backround.webp',
  '/images/xiaomi-18-pro-backround.webp',
  '/images/xiaomi-18-pro-max-backround.png',
];

export default function Home() {
  // ==========================================
  // LOGIC 1: ĐỒNG HỒ THỜI GIAN THỰC
  // ==========================================
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
      setDate(
        now.toLocaleDateString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
        })
      );
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // ==========================================
  // LOGIC 2: HÌNH NỀN ĐỘNG (CHUYỂN ẢNH NỀN NỖI 7 GIÂY)
  // ==========================================
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const bgTimer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 7000); // 7000ms = 7 giây (Trong khoảng 5-10s)

    return () => clearInterval(bgTimer);
  }, []);

  // ==========================================
  // LOGIC 3: TRẠNG THÁI WEBSITE ('online' | 'offline' | 'maintenance')
  // ==========================================
  const [status, setStatus] = useState('online');

  const renderStatusBadge = () => {
    switch (status) {
      case 'online':
        return (
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Đang Online
          </span>
        );
      case 'offline':
        return (
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-950/80 text-rose-400 border border-rose-500/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            Đang Offline
          </span>
        );
      case 'maintenance':
        return (
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-950/80 text-amber-400 border border-amber-500/30 backdrop-blur-md">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
            Đang Nâng Cấp
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white font-sans">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. HÌNH NỀN ĐỘNG SLIDESHOW (Chuyển đổi mượt mào giữa các ảnh)   */}
      {/* ------------------------------------------------------------- */}
      {BACKGROUND_IMAGES.map((imgUrl, index) => (
        <div
          key={imgUrl}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === bgIndex ? 'opacity-35 scale-105' : 'opacity-0 scale-100'
          } transition-transform duration-[7000ms]`}
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      
      {/* Lớp phủ làm tối giúp rõ chữ */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black pointer-events-none" />

      {/* NỘI DUNG CHÍNH WEBSITE */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        
        {/* ------------------------------------------------------------- */}
        {/* HEADER: LOGO, THANH TÌM KIẾM CÓ LOGO VÀ ĐỒNG HỒ THỜI GIAN     */}
        {/* ------------------------------------------------------------- */}
        <header className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 pb-4">
          
          {/* Logo Tên Thương Hiệu */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-orange-500 p-0.5 flex items-center justify-center font-bold text-xl shadow-lg shadow-red-500/30">
              W
            </div>
            <span className="font-extrabold text-xl tracking-wider text-white">
              THANH WIND <span className="text-red-500 text-sm">(VIONIX)</span>
            </span>
          </div>

          {/* THANH TÌM KIẾM TÍCH HỢP LOGO / HÌNH ẢNH */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-2 flex items-center pl-1 pointer-events-none z-10">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center text-[10px] font-bold text-white shadow">
                V
              </div>
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm nội dung, dự án..."
              className="w-full pl-11 pr-10 py-2 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all backdrop-blur-md"
            />
            <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>

          {/* ĐỒNG HỒ THỜI GIAN THỰC GÓC PHẢI */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md shadow-inner">
            <Clock className="w-5 h-5 text-red-500 animate-pulse" />
            <div className="flex flex-col text-right">
              <span className="font-mono text-base font-bold leading-tight tracking-wider text-white">
                {time || '00:00:00'}
              </span>
              <span className="text-[10px] text-gray-400 font-mono">
                {date || 'MM/DD/YYYY'}
              </span>
            </div>
          </div>
        </header>

        {/* ------------------------------------------------------------- */}
        {/* BODY: THẺ TRẠNG THÁI WEBSITE & TIÊU ĐỀ NỘI DUNG                */}
        {/* ------------------------------------------------------------- */}
        <main className="mt-14 flex flex-col items-start gap-6">
          
          {/* HIỂN THỊ NÚT TRẠNG THÁI WEBSITE (ONLINE / OFFLINE / NÂNG CẤP) */}
          <div className="flex items-center gap-4 flex-wrap">
            {renderStatusBadge()}
            
            {/* Bộ chọn demo để bạn thử bấm chuyển trạng thái (Có thể xóa bỏ sau) */}
            <div className="text-xs text-gray-400 flex gap-2 items-center bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-md">
              <span className="text-gray-300 font-medium">Thử trạng thái:</span>
              <button onClick={() => setStatus('online')} className="hover:text-emerald-400 transition-colors">Online</button> |
              <button onClick={() => setStatus('offline')} className="hover:text-rose-400 transition-colors">Offline</button> |
              <button onClick={() => setStatus('maintenance')} className="hover:text-amber-400 transition-colors">Bảo trì</button>
            </div>
          </div>

          {/* Tiêu đề chính giao diện */}
          <div className="space-y-3 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white drop-shadow-xl">
              Minh Thanh <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500">
                (Thanh Wind)
              </span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed pt-2">
              Chào mừng bạn đến với trang cá nhân chính thức. Nơi chia sẻ các dự án công nghệ, thủ thuật và thông tin kết nối.
            </p>
          </div>

        </main>
      </div>
    </div>
  );
}