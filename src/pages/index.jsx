import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { HomeLayout } from '@/components/Layout/HomeLayout';
import Image from 'next/image';
import { MediaList } from '@/components/MediaList';
import Link from 'next/link';
import { Github } from '@/components/Media/Github';

export default function Home() {
  return (
    <>
      <Head>
        <title>shun kusakabe</title>
        <meta name="description" content="I am shun kusakabe." />
      </Head>

      <div className={styles.container}>
        <section className={styles.mvContainer}>
          <h2 className={styles.mvInner}>
            <Image
              src="/mv.svg"
              width={700}
              height={500}
              alt="shun kusakabe"
              priority
            />
            <Image
              src="/mv-icon.svg"
              width={40}
              height={60}
              alt="shun kusakabe"
              priority
            />
          </h2>
          <MediaList />
        </section>

        <article>
          <h3>works</h3>
          <section>
            <Link href="/works/enk-english">
              <h4>
                <Image
                  src="/works1.jpg"
                  width={700}
                  height={500}
                  alt="ENK English"
                  priority
                />
              </h4>
              <dl>
                <dt>enk-english.online</dt>
                <dd>ENK English</dd>
                <dd>WordPress - original theme</dd>
              </dl>
            </Link>
          </section>

          <section>
            <Link href="/works/enk-english">
              <h4>
                <Image
                  src="/works1.jpg"
                  width={700}
                  height={500}
                  alt="ENK English"
                  priority
                />
              </h4>
              <dl>
                <dt>beauty-cream_lp</dt>
                <dd>assignment</dd>
                <dd>Vanilla HTML / CSS / JavaScript (jQuery)</dd>
                <Github url="https://github.com/shunssv/beauty-cream_lp" />
              </dl>
            </Link>
          </section>
        </article>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
