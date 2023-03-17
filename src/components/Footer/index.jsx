import Image from 'next/image'
import styles from './Footer.module.scss';

export function Footer() {

  return (
    <footer className={styles.footer}>
      <ul role="list" className={styles.snsList}>
        <li><a href="https://twitter.com/shunssv" target="_blank" rel="noopener noreferrer"><Image src="/sns-twitter.svg" width={30} height={30} /></a></li>
        <li><a href="https://www.linkedin.com/in/shunkusakabe/" target="_blank" rel="noopener noreferrer"><Image src="/sns-linkedin.svg"  width={30} height={30} /></a></li>
        <li><a href="https://github.com/shunssv" target="_blank" rel="noopener noreferrer"><Image src="/sns-github.svg"  width={30} height={30} /></a></li>
      </ul>
      <small className={styles.copyright}>© 2023 shun kusakabe</small>
    </footer>
  );
}
