import styles from './PrimaryLayout.module.scss';
import { Footer } from '@/components/Layouts/Footer';
import { Header } from '@/components/Layouts/Header';
import { Loader } from '@/components/Layouts/Loader';

export function PrimaryLayout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>{children}</div>
      <Footer />
      <Loader />
    </>
  );
}
