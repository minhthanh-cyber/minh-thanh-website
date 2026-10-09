import type { Metadata } from 'next';
import BrandPage from '@/components/BrandPage';
export const metadata: Metadata = { title: 'Xiaomi — Thanh Wind' };
export default function Page(){ return <BrandPage brand="Xiaomi" label="Xiaomi" />; }
