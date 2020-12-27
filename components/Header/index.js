import Link from 'next/link'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faDev, faGithub } from '@fortawesome/free-brands-svg-icons'
import Separator from '../Separator'

import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>Tim Smith</title>
        <meta name="keywords" content="HTML, CSS, JavaScript, Photography" />
        <meta
          name="description"
          content="I am a web developer, but also a lot more!"
        />
      </Head>
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
      <Separator />
    </>
  )
}
