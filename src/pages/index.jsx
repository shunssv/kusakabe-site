import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import { Loader } from '@/components/Loader';
import { SlWrench } from 'react-icons/sl';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>shun kusakabe</title>
        <meta name="description" content="I am shun kusakabe." />
      </Head>
      <main className={styles.main}>
        <div className={styles.mainteinanceContainer}>
          <SlWrench className={styles.mainteinance} />
          Currently in production
          <SlWrench className={styles.mainteinance} />
        </div>
      </main>
      <Loader />
    </>
  );
}
