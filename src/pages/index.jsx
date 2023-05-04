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
            <p>web developer / ui designer / project coordinator</p>
          </section>
          <div className={styles.description}>
            <p>
              I'm a web developer, UI designer, and project coordinator based in Los Angeles. Originally from Yamagata, Japan, I graduated from a university in Tokyo. I have over four years of experience working at a website agency in Tokyo, and I'm excited to start my new career in Los Angeles.
            </p>
            <p>
              My passion lies in creating beautiful and user-friendly websites that tell a story and engage their visitors. I specialize in web design and UI/UX development, using my skills in HTML, CSS, JavaScript, and various design tools to create seamless digital experiences. Whether it's building a new website from scratch or optimizing an existing one, I'm always looking for new things to learn and try.
            </p>
            <p>
              In addition to my work, I'm a big fan of pop music and love discovering new songs and artists. I believe that staying curious and open-minded is key to both personal and professional growth.
            </p>
            <p>
              If you're looking for a dedicated and passionate web developer, UI designer, or project coordinator, I would love to work with you. Please feel free to contact me via DM to discuss your project further.
            </p>
          </div>
        </div>
      </section>
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
