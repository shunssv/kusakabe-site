import '@/styles/reset.scss';
import '@/styles/globals.scss';
import styles from '@/styles/scrollToTopButton.module.scss'
import animates from '@/styles/_animation.module.scss';
import { EB_Garamond } from 'next/font/google';
import { Loader } from '@/components/Loader';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SlArrowUp } from "react-icons/sl";
import Link from 'next/link';

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

      <Link href="#" className={styles.scrollToTopButton}>
        <SlArrowUp className={styles.icon} />
      </Link>
    </>
  );
}
