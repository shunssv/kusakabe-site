import Image from 'next/image';
import styles from './Logos.module.scss';
import { github } from '@/assets/';

export function Github({ url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Image
        src={github}
        alt="GitHub"
        sizes="100vw"
        className={styles.logoImage}
        priority
      />
    </a>
  );
}
