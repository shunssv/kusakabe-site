import styles from './HomeLayout.module.scss';
import { HomeHeader } from '@/components/Layouts/HomeHeader';
import { Footer } from '@/components/Layouts/Footer';

export function HomeLayout({ children }) {
  return (
    <>
      <HomeHeader />
      <main>
        <div className={styles.container}>{children}</div>
      </main>
      <Footer />
    </>
  );
}
