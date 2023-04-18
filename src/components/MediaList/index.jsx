import styles from './MediaList.module.scss';
import { Github } from './Logos/Github';
import { Linkedin } from './Logos/Linkedin';
import { Twitter } from './Logos/Twitter';

export function MediaList({ style }) {
  return (
    <ul role="list" className={`${styles.snsList} ${style}`}>
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
