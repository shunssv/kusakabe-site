import styles from './Main.module.css';
import { Links } from '@/components/Links';
import { NextLogo } from '@/components/NextLogo';
import { HeadDescription } from '@/components/HeadDescription';
import { Header } from '@/components/Header';
import Link from 'next/link';
import { useCallback } from 'react';

export function Main(props) {

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
  }, []);
  
  return (
    <main className={styles.main}>
      <Header />
      <HeadDescription title={props.title}>
        <code className={styles.code}>src/pages/{props.title}.js</code>
      </HeadDescription>

      <Link
        href="/works"
        onClick={handleClick}
      >
        click me
      </Link>

      <NextLogo />
      <Links />
    </main>
  );
}
