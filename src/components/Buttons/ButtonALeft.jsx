import Link from 'next/link';
import styles from './Button.module.scss';
import { SlArrowLeft } from 'react-icons/sl';

export function ButtonALeft({ url, text }) {
  return (
    <Link href={url} className={styles.btn}>
      {text}
      <SlArrowLeft className={`${styles.arrow} ${styles.isReverse}`} />
    </Link>
  );
}
