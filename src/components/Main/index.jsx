import styles from './Main.module.css';
import { Links } from '@/components/Links';
import { NextLogo } from '@/components/NextLogo';
import { HeadDescription } from '@/components/HeadDescription';
import { Header } from '@/components/Header';
import Link from 'next/link';
import { useCallback, useState } from 'react';

export function Main(props) {
  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
  }, []);

  //declare useState using destructuring assignment
  //first array: variable
  //second array: function for updating variable
  //add a value in the parentheses if you set a default
  const [count, setCount] = useState(1);
  const [text, setText] = useState('');
  const [isShow, setIsShow] = useState(true);

  const handleCounter = useCallback(
    (e) => {
      console.log(count);
      if (count < 10) {
        setCount((count) => count + 1);
      }
    },
    [count]
  );

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, []);

  const handleInput = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert('type within 5 letters!');
      return;
    }
    setText(e.target.value.trim());
  }, []);

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

      <NextLogo />
      <Links />
    </main>
  );
}
