import styles from './Footer.module.scss';
import { Lora } from 'next/font/google';
import { MediaList } from '@/components/MediaList';

const lora = Lora({ subsets: ['latin'] });

export function Footer() {
  return (
    <footer className={`${styles.footer} ${lora.className}`}>
      <MediaList />
      <small className={styles.copyright}>© 2023 shun kusakabe</small>
    </footer>
  );
}
