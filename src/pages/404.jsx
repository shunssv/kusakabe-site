import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
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

      <header>
        <h1>
          <Link href="/">shun kusakabe</Link>
        </h1>
      </header>

      <main>
        <div>
          <section>
            <h2>404</h2>
            <div>
              <h3>whoops</h3>
              <h4>page not found</h4>
              <p>grab a cup of coffee, and take your time!</p>
            </div>
            <Link href="/">keep browsing</Link>
          </section>
        </div>
      </main>
      <footer>
        <small></small>
      </footer>
    </>
  )
}
