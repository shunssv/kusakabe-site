import Link from 'next/link';
import styles from './HomeHeader.module.scss';
import { Playfair_Display } from 'next/font/google';
import { useInView } from 'react-intersection-observer';
import { SlArrowUp } from 'react-icons/sl';
import { useCallback } from 'react';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export function HomeHeader() {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const handleClick = useCallback((e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

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
          onClick={handleClick}
        >
          <SlArrowUp className={styles.icon} />
        </Link>
      )}
    </>
  );
}
