import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { HomeLayout } from '@/components/Layout/HomeLayout';
import Image from 'next/image';
import { MediaList } from '@/components/MediaList';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>shun kusakabe</title>
        <meta name="description" content="I am shun kusakabe." />
      </Head>

      <div className={styles.container}>
        <section className={styles.mvContainer}>
          <div className={styles.mvInner}>
            <h2 className={styles.mvImages}>
              <Image
                src="/mv.svg"
                width={700}
                height={500}
                alt="shun kusakabe"
                priority
              />
              <Image
                src="/mv-icon.svg"
                width={30}
                height={40}
                alt="shun kusakabe"
                className={styles.mvItem}
                priority
              />
            </h2>
            <MediaList />
          </div>
        </section>

        <article className={styles.worksContainer}>
          <h3 className={styles.title}>works</h3>
          <section className={styles.worksItemContainer}>
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
              <dl className={styles.worksInfo}>
                <dt>enk-english.online</dt>
                <dd>ENK English</dd>
                <dd>WordPress - original theme</dd>
              </dl>
            </Link>
          </section>
          <section className={styles.worksItemContainer}>
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
              <dl className={styles.worksInfo}>
                <dt>beauty-cream_lp</dt>
                <dd>assignment</dd>
                <dd>Vanilla HTML / CSS / JavaScript (jQuery)</dd>
              </dl>
            </Link>
          </section>
          <section className={styles.worksItemContainer}>
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
              <dl className={styles.worksInfo}>
                <dt>beauty-cream_lp</dt>
                <dd>assignment</dd>
                <dd>Vanilla HTML / CSS / JavaScript (jQuery)</dd>
              </dl>
            </Link>
          </section>
        </article>

        <section className={styles.aboutContainer}>
          <div className={styles.aboutInner}>
            <h3 className={styles.title}>about</h3>
            <section className={styles.personalInfo}>
              <div className={styles.name}>
                <h4>shun kusakabe</h4>
                <span>he/him</span>
              </div>
              <p>web developer / ui designer</p>
            </section>
            <div className={styles.description}>
              <p>
                I make websites and design user interfaces , and am base in Los
                Angeles, California. Let me introduce myself briefly. I was born
                and raised in Yamagata which is located at the northern Japan,
                called Tohoku. After graduating from a university in Tokyo, I
                have worked for a website agency in Tokyo for approximately four
                and half year. I am discovering my new career in City of Flowers
                and Sunshine.
              </p>
              <p>
                If I have to describe myself within one sentence, I always look
                for new things and dive into them as found. Listening pop music
                is one of things I love to do in my spare time. I enjoy
                exploring many songs and artists. Once I found songs which are
                matched my taste, I listening to them over and over again.
                Similarly, I would love to learn new something while working as
                well and make use of them for my work.
              </p>
              <p>
                I believe that my experiences and skills help you out. Please
                feel free to DM me if you are interested.
              </p>
              <p>Thank you for taking the time to read this.<br />Bye for now!</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
