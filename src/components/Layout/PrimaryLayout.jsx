import styles from './PrimaryLayout.module.scss';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Loader } from '@/components/Loader';

export function PrimaryLayout({ children }) {
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
