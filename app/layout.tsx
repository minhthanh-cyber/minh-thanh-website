import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import { getSettings } from '@/lib/store';
import { designCss } from '@/lib/design-controls';
import SiteChrome from '@/components/SiteChrome';


export const metadata: Metadata = {
  title: 'Thanh Wind — Premium Phone Hub',
  description: 'Danh mục điện thoại, thông số RAM/ROM và giá tham khảo, tìm kiếm nhanh và Thanh Wind AI.',
  icons: { icon: '/images/icon.png' },
  manifest: '/manifest.webmanifest',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSettings();
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`min-h-screen bg-[#f5f7fb] font-sans text-[#111827] antialiased transition-colors duration-300 dark:bg-[#07070b] dark:text-white`}>
        <ThemeProvider>
          <style dangerouslySetInnerHTML={{ __html: designCss(settings.design) }} />
          <SiteChrome settings={settings}>{children}</SiteChrome>
        </ThemeProvider>
      </body>
    </html>
  );
}
