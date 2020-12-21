import styles from './Projects.module.css'

export default function Projects() {
  return (
    <div className={styles.projectsWrapper}>
      <h1>Projects</h1>
      <div className={styles.projects}>
        <section className={styles.project}>
          <h2>Covid</h2>
        </section>
        <section className={styles.project}>
          <h2>Covid</h2>
        </section>
        <section className={styles.project}>
          <h2>Covid</h2>
        </section>
        <section className={styles.project}>
          <h2>Covid</h2>
        </section>
      </div>
    </div>
  )
}
