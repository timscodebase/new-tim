import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBrain,
  faCameraRetro,
  faLaptopCode,
  faTools,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons'

import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav} role="navigation">
      <Link href="/projects">
        <a className={` ${styles.link}  ${styles.pink}`}>
          <p>Projects</p>
          <FontAwesomeIcon icon={faLaptopCode} />
        </a>
      </Link>
      <Link href="/skills">
        <a className={styles.link}>
          <p>Skills</p>
          <FontAwesomeIcon icon={faTools} />
        </a>
      </Link>
      <Link href="/education">
        <a className={styles.link}>
          <p>Education</p>
          <FontAwesomeIcon icon={faBrain} />
        </a>
      </Link>
      <Link href="/photography">
        <a className={styles.link}>
          <p>Photography</p>
          <FontAwesomeIcon icon={faCameraRetro} />
        </a>
      </Link>
      <Link href="/blog">
        <a className={styles.link}>
          <p>Blog</p>
          <FontAwesomeIcon icon={faUserAstronaut} />
        </a>
      </Link>
      <Link href="/uses">
        <a className={styles.link}>
          <p>Uses</p>
          <FontAwesomeIcon icon={faUserAstronaut} />
        </a>
      </Link>
    </nav>
  )
}
