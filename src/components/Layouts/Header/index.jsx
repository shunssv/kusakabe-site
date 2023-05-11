import Link from 'next/link';
import styles from './Header.module.scss';
import { Playfair_Display } from 'next/font/google';
import { useInView } from 'react-intersection-observer';
import { SlArrowUp } from 'react-icons/sl';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export function Header() {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <>
      <header
        className={`${styles.header} ${playfairDisplay.className}`}
        ref={ref}
      >
        <h1 className={styles.name}>
          <Link href="/">shun kusakabe</Link>
        </h1>
      </header>

      {inView ? (
        <Link href="#" className={styles.scrollToTopButton}>
          <SlArrowUp className={styles.icon} />
        </Link>
      ) : (
        <Link
          href="#"
          className={`${styles.scrollToTopButton} ${styles.appear}`}
        >
          <SlArrowUp className={styles.icon} />
        </Link>
      )}
    </>
  );
}
