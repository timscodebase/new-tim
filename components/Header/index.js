import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faDev, faGithub } from '@fortawesome/free-brands-svg-icons'
import Separator from '../Separator'

import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <a>
            <h1 className={styles.h1}>Tim Smith</h1>
          </a>
        </Link>
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
            aria-label="codepen"
            href="https://codepen.io/WebRuin"
            target="_blank"
            rel="noreferrer noopener"
          >
            codepen
            <FontAwesomeIcon width="0" icon={faCodepen} />
          </a>
          <a
            aria-label="dev"
            href="https://dev.to/tithos"
            target="_blank"
            rel="noreferrer noopener"
          >
            dev
            <FontAwesomeIcon width="0" icon={faDev} />
          </a>
          <a
            aria-label="github"
            href="https://github.com/timscodebase"
            target="_blank"
            rel="noreferrer noopener"
          >
            github
            <FontAwesomeIcon width="0" icon={faGithub} />
          </a>
        </div>
      </header>
      <Separator />
    </>
  )
}
