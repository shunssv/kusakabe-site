import styles from '@/components/Loader/Loader.module.scss'

export function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loaderContainer}>
        <span className={styles.loader}></span>
      </div>
    </div>
  )
}
