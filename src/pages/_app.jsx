import '@/styles/reset.scss';
import '@/styles/globals.scss';
import Script from 'next/script';
import animates from '@/styles/_animation.module.scss';
import { EB_Garamond } from 'next/font/google';
import { Loader } from '@/components/Loader';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const GTM_CONTAINER_ID = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;
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
      {ENV === 'Production' && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');
          `}
        </Script>
      )}

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
