import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Custom404.module.scss';
import { ButtonARight } from '@/components/Buttons/ButtonARight';
import { Lora } from 'next/font/google';
import { PrimaryLayout } from '@/components/Layouts/PrimaryLayout';

const lora = Lora({ subsets: ['latin'] });

const HEADINFO = {
  title: '404 page not found | shun kusakabe',
  description: '404 page not found | I am a web developer, UI designer, and project coordinator with four years of experience at a website agency in Tokyo, currently based in Los Angeles. My passion lies in creating user-friendly websites that tell a story, and I specialize in web design and UI/UX development using HTML, CSS, JavaScript, and design tools. I am always eager to learn and enjoy exploring new things. If you are seeking a dedicated and passionate web developer, UI designer, or project coordinator, please feel free to contact me via DM.',
  image: 'ogp.png'
}

export default function Custom404() {
  return (
    <>
      <Head>
        <title>{HEADINFO.title}</title>
        <meta name="description" content={HEADINFO.description} />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_VERCEL_URL} />
        <meta property="og:title" content={HEADINFO.title} />
        <meta property="og:description" content={HEADINFO.description} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_VERCEL_URL}/${HEADINFO.image}`} />
      </Head>

      <section className={styles.container}>
        <Image
          src="/404.png"
          width={500}
          height={300}
          className={styles.img404}
          alt="404 page not found"
          priority={true}
        />
        <h2 className={`${styles.title} ${lora.className}`}>404</h2>
        <div className={styles.inner}>
          <div className={styles.textWrapper}>
            <h3 className={styles.subtitle}>whoops</h3>
            <h4 className={styles.leadtext}>page not found</h4>
          </div>
          <p className={styles.text}>
            grab a cup of coffee, and take your time!
          </p>
        </div>
        <ButtonARight url="/" text="keep browsing" />
      </section>
    </>
  );
}

Custom404.getLayout = function getLayout(page) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
