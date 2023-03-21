import '@/styles/reset.scss';
import '@/styles/globals.scss';
import 'animate.css';
import Head from 'next/head';
import { PrimaryLayout } from '@/components/Layout/PrimaryLayout';
import { EB_Garamond } from 'next/font/google';

const ebGaramond = EB_Garamond({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PrimaryLayout>
        <main className={ebGaramond.className}>
          <Component {...pageProps} />
        </main>
      </PrimaryLayout>
    </>
  );
}
