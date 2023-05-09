import styles from './Loader.module.scss';

export function Loader({ fadeOut, durationFaster }) {
  return (
    <>
      <div className={`${styles.loaderWrapper} ${fadeOut}`}>
        <div
          className={`${styles.loaderContainer} ${fadeOut} ${durationFaster}`}
        >
          <span className={styles.loader}></span>
        </div>
      </div>
    </>
  );
}
