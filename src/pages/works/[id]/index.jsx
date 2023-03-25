import Head from 'next/head';
import styles from './Works.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { PrimaryLayout } from '@/components/Layout/PrimaryLayout';
import { Playfair_Display } from 'next/font/google';

import { HiCode, HiLightningBolt, HiCog, HiChat } from "react-icons/hi";
import { ButtonARight } from '@/components/ui/Button/ButtonARight';
import { Button } from '@/components/ui/Button/Button';

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
        <h2 className={playfairDisplay.className}>Works</h2>
        <figure>
          <Image
            src="/works1.png"
            width={800}
            height={560}
            alt={worksList[0].name}
            priority={true}
          />
        </figure>
        <div>
          <h3>
            <a
              href="https://enk-english.online/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {worksList[0].domain}
            </a>
          </h3>
          <h4>{worksList[0].name}</h4>
          <p>{worksList[0].summary}</p>
          <p>{worksList[0].comment}</p>
        </div>
        <div>
          <h3>prerequisites</h3>
          <dl>
            <dt>
              languages <HiCode />
            </dt>
            <dd>{worksList[0].languages[0]}</dd>
            <dd>{worksList[0].languages[1]}</dd>
            <dd>{worksList[0].languages[2]}</dd>
            <dd>{worksList[0].languages[3]}</dd>
          </dl>
          <dl>
            <dt>
              frameworks / libraries / systems <HiLightningBolt />
            </dt>
            <dd>{worksList[0].frameworks[0]}</dd>
            <dd>{worksList[0].frameworks[1]}</dd>
          </dl>
          <dl>
            <dt>
              tools <HiCog />
            </dt>
            <dd>{worksList[0].tools[0]}</dd>
            <dd>{worksList[0].tools[1]}</dd>
            <dd>{worksList[0].tools[2]}</dd>
            <dd>{worksList[0].tools[3]}</dd>
            <dd>{worksList[0].tools[4]}</dd>
            <dd>{worksList[0].tools[5]}</dd>
            <dd>{worksList[0].tools[6]}</dd>
            <dd>{worksList[0].tools[7]}</dd>
            <dd>{worksList[0].tools[8]}</dd>
            <dd>{worksList[0].tools[9]}</dd>
            <dd>{worksList[0].tools[10]}</dd>
            <dd>{worksList[0].tools[11]}</dd>
            <dd>{worksList[0].tools[12]}</dd>
            <dd>{worksList[0].tools[13]}</dd>
            <dd>{worksList[0].tools[14]}</dd>
            <dd>{worksList[0].tools[15]}</dd>
            <dd>{worksList[0].tools[16]}</dd>
            <dd>{worksList[0].tools[17]}</dd>
            <dd>{worksList[0].tools[18]}</dd>
          </dl>
          <dl>
            <dt>
              roles <HiChat />
            </dt>
            <dd>{worksList[0].roles[0]}</dd>
            <dd>{worksList[0].roles[1]}</dd>
            <dd>{worksList[0].roles[2]}</dd>
            <dd>{worksList[0].roles[3]}</dd>
          </dl>
        </div>
        <div>
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
