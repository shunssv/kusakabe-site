import Link from 'next/link';
import styles from './ScrollToTopButton.module.scss';
import { SlArrowUp } from 'react-icons/sl';
import { useCallback } from 'react';

export function ScrollToTopButton({ appear }) {
  const handleClick = useCallback((e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Link
      href="#"
      className={`${styles.scrollToTopButton} ${appear}`}
      onClick={handleClick}
    >
      <SlArrowUp className={styles.icon} />
    </Link>
  );
}
