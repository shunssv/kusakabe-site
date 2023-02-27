import styles from './Main.module.css';
import { Links } from '@/components/Links';
import { NextLogo } from '@/components/NextLogo';
import { HeadDescription } from '@/components/HeadDescription';
import { Header } from '@/components/Header';
import Link from 'next/link';
import { useCallback } from 'react';
import { useCounter } from '@/hooks/useCounter';
import { useInputList } from '@/hooks/useInputList';


export function Main(props) {
  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
  }, []);

  const {count, isShow, handleCounter, handleDisplay} = useCounter();
  const {text, array, handleInput, handleList} = useInputList();

  return (
    <main className={styles.main}>
      <Header />
      <HeadDescription title={props.title}>
        <code className={styles.code}>src/pages/{props.title}.js</code>
      </HeadDescription>

      <Link href="/works" onClick={handleClick}>
        click me
      </Link>

      {isShow ? <div>{count}</div> : null}
      <button onClick={handleCounter}>count me</button>
      <button onClick={handleDisplay}>
        {isShow ? 'hide counter' : 'show counter'}
      </button>

      <input type="text" value={text} onChange={handleInput} />
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <button onClick={handleList}>Add list</button>

      <NextLogo />
      <Links />
    </main>
  );
}
