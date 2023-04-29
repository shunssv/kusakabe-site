import '@/styles/reset.scss';
import '@/styles/globals.scss';
import Head from 'next/head';
import { EB_Garamond } from 'next/font/google';
import { Loader } from '@/components/Layouts/Loader';

const ebGaramond = EB_Garamond({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <>
      <style jsx global>{`
        html {
          font-family: ${ebGaramond.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />

      <Loader />
    </>
  );
}
