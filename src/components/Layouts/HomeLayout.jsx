import styles from './HomeLayout.module.scss';
import { HomeHeader } from '@/components/Layouts/HomeHeader';
import { Footer } from '@/components/Layouts/Footer';
import { Loader } from '@/components/Layouts/Loader';

export function HomeLayout({ children }) {
  return (
    <>
      <HomeHeader />
      <div className={styles.wrapper}>{children}</div>
      <Footer />
      <Loader />
    </>
  );
}
