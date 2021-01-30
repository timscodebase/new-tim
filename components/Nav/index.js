import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBrain,
  faCameraRetro,
  faLaptopCode,
  faTools,
  faUserAstronaut,
  faRss,
} from '@fortawesome/free-solid-svg-icons'

import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav} role="navigation">
      <Link href="/projects">
        <a className={` ${styles.link}  ${styles.pink}`}>
          <p>Projects</p>
          <FontAwesomeIcon width="0" icon={faLaptopCode} />
        </a>
      </Link>
      <Link href="/skills">
        <a className={styles.link}>
          <p>Skills</p>
          <FontAwesomeIcon width="0" icon={faTools} />
        </a>
      </Link>
      <Link href="/education">
        <a className={styles.link}>
          <p>Education</p>
          <FontAwesomeIcon width="0" icon={faBrain} />
        </a>
      </Link>
      <Link href="/photography">
        <a className={styles.link}>
          <p>Photography</p>
          <FontAwesomeIcon width="0" icon={faCameraRetro} />
        </a>
      </Link>
      <Link href="/blog">
        <a className={styles.link}>
          <p>Blog</p>
          <FontAwesomeIcon width="0" icon={faRss} />
        </a>
      </Link>
      <Link href="/uses">
        <a className={styles.link}>
          <p>Uses</p>
          <FontAwesomeIcon width="0" icon={faUserAstronaut} />
        </a>
      </Link>
    </nav>
  )
}
