import Link from 'next/link'
import styles from './Header.module.scss';

export function Header() {

  return (
    <header className={styles.header}>
      <h1 className={styles.name}>
        <Link href="/">shun kusakabe</Link>
      </h1>
    </header>
  );
}
