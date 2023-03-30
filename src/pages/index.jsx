import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { HomeLayout } from '@/components/Layout/HomeLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>shun kusakabe</title>
        <meta name="description" content="I am shun kusakabe." />
      </Head>

      <section className={styles.container}>
        
      </section>
      
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <HomeLayout>{page}</HomeLayout>
  )
}