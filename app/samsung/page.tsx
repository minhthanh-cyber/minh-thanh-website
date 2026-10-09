import type { Metadata } from 'next';
import BrandPage from '@/components/BrandPage';
export const metadata: Metadata = { title: 'Samsung — Thanh Wind' };
export default function Page(){ return <BrandPage brand="Samsung" label="Samsung" />; }
