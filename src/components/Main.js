import { Inter } from '@next/font/google';
import styles from '@/components/Main.module.css';
import { Links } from '@/components/Links';
import { NextLogo } from '@/components/NextLogo';
import { HeadDescription } from '@/components/HeadDescription';

const inter = Inter({ subsets: ['latin'] });

export default function Main(props) {
  return (
    <main className={styles.main}>
      <HeadDescription title={props.title}>
        <code className={styles.code}>src/pages/{props.title}.js</code>
      </HeadDescription>
      <NextLogo />
      <Links />
    </main>
  );
}
