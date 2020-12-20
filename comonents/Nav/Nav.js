import Link from 'next/link';
import Separator from '../Separator';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <>
      <Separator />
      <nav className={styles.nav} role="navigation">
        <Link href="/projects">
          <a className={` ${styles.link}  ${styles.pink}`}>
            <p>Projects</p>
            <div>a</div>
          </a>
        </Link>
        <Link href="/skills">
          <a className={styles.link}>
            <p>Skills</p>
            <div>a</div>
          </a>
        </Link>
        <Link href="/education">
          <a className={styles.link}>
            <p>Education</p>
            <div>a</div>
          </a>
        </Link>
        <Link href="/photography">
          <a className={styles.link}>
            <p>Photography</p>
            <div>a</div>
          </a>
        </Link>
      </nav>
    </>
  );
}
