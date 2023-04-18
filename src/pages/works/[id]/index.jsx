import Head from 'next/head';
import styles from './Works.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { PrimaryLayout } from '@/components/Layouts/PrimaryLayout';
import { Playfair_Display } from 'next/font/google';

import { HiCode, HiLightningBolt, HiCog, HiChat } from 'react-icons/hi';
import { ButtonARight } from '@/components/Buttons/ButtonARight';
import { Button } from '@/components/Buttons/Button';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export default function Works(props) {
  const router = useRouter();
  const id = router.query.id;

  const worksList = props.worksList;

  return (
    <>
      <Head>
        <title>{worksList[0].name} | Works | shun kusakabe</title>
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
            src="/works1.jpg"
            width={700}
            height={500}
            alt={worksList[0].name}
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
                {worksList[0].domain}
              </a>
            </h3>
            <h4 className={styles.name}>{worksList[0].name}</h4>
            <p className={styles.summary}>{worksList[0].summary}</p>
            <p className={styles.comment}>{worksList[0].comment}</p>
          </div>
          <div className={styles.prerequisitesContainer}>
            <h3>prerequisites</h3>
            <dl className={styles.prerequisitesItem}>
              <dt className={styles.category}>
                languages <HiCode />
              </dt>
              <dd className={styles.badge}>{worksList[0].languages[0]}</dd>
              <dd className={styles.badge}>{worksList[0].languages[1]}</dd>
              <dd className={styles.badge}>{worksList[0].languages[2]}</dd>
              <dd className={styles.badge}>{worksList[0].languages[3]}</dd>
            </dl>
            <dl className={styles.prerequisitesItem}>
              <dt className={styles.category}>
                frameworks / libraries / systems <HiLightningBolt />
              </dt>
              <dd className={styles.badge}>{worksList[0].frameworks[0]}</dd>
              <dd className={styles.badge}>{worksList[0].frameworks[1]}</dd>
            </dl>
            <dl className={styles.prerequisitesItem}>
              <dt className={styles.category}>
                tools <HiCog />
              </dt>
              <dd className={styles.badge}>{worksList[0].tools[0]}</dd>
              <dd className={styles.badge}>{worksList[0].tools[1]}</dd>
              <dd className={styles.badge}>{worksList[0].tools[2]}</dd>
              <dd className={styles.badge}>{worksList[0].tools[3]}</dd>
              <dd className={styles.badge}>{worksList[0].tools[4]}</dd>
              <dd className={styles.badge}>{worksList[0].tools[5]}</dd>
              <dd className={styles.badge}>{worksList[0].tools[6]}</dd>
              <dd className={styles.badge}>{worksList[0].tools[7]}</dd>
              <dd className={styles.badge}>{worksList[0].tools[8]}</dd>
              <dd className={styles.badge}>{worksList[0].tools[9]}</dd>
              <dd className={styles.badge}>{worksList[0].tools[10]}</dd>
              <dd className={styles.badge}>{worksList[0].tools[11]}</dd>
              <dd className={styles.badge}>{worksList[0].tools[12]}</dd>
              <dd className={styles.badge}>{worksList[0].tools[13]}</dd>
              <dd className={styles.badge}>{worksList[0].tools[14]}</dd>
              <dd className={styles.badge}>{worksList[0].tools[15]}</dd>
              <dd className={styles.badge}>{worksList[0].tools[16]}</dd>
            </dl>
            <dl className={styles.prerequisitesItem}>
              <dt className={styles.category}>
                roles <HiChat />
              </dt>
              <dd className={styles.badge}>{worksList[0].roles[0]}</dd>
              <dd className={styles.badge}>{worksList[0].roles[1]}</dd>
              <dd className={styles.badge}>{worksList[0].roles[2]}</dd>
              <dd className={styles.badge}>{worksList[0].roles[3]}</dd>
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

//path (id) names
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: 'enk-english' } }, { params: { id: '2' } }],
    fallback: false,
  };
}

//fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path';
export async function getStaticProps() {
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
