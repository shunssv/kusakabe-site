import styles from './HomeLayout.module.scss';
import { Footer } from '@/components/Layouts/Footer';
import { HomeHeader } from '@/components/Layouts/HomeHeader';

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
