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
        <h3>Contact Me</h3>
        <ContactForm />

        <Separator fullBleed />
        <section className={styles.socialLinks}>
          <a
            href="https://www.facebook.com/tim.smith/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://twitter.com/timsmith23"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.instagram.com/tithos/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faInstagram} />
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
          <a
            href="https://codepen.io/WebRuin"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </section>
        <section className={styles.signOff}>
          <p>
            <a href="https://timsmith.tech">timsmith.tech</a> &copy; {year}
          </p>
          <p>Made with &#129505;</p>
        </section>
      </footer>
    </>
  )
}
