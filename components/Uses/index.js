import styles from './Uses.module.css'

export default function Uses() {
  return (
    <div className={styles.usesWrapper}>
      <h1>/Uses</h1>
      <div className={styles.flexWrapper}>
        <div className={styles.techCategory}>
          <h2>Hardware</h2>
          <ul>
            <li>Dell Inspiron (upgraded with 8gb ram and 255GB SSD HD)</li>
            <li>iPhone X (daily driver)</li>
            <li>iPhone SE (for testing)</li>
            <li>iPad 2 (daily driver and testing)</li>
          </ul>
        </div>
        <div className={styles.techCategory}>
          <h2>Software</h2>
          <ul>
            <li>VSCode (primary IDE)</li>
            <li>Gimp</li>
            <li>Kubuntu</li>
            <li>Chrome</li>
            <li>Firefox</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
