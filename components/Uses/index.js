import styles from './Uses.module.css'

export default function Uses() {
  return (
    <div className={styles.usesWrapper}>
      <h1>/Uses</h1>
      <div className={styles.flexWrapper}>
        <div className={styles.techCategory}>
          <h2>Hardware</h2>
        </div>
        <div className={styles.techCategory}>
          <h2>Software</h2>
        </div>
        <div className={styles.techCategory}>
          <h2>Hardware</h2>
        </div>
      </div>
    </div>
  )
}
