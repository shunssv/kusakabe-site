import Link from 'next/link';
import styles from './HomeHeader.module.scss';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export function HomeHeader() {
  return (
    <header className={`${styles.header} ${playfairDisplay.className}`}>
      <h1 className={styles.name}>
        <Link href="/">shun kusakabe</Link>
      </h1>
    </header>
  );
}
