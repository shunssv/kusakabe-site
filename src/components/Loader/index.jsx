import styles from '@/components/Loader/Loader.module.scss'

export function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <span class="loader"></span>
    </div>
  )
}
