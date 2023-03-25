import Head from 'next/head';
import styles from './Works.module.scss';
import { SlWrench } from 'react-icons/sl';
import { PrimaryLayout } from '@/components/Layout/PrimaryLayout';
import { useRouter } from 'next/router';

export default function Works(props) {
  const router = useRouter();
  const id = router.query.id;

  const worksList = props.worksList;

  console.log(worksList[0].id);

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
        <div className={styles.mainteinanceContainer}>
          <SlWrench className={styles.mainteinance} />
          This is Works page: {worksList[0].name}
          <SlWrench className={styles.mainteinance} />
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
