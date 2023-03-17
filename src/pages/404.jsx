import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Custom404.module.scss'
import { SlArrowRight } from 'react-icons/sl'
import { Footer } from '@/components/Footer'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 page not found | shun kusakabe</title>
        <meta name="description" content="404 page not found" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.name}>
          <Link href="/">shun kusakabe</Link>
        </h1>
      </header>
      <main>
        <div className={styles.wrapper}>
          <section className={styles.container}>
            <Image src='/404.png' width={500} height={300} className={styles.img404} alt="404 page not found" />
            <h2 className={styles.title}>404</h2>
            <div className={styles.inner}>
              <div className={styles.textWrapper}>
                <h3 className={styles.subtitle}>whoops</h3>
                <h4 className={styles.leadtext}>page not found</h4>
              </div>
              <p className={styles.text}>grab a cup of coffee, and take your time!</p>
            </div>
            <Link href="/" className={styles.btn}>keep browsing<SlArrowRight className={styles.arrow} /></Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}