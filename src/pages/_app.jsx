import '@/styles/reset.scss';
import '@/styles/globals.scss';
import Head from 'next/head';
import animates from '@/styles/_animation.module.scss';
import { EB_Garamond } from 'next/font/google';
import { Loader } from '@/components/Loader';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GoogleTagManagerAbove } from '@/components/GoogleTagManagerAbove';

const ENV = process.env.NEXT_PUBLIC_VERCEL_ENV;

const ebGaramond = EB_Garamond({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

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
