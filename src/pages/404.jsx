import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Custom404.module.scss';
import ButtonARight from '@/components/ui/Button/ButtonARight';
import { Lora } from 'next/font/google';
import { PrimaryLayout } from '@/components/Layout/PrimaryLayout';

const lora = Lora({ subsets: ['latin'] });

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 page not found | shun kusakabe</title>
        <meta name="description" content="404 page not found" />
      </Head>

      <section className={styles.container}>
        <Image
          src="/404.png"
          width={500}
          height={300}
          className={styles.img404}
          alt="404 page not found"
          priority={true}
        />
        <h2 className={`${styles.title} ${lora.className}`}>404</h2>
        <div className={styles.inner}>
          <div className={styles.textWrapper}>
            <h3 className={styles.subtitle}>whoops</h3>
            <h4 className={styles.leadtext}>page not found</h4>
          </div>
          <p className={styles.text}>
            grab a cup of coffee, and take your time!
          </p>
        </div>
        <ButtonARight url="/" text="keep browsing" />
      </section>
    </>
  );
}

Custom404.getLayout = function getLayout(page) {
  return (
    <PrimaryLayout>
      {page}
    </PrimaryLayout>
  )
}