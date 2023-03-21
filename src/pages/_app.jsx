import '@/styles/reset.scss';
import '@/styles/globals.scss';
import 'animate.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PrimaryLayout>
          <Component {...pageProps} />
      </PrimaryLayout>
    </>
  );
}
