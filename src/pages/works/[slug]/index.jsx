import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Works.module.scss';
import { PrimaryLayout } from '@/components/Layouts/PrimaryLayout';
import { Playfair_Display } from 'next/font/google';
import { HiCode, HiLightningBolt, HiCog, HiChat } from 'react-icons/hi';
import { ButtonARight } from '@/components/Buttons/ButtonARight';
import { ButtonALeft } from '@/components/Buttons/ButtonALeft';
import { Button } from '@/components/Buttons/Button';
import { useRouter } from 'next/router';
import fsPromises from 'fs/promises';
import path from 'path';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export default function Works({ worksDetail, previousPage, nextPage }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>{worksDetail.name} | works | shun kusakabe</title>
        <meta name="description" content={worksDetail.description} />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_VERCEL_URL}/works/${slug}`} />
        <meta property="og:title" content={`${worksDetail.name} | works | shun kusakabe`} />
        <meta property="og:description" content={worksDetail.description} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_VERCEL_URL}${worksDetail.ogpImage}`} />
      </Head>

      <section className={styles.container}>
        <h2 className={`${playfairDisplay.className} ${styles.title}`}>
          works
        </h2>
        <figure>
          <Image
            src={worksDetail.thumbnail}
            sizes="100vw"
            alt={worksDetail.name}
            className={styles.worksImage}
            fill
            priority
          />
        </figure>
        <div className={styles.detailWrapper}>
          <div className={styles.detailTitleContainer}>
            <h3 className={styles.domain}>
              <a href={worksDetail.url} target="_blank" rel="noopener noreferrer">
                {worksDetail.domain}
              </a>
            </h3>
            <h4 className={styles.name}>{worksDetail.name}</h4>
          </div>
          <div className={styles.detailInformationWrapper}>
            <div className={styles.informationContainer}>
              <p className={styles.summary}>{worksDetail.summary}</p>
              <p className={styles.comment}>{worksDetail.comment}</p>
            </div>
            <div className={styles.prerequisitesContainer}>
              <h3>prerequisites</h3>
              <dl className={styles.prerequisitesItem}>
                <dt className={styles.category}>
                  languages <HiCode />
                </dt>
                {worksDetail.languages.map((language) => {
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
                {worksDetail.frameworks.map((framework) => {
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
                {worksDetail.tools.map((tool) => {
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
                {worksDetail.roles.map((role) => {
                  return (
                    <dd key={role} className={styles.badge}>
                      {role}
                    </dd>
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          {nextPage && <ButtonARight url={`/works/${nextPage}`} text="next page" />}
          <Button url="/" text="go to home" />
          {previousPage && <ButtonALeft url={`/works/${previousPage}`} text="previous page" />}
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData); //return Object

  const worksItems = objectData.worksList;

  const paths = worksItems.map((worksItem) => ({
    params: { slug: worksItem.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), `${slug}.json`);
  const jsonData = await fsPromises.readFile(filePath);
  const worksDetail = JSON.parse(jsonData); //return Object
  
  const listFilePath = path.join(process.cwd(), 'data.json');
  const listFileNames = await fsPromises.readFile(listFilePath);
  const objectData = JSON.parse(listFileNames); //return Object

  const worksItems = objectData.worksList;

  const listItems = worksItems.map((item) => {
    if (typeof item.slug !== 'string') {
      return null;
    }
    return item.slug;
  }).filter(Boolean);
  
  const currentIndex = listItems.findIndex((item) => item === slug);
  const previousPage = listItems[currentIndex - 1] || null;
  const nextPage = listItems[currentIndex + 1] || null;

  return {
    props: { worksDetail, previousPage, nextPage },
  };
}

Works.getLayout = function getLayout(page) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
