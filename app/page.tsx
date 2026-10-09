import HomePageClient from '@/components/HomePageClient';
import { getPhones, getSettings } from '@/lib/store';

export default async function HomePage() {
  const [phones, settings] = await Promise.all([getPhones(), getSettings()]);
  return <HomePageClient phones={phones} settings={settings} />;
}
