import styles from './HomeLayout.module.scss';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export function HomeLayout({ children }) {
  return (
    <>
      <Header />
        <div className={styles.wrapper}>
          {children}
        </div>
      <Footer />
    </>
  );
}
