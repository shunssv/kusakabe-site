import styles from './Loader.module.scss';
import animate from '@/styles/_animation.module.scss';
import { useEffect, useState } from 'react';

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
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
        <div className={`${styles.loaderWrapper} ${animate.fadeOut}`}>
          <div className={`${styles.loaderContainer} ${animate.fadeOut} ${animate.durationFaster}`}>
            <span className={styles.loader}></span>
          </div>
        </div>
      )}
    </>
  );
}
