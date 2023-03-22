import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { Loader } from '@/components/Loader';
import { SlWrench } from 'react-icons/sl';
import { HomeLayout } from '@/components/Layout/HomeLayout';

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

Home.getLayout = function getLayout(page) {
  return (
    <HomeLayout>{page}</HomeLayout>
  )
}