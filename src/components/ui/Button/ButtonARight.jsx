import Link from 'next/link';
import styles from './Button.module.scss';
import { SlArrowRight } from 'react-icons/sl';

export default function ButtonARight({ url, text }) {
  return (
    <Link href={url} className={styles.btn}>
      {text}
      <SlArrowRight className={styles.arrow} />
    </Link>
  );
}
