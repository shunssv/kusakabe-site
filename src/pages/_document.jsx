import { Html, Head, Main, NextScript } from 'next/document';
import { GoogleTagManagerBelow } from '@/components/GoogleTagManagerBelow';

const ENV = process.env.NEXT_PUBLIC_VERCEL_ENV;

export default function Document() {
  return (
    <Html lang="en" prefix="og: http://ogp.me/ns#">
      <Head>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shunssv" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>
      <body>
        {ENV === 'Production' && <GoogleTagManagerBelow />}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
