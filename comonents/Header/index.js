import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faDev, faGithub } from '@fortawesome/free-brands-svg-icons'

import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.heart}
        width="400"
        height="400"
      >
        <defs>
          <linearGradient
            id="A"
            x1="32.333"
            y1="24.455"
            x2="376.835"
            y2="353.653"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fffa01" />
            <stop offset="1" stopColor="#e501ff" />
          </linearGradient>
        </defs>
        <path
          d="M195.071 69.751C149.807-27.762 2.882.165 2.882 125.743c0 124.482 158.617 187.288 192.189 262.166 33.572-74.878 192.205-137.684 192.205-262.166 0-125.458-146.877-153.625-192.205-55.991z"
          fill="url(#A)"
        />
      </svg> */}
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
