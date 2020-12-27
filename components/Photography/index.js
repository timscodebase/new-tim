import Instagram from '../Instagram'
import styles from './Photography.module.css'

export default function Photography() {
  return (
    <div className={styles.photographyWrapper}>
      <h1>Photography</h1>
      <h2 className={styles.h2}>Hand Picked</h2>
      <h2 className={styles.h2}>Instagram Snaps</h2>
      <Instagram />
    </div>
  )
}
