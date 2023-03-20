import Link from 'next/link';
import styles from './Button.module.scss';

export default function Button({ url, text }) {
  return (
    <Link href={url} className={styles.btn}>
      {text}
    </Link>
  );
}
