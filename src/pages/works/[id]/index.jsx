import Head from 'next/head';
import styles from './Works.module.scss';
import { SlWrench } from 'react-icons/sl';
import { PrimaryLayout } from '@/components/Layout/PrimaryLayout';
import { useRouter } from 'next/router';

export default function Works() {
  const router = useRouter();
  const id = router.query.id;

  return (
    <>
      <Head>
        <title>enk-english_online | Works | shun kusakabe</title>
        <meta
          name="description"
          content="This page is for showcases that I have developed so far. I am shun kusakabe."
        />
      </Head>

      <section className={styles.container}>
        <div className={styles.mainteinanceContainer}>
          <SlWrench className={styles.mainteinance} />
          This is Works page: {id}
          <SlWrench className={styles.mainteinance} />
        </div>
      </section>
    </>
  );
}

Works.getLayout = function getLayout(page) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
