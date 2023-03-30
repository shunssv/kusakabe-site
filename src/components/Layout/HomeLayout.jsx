import styles from './HomeLayout.module.scss';
import { HomeHeader } from '../HomeHeader';
import { Footer } from '@/components/Footer';
import { Loader } from '@/components/Loader';

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
