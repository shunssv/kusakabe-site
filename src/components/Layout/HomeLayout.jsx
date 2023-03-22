import styles from './HomeLayout.module.scss';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Loader } from '@/components/Loader';

export function HomeLayout({ children }) {
  return (
    <>
      <Header />
        <div className={styles.wrapper}>
          {children}
        </div>
      <Footer />
      <Loader />
    </>
  );
}
