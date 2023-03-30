import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { HomeLayout } from '@/components/Layout/HomeLayout';
import Image from 'next/image';
import { MediaList } from '@/components/MediaList';

export default function Home() {
  return (
    <>
      <Head>
        <title>shun kusakabe</title>
        <meta name="description" content="I am shun kusakabe." />
      </Head>

      <div className={styles.container}>
        <section>
          <h2>
            <Image />
            <MediaList />
          </h2>
        </section>
      </div>
      
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <HomeLayout>{page}</HomeLayout>
  )
}