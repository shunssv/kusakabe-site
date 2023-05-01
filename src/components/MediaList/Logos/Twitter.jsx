import Image from 'next/image';
import styles from './Logos.module.scss';
import { twitter } from '@/assets/';

export function Twitter({ url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Image
        src={twitter}
        alt="Twitter"
        sizes="100vw"
        className={styles.logoImage}
        priority
      />
    </a>
  );
}
