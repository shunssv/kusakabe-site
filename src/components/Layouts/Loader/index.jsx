import styles from './Loader.module.scss';
import { useEffect, useState } from 'react';

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={styles.loaderWrapper}>
          <div className={styles.loaderContainer}>
            <span className={styles.loader}></span>
          </div>
        </div>
      ) : (
        <div className={styles.loaderWrapper}>
          <div className={styles.loaderContainer}>
            <span className={styles.loader}></span>
          </div>
        </div>
      )}
    </>
  );
}
