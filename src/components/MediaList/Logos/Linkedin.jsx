import Image from 'next/image';
import styles from './Logos.module.scss';
import { linkedin } from '@/assets/';

export function Linkedin({ url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Image
        src={linkedin}
        alt="LinkedIn"
        sizes="100vw"
        className={styles.logoImage}
        priority
      />
    </a>
  );
}
