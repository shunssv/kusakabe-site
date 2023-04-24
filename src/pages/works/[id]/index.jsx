import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Works.module.scss';
import { PrimaryLayout } from '@/components/Layouts/PrimaryLayout';
import { Playfair_Display } from 'next/font/google';
import { HiCode, HiLightningBolt, HiCog, HiChat } from 'react-icons/hi';
import { ButtonARight } from '@/components/Buttons/ButtonARight';
import { Button } from '@/components/Buttons/Button';
import { workImage } from '@/assets/';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export default function Works({ detail }) {
  return (
    <>
      <Head>
        <title>{detail.name} | Works | shun kusakabe</title>
        <meta name="description" content={detail.description} />
      </Head>

      <section className={styles.container}>
        <h2 className={`${playfairDisplay.className} ${styles.title}`}>
          works
        </h2>
        <figure>
          <Image
            src={workImage}
            // src={detail.image}
            sizes="100vw"
            alt={detail.name}
            className={styles.worksImage}
            priority
          />
        </figure>
        <div className={styles.detailWrapper}>
          <div className={styles.informationContainer}>
            <h3 className={styles.domain}>
              <a href={detail.url} target="_blank" rel="noopener noreferrer">
                {detail.domain}
              </a>
            </h3>
            <h4 className={styles.name}>{detail.name}</h4>
            <p className={styles.summary}>{detail.summary}</p>
            <p className={styles.comment}>{detail.comment}</p>
          </div>
          <div className={styles.prerequisitesContainer}>
            <h3>prerequisites</h3>
            <dl className={styles.prerequisitesItem}>
              <dt className={styles.category}>
                languages <HiCode />
              </dt>
              {detail.languages.map((language) => {
                return (
                  <dd key={language} className={styles.badge}>
                    {language}
                  </dd>
                );
              })}
            </dl>
            <dl className={styles.prerequisitesItem}>
              <dt className={styles.category}>
                frameworks / libraries / systems <HiLightningBolt />
              </dt>
              {detail.frameworks.map((framework) => {
                return (
                  <dd key={framework} className={styles.badge}>
                    {framework}
                  </dd>
                );
              })}
            </dl>
            <dl className={styles.prerequisitesItem}>
              <dt className={styles.category}>
                tools <HiCog />
              </dt>
              {detail.tools.map((tool) => {
                return (
                  <dd key={tool} className={styles.badge}>
                    {tool}
                  </dd>
                );
              })}
            </dl>
            <dl className={styles.prerequisitesItem}>
              <dt className={styles.category}>
                roles <HiChat />
              </dt>
              {detail.roles.map((role) => {
                return (
                  <dd key={role} className={styles.badge}>
                    {role}
                  </dd>
                );
              })}
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

  const worksPaths = objectData.worksList;

  const paths = worksPaths.map((worksPath) => ({
    params: { id: worksPath.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), `${params.id}.json`);
  const jsonData = await fsPromises.readFile(filePath);
  const detail = JSON.parse(jsonData); //return Object

  return {
    props: { detail },
  };
}

//layout
Works.getLayout = function getLayout(page) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
