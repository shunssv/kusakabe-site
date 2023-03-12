import Head from 'next/head'
import Image from 'next/image'
import img404 from 'public/404.png'
import { Inter } from 'next/font/google'
import styles from '@/styles/Custom404.module.scss'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

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
        <h1 className={styles.title}>
          <Link href="/">shun kusakabe</Link>
        </h1>
      </header>
      <main>
        <div className={styles.wrapper}>
          <section className={styles.container}>
            <Image src={img404} width={300} height={200} alt="404 page not found" />
            <h2>404</h2>
            <div>
              <h3>whoops</h3>
              <h4>page not found</h4>
              <p>grab a cup of coffee, and take your time!</p>
            </div>
            <Link href="/" className={styles.btn}>keep browsing</Link>
          </section>
        </div>
      </main>
      <footer className={styles.footer}>
        <ul role="list" className={styles.snsList}>
          <li><a href="https://twitter.com/shunssv" target="_blank" rel="noopener noreferrer"><Image src="/sns-twitter.svg" width={30} height={30} /></a></li>
          <li><a href="https://www.linkedin.com/in/shunkusakabe/" target="_blank" rel="noopener noreferrer"><Image src="/sns-linkedin.svg"  width={30} height={30} /></a></li>
          <li><a href="https://github.com/shunssv" target="_blank" rel="noopener noreferrer"><Image src="/sns-github.svg"  width={30} height={30} /></a></li>
        </ul>
        <small className={styles.copyright}>© 2023 shun kusakabe</small>
      </footer>
    </>
  )
}
``