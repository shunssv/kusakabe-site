import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Custom404.module.scss';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import ButtonARight from '@/components/ui/Button/ButtonARight';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 page not found | shun kusakabe</title>
        <meta name="description" content="404 page not found" />
      </Head>

      <Header />
      <main>
        <div className={styles.wrapper}>
          <section className={styles.container}>
            <Image
              src="/404.png"
              width={500}
              height={300}
              className={styles.img404}
              alt="404 page not found"
            />
            <h2 className={styles.title}>404</h2>
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
        </div>
      </main>
      <Footer />
    </>
  );
}
