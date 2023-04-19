import { HomeHeader } from '@/components/Layouts/HomeHeader';
import { Footer } from '@/components/Layouts/Footer';
import { Loader } from '@/components/Layouts/Loader';

export function HomeLayout({ children }) {
  return (
    <>
      <HomeHeader />
      <div>{children}</div>
      <Footer />
      <Loader />
    </>
  );
}
