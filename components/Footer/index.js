import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faDev,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons'

import AdBanner from '../AdBanner'
import ContactForm from '../ContactForm'
import Separator from '../Separator'

import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <>
      {/* <AdBanner /> */}
      <Separator />
      <footer className={styles.footer}>
        <section>
          <h3>Contact Me</h3>
          <ContactForm />
        </section>
        <section>
          <div className={styles.hide}>
            <Separator fullBleed />
          </div>
          <div className={styles.socialLinks}>
            <a
              aria-label="facebook"
              href="https://www.facebook.com/tim.smith/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              aria-label="twitter"
              href="https://twitter.com/timsmith23"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              aria-label="instagram"
              href="https://www.instagram.com/tithos/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              aria-label="dev"
              href="https://dev.to/tithos"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faDev} />
            </a>
            <a
              aria-label="github"
              href="https://github.com/timscodebase"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              aria-label="codepen"
              href="https://codepen.io/WebRuin"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faCodepen} />
            </a>
          </div>
          <div className={styles.signOff}>
            <p>
              <a href="https://timsmith.tech">timsmith.tech</a> &copy; {year}
            </p>
            <p>Made with &#129505;</p>
          </div>
        </section>
      </footer>
    </>
  )
}
