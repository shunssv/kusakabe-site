import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { HomeLayout } from '@/components/Layouts/HomeLayout';
import { MediaList } from '@/components/MediaList';
import mvCherry from '../assets/mv-icon.svg';

export default function Home({ worksItems }) {

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
                width={1000}
                height={400}
                alt="shun kusakabe"
                className={styles.mv}
                priority
              />
              <Image
                src={mvCherry}
                alt="shun kusakabe"
                className={styles.mvItem}
                sizes="100vw"
                priority
              />
            </h2>
            <MediaList style={styles.topMediaList} />
          </div>
        </section>

        <article className={styles.worksContainer}>
          <h3 className={styles.title}>works</h3>
          {worksItems.worksList.map((item) => {
            return (
              <section key={item.number} className={styles.worksItemContainer}>
                <h4 className={styles.worksImageWrapper}>
                  <Link href={`/works/${item.slug}`}>
                    <Image
                      src={item.image}
                      sizes="100vw"
                      alt="ENK English"
                      className={styles.worksImage}
                      fill
                      priority
                    />
                  </Link>
                </h4>
                <dl className={styles.worksInfo}>
                  <dt className={styles.domain}>{item.domain}</dt>
                  <dd className={styles.name}>{item.name}</dd>
                  <dd className={styles.features}>{item.features}</dd>
                  <dd>
                    <Link href={`/works/${item.slug}`} className={styles.button}>
                      view details
                    </Link>
                  </dd>
                </dl>
              </section>
            );
          })}
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
              <p>
                Thank you for taking the time to read this.
                <br />
                Bye for now!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

import fsPromises from 'fs/promises';
import path from 'path';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const worksItems = JSON.parse(jsonData); //return Object

  return {
    props: { worksItems },
  };
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
