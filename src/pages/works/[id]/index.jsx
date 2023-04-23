import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Works.module.scss';
import { useRouter } from 'next/router';
import { PrimaryLayout } from '@/components/Layouts/PrimaryLayout';
import { Playfair_Display } from 'next/font/google';
import { HiCode, HiLightningBolt, HiCog, HiChat } from 'react-icons/hi';
import { ButtonARight } from '@/components/Buttons/ButtonARight';
import { Button } from '@/components/Buttons/Button';
import worksImage from '@/assets/works1.jpg';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export default function Works(props) {
  const router = useRouter();
  const { id } = router.query;

  const worksDetail = props.worksDetail;
  return (
    <>
      <Head>
        <title>{works.name} | Works | shun kusakabe</title>
        <meta
          name="description"
          content="This page is for showcases that I have developed so far. I am shun kusakabe."
        />
      </Head>

      <section className={styles.container}>
        <h2 className={`${playfairDisplay.className} ${styles.title}`}>
          works
        </h2>
        <figure>
          <Image
            src={worksImage}
            sizes="100vw"
            alt={works.name}
            className={styles.worksImage}
            priority
          />
        </figure>
        <div className={styles.detailWrapper}>
          <div className={styles.informationContainer}>
            <h3 className={styles.domain}>
              <a
                href="https://enk-english.online/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {works.domain}
              </a>
            </h3>
            <h4 className={styles.name}>{works.name}</h4>
            <p className={styles.summary}>{works.summary}</p>
            <p className={styles.comment}>{works.comment}</p>
          </div>
          <div className={styles.prerequisitesContainer}>
            <h3>prerequisites</h3>
            <dl className={styles.prerequisitesItem}>
              <dt className={styles.category}>
                languages <HiCode />
              </dt>
              <dd className={styles.badge}>{works.languages[0]}</dd>
              <dd className={styles.badge}>{works.languages[1]}</dd>
              <dd className={styles.badge}>{works.languages[2]}</dd>
              <dd className={styles.badge}>{works.languages[3]}</dd>
            </dl>
            <dl className={styles.prerequisitesItem}>
              <dt className={styles.category}>
                frameworks / libraries / systems <HiLightningBolt />
              </dt>
              <dd className={styles.badge}>{works.frameworks[0]}</dd>
              <dd className={styles.badge}>{works.frameworks[1]}</dd>
            </dl>
            <dl className={styles.prerequisitesItem}>
              <dt className={styles.category}>
                tools <HiCog />
              </dt>
              <dd className={styles.badge}>{works.tools[0]}</dd>
              <dd className={styles.badge}>{works.tools[1]}</dd>
              <dd className={styles.badge}>{works.tools[2]}</dd>
              <dd className={styles.badge}>{works.tools[3]}</dd>
              <dd className={styles.badge}>{works.tools[4]}</dd>
              <dd className={styles.badge}>{works.tools[5]}</dd>
              <dd className={styles.badge}>{works.tools[6]}</dd>
              <dd className={styles.badge}>{works.tools[7]}</dd>
              <dd className={styles.badge}>{works.tools[8]}</dd>
              <dd className={styles.badge}>{works.tools[9]}</dd>
              <dd className={styles.badge}>{works.tools[10]}</dd>
              <dd className={styles.badge}>{works.tools[11]}</dd>
              <dd className={styles.badge}>{works.tools[12]}</dd>
              <dd className={styles.badge}>{works.tools[13]}</dd>
              <dd className={styles.badge}>{works.tools[14]}</dd>
              <dd className={styles.badge}>{works.tools[15]}</dd>
              <dd className={styles.badge}>{works.tools[16]}</dd>
            </dl>
            <dl className={styles.prerequisitesItem}>
              <dt className={styles.category}>
                roles <HiChat />
              </dt>
              <dd className={styles.badge}>{works.roles[0]}</dd>
              <dd className={styles.badge}>{works.roles[1]}</dd>
              <dd className={styles.badge}>{works.roles[2]}</dd>
              <dd className={styles.badge}>{works.roles[3]}</dd>
            </dl>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <ButtonARight url="/works/2" text="view next" />
          <Button url="/" text="go to home" />
        </div>
      </section>
    </>
  );
}

//fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path';

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  const worksPaths = objectData.worksIds; 

  const paths = worksPaths.map((worksPath) => ({
    params: { id: worksPath.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps( {params} ) {
  const id = params.id;
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}

//layout
Works.getLayout = function getLayout(page) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
