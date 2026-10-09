import type { Metadata } from 'next';
import BrandPage from '@/components/BrandPage';
export const metadata: Metadata = { title: 'iPhone — Thanh Wind' };
export default function Page(){ return <BrandPage brand="iPhone" label="iPhone" />; }
