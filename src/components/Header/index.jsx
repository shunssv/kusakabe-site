import Link from 'next/link';
import { Inter } from '@next/font/google';
import styles from './Header.module.css';

const inter = Inter({ subsets: ['latin'] });

export function Header() {
  return (
    <header className={`${styles.header} ${inter.className}`}>
      <Link href="/">Index</Link>
      <Link href="/works">Works</Link>
    </header>
  );
}