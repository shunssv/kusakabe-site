import Head from 'next/head';
import styles from '@/styles/Maintenance.module.scss';
import { SlWrench } from 'react-icons/sl';
import { PrimaryLayout } from '@/components/Layout/PrimaryLayout';

export default function Maintenance() {
  return (
    <>
      <Head>
        <title>Currently in production | shun kusakabe</title>
        <meta name="description" content="Currently in production" />
      </Head>

      <section className={styles.container}>
        <div className={styles.mainteinanceContainer}>
          <SlWrench className={styles.mainteinance} />
          Currently in production
          <SlWrench className={styles.mainteinance} />
        </div>
      </section>
      
    </>
  );
}

Maintenance.getLayout = function getLayout(page) {
  return (
    <PrimaryLayout>{page}</PrimaryLayout>
  )
}