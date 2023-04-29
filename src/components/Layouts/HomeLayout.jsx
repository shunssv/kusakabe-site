import { HomeHeader } from '@/components/Layouts/HomeHeader';
import { Footer } from '@/components/Layouts/Footer';

export function HomeLayout({ children }) {
  return (
    <>
      <HomeHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}
