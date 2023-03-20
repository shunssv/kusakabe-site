import Image from 'next/image';
import styles from './Layout.module.scss';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import ButtonARight from '@/components/ui/Button/ButtonARight';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>{children}</main>
      <Footer />
    </>
  );
}
