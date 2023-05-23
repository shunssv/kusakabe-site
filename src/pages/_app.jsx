import '@/styles/reset.scss';
import '@/styles/globals.scss';
import Head from 'next/head';
import animates from '@/styles/_animation.module.scss';
import { EB_Garamond } from 'next/font/google';
import { Loader } from '@/components/Loader';
import { GoogleTagManagerAbove } from '@/components/GoogleTagManagerAbove';
import { useLoading } from '@/hooks/useLoading';

const ENV = process.env.NEXT_PUBLIC_VERCEL_ENV;

const ebGaramond = EB_Garamond({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const isLoading = useLoading();

  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {ENV === 'Production' && <GoogleTagManagerAbove />}

      <style jsx global>{`
        html {
          font-family: ${ebGaramond.style.fontFamily};
        }
      `}</style>

      {isLoading ? (
        <Loader />
      ) : (
        <Loader
          fadeOut={animates.fadeOut}
          durationFaster={animates.durationFaster}
        />
      )}
      <Component {...pageProps} />
    </>
  );
}
