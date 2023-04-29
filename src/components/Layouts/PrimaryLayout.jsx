import styles from './PrimaryLayout.module.scss';
import { Footer } from '@/components/Layouts/Footer';
import { Header } from '@/components/Layouts/Header';

export function PrimaryLayout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>{children}</main>
      <Footer />
    </>
  );
}