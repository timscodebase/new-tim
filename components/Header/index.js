import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faDev, faGithub } from '@fortawesome/free-brands-svg-icons'

import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Tim Smith</h1>
      <div className={styles.carousel}>
        <div className={styles.inner}>
          <div className={styles.element}>Web Developer</div>
          <div className={styles.element}>Photographer</div>
          <div className={styles.element}>Writer</div>
          <div className={styles.element}>Artist</div>
        </div>
      </div>
      <div className={styles.socialIcons}>
        <a
          href="https://codepen.io/WebRuin"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faCodepen} />
        </a>
        <a
          href="https://dev.to/tithos"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faDev} />
        </a>
        <a
          href="https://github.com/timscodebase"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </header>
  )
}
