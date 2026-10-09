import type { Metadata } from 'next';
export const metadata:Metadata={title:'Thanh Wind Admin',robots:{index:false,follow:false},manifest:'/admin.webmanifest'};
import AdminPanel from '@/components/admin/AdminPanel';

export default function Page() {
  return <AdminPanel />;
}
