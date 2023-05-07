import '@/styles/reset.scss';
import '@/styles/globals.scss';
import { EB_Garamond } from 'next/font/google';
import { Loader } from '@/components/Layouts/Loader';

const ebGaramond = EB_Garamond({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <style jsx global>{`
        html {
          font-family: ${ebGaramond.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />

      <Loader />
    </>
  );
}
