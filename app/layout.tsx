import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MINH THANH — Tham khảo thiết bị công nghệ",
  description:
    "Minh Thanh tổng hợp giá bán, cấu hình và thông số của các dòng điện thoại phổ biến tại Việt Nam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${beVietnamPro.variable} min-h-screen bg-white font-sans text-[#111111] antialiased transition-colors duration-300 dark:bg-[#2B2B2B] dark:text-white`}
      >
        <ThemeProvider>
          <Header />
          <main className="mx-auto max-w-content px-6">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
