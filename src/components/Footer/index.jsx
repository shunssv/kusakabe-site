import { Github } from '../Media/Github';
import { Linkedin } from '../Media/Linkedin';
import { Twitter } from '../Media/Twitter';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <ul role="list" className={styles.snsList}>
        <li>
          <Twitter url="https://twitter.com/shunssv" />
        </li>
        <li>
          <Linkedin url="https://www.linkedin.com/in/shunkusakabe/" />
        </li>
        <li>
          <Github url="https://github.com/shunssv" />
        </li>
      </ul>
      <small className={styles.copyright}>© 2023 shun kusakabe</small>
    </footer>
  );
}
