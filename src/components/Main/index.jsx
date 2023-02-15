import styles from './Main.module.css';
import { Links } from '@/components/Links';
import { NextLogo } from '@/components/NextLogo';
import { HeadDescription } from '@/components/HeadDescription';
import { Header } from '@/components/Header';

export function Main(props) {
  return (
    <main className={styles.main}>
      <Header />
      <HeadDescription title={props.title}>
        <code className={styles.code}>src/pages/{props.title}.js</code>
      </HeadDescription>
      <NextLogo />
      <Links />
    </main>
  );
}
