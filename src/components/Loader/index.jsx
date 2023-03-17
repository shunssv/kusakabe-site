import styles from '@/components/Loader/Loader.module.scss';
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
        <div className={`${styles.loaderWrapper} animate__animated animate__fadeOut`}>
          <div className={styles.loaderContainer}>
            <span className={styles.loader}></span>
          </div>
        </div>
      )}
    </>
  );
}
