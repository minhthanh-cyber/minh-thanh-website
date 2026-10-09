'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Search, Clock, ShieldAlert } from 'lucide-react';

// DANH SÁCH HÌNH NỀN TỰ ĐỘNG CHUYỂN ĐỔI
const BACKGROUND_IMAGES = [
  '/images/vivo-x300-ultra-background.jpg',
  '/images/xiaomi-17-ultra-backround.webp',
  '/images/xiaomi-18-pro-backround.webp',
  '/images/xiaomi-18-pro-max-backround.png',
];

export default function Home() {
  // 1. LOGIC ĐỒNG HỒ THỜI GIAN THỰC
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

  // 2. LOGIC HÌNH NỀN ĐỘNG SLIDESHOW (7 GIÂY/ẢNH)
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const bgTimer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 7000);

    return () => clearInterval(bgTimer);
  }, []);

  // 3. LOGIC TRẠNG THÁI WEBSITE
  const [status, setStatus] = useState<'online' | 'offline' | 'maintenance'>('online');

  // Kiểm tra môi trường: Chỉ hiện nút thử nghiệm khi chạy localhost / VS Code
  const isDevelopment = process.env.NODE_ENV === 'development';

  const renderStatusBadge = () => {
    switch (status) {
      case 'online':
        return (
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Đang Online
          </span>
        );
      case 'offline':
        return (
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-rose-950/80 text-rose-400 border border-rose-500/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            Đang Offline
          </span>
        );
      case 'maintenance':
        return (
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-950/80 text-amber-400 border border-amber-500/30 backdrop-blur-md">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
            Đang Nâng Cấp
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full min-h-[520px] md:min-h-[600px] overflow-hidden bg-[#0a0a0a] text-white rounded-3xl my-2 shadow-2xl border border-white/10 transition-all duration-300">
      
      {/* ------------------------------------------------------------- */}
      {/* HÌNH NỀN ĐỘNG SLIDESHOW PHÓNG TO HÒA NHẬP TOÀN KHU VỰC         */}
      {/* ------------------------------------------------------------- */}
      {BACKGROUND_IMAGES.map((imgUrl, index) => (
        <div
          key={imgUrl}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === bgIndex ? 'opacity-40 scale-105' : 'opacity-0 scale-100'
          } transition-transform duration-[7000ms]`}
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      
      {/* Gradient phủ làm dịu ánh sáng nền */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none" />

      {/* NỘI DUNG CHÍNH KHU VỰC HERO BANNER */}
      <div className="relative z-10 w-full h-full min-h-[520px] md:min-h-[600px] flex flex-col justify-between p-6 md:p-10">
        
        {/* HEADER TRONG BANNER: LOGO, THANH TÌM KIẾM VÀ ĐỒNG HỒ */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          
          {/* Logo Tên Thương Hiệu */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl overflow-hidden relative shadow-lg shadow-red-500/20 border border-white/20">
              <Image
                src="/images/logo.png"
                alt="Logo Thanh Wind"
                width={44}
                height={44}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="font-extrabold text-xl md:text-2xl tracking-wider text-white">
              THANH WIND <span className="text-red-500 text-sm font-semibold">(VIONIX)</span>
            </span>
          </div>

          {/* THANH TÌM KIẾM TÍCH HỢP LOGO */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-2.5 flex items-center pointer-events-none z-10">
              <div className="w-6 h-6 rounded-md overflow-hidden relative border border-white/20">
                <Image
                  src="/images/logo.png"
                  alt="Search Logo"
                  width={24}
                  height={24}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm nội dung, dự án..."
              className="w-full pl-11 pr-10 py-2.5 bg-black/40 border border-white/15 rounded-2xl text-sm text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all backdrop-blur-md"
            />
            <Search className="absolute right-3.5 top-3 w-4 h-4 text-gray-400" />
          </div>

          {/* ĐỒNG HỒ THỜI GIAN THỰC */}
          <div className="flex items-center gap-3 bg-black/40 border border-white/15 px-4 py-2 rounded-2xl backdrop-blur-md shadow-inner">
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
        </div>

        {/* THÔNG TIN CHÍNH & NÚT TRẠNG THÁI */}
        <div className="my-auto pt-8 pb-4 flex flex-col items-start gap-5 max-w-3xl">
          
          {/* TRẠNG THÁI WEBSITE & NÚT THỬ TRẠNG THÁI (ẨN TRÊN PRODUCTION) */}
          <div className="flex items-center gap-4 flex-wrap">
            {renderStatusBadge()}
            
            {/* Chỉ hiển thị bộ chọn khi bạn chạy thử dưới Local / VS Code */}
            {isDevelopment && (
              <div className="text-xs text-gray-400 flex gap-2 items-center bg-black/50 px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-md">
                <span className="text-gray-300 font-medium">Thử trạng thái:</span>
                <button onClick={() => setStatus('online')} className="hover:text-emerald-400 transition-colors">Online</button> |
                <button onClick={() => setStatus('offline')} className="hover:text-rose-400 transition-colors">Offline</button> |
                <button onClick={() => setStatus('maintenance')} className="hover:text-amber-400 transition-colors">Bảo trì</button>
              </div>
            )}
          </div>

          {/* Tiêu đề phóng to đồng bộ */}
          <div className="space-y-3">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-none drop-shadow-2xl">
              Minh Thanh <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500">
                (Thanh Wind)
              </span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed pt-2 max-w-2xl font-normal">
              Chào mừng bạn đến với trang cá nhân chính thức. Nơi chia sẻ các dự án công nghệ, thủ thuật và thông tin kết nối.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}