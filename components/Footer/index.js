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
  return (
    <>
      {/* <AdBanner /> */}
      <Separator />
      <footer className={styles.footer}>
        <h3>Contact Me</h3>
        <ContactForm />
        <section className={styles.socialLinks}>
          <a href="https://www.facebook.com/tim.smith/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/timsmith23">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/tithos/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://dev.to/tithos">
            <FontAwesomeIcon icon={faDev} />
          </a>
          <a href="https://github.com/timscodebase">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://codepen.io/WebRuin">
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </section>
      </footer>
    </>
  )
}
