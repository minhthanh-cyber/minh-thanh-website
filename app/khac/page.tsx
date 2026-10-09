import PhoneGrid from '@/components/PhoneGrid';
import { getPhones } from '@/lib/store';

export default async function KhacPage() {
  const brands = ['Vivo','OPPO','Honor','Huawei'];
  const list = (await getPhones()).filter((p)=>brands.includes(p.brand));
  return (
    <section className="space-y-5 py-8">
      <div className="liquid-card p-6"><div className="text-xs font-black uppercase tracking-[0.24em] text-red-500">Khác</div><h1 className="mt-2 text-3xl font-black">Các Hãng Khác</h1></div>
      <PhoneGrid phones={list} />
    </section>
  );
}
