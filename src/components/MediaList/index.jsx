import styles from './MediaList.module.scss';
import { Github } from '../Media/Github';
import { Linkedin } from '../Media/Linkedin';
import { Twitter } from '../Media/Twitter';

export function MediaList() {
  return (
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
  );
}
