import PropTypes from 'prop-types'

import styles from './Projects.module.css'

export default function Project({ project }) {
  const {
    description,
    gitLink,
    image,
    library,
    link,
    publishedAt,
    title,
  } = project

  return (
    <div className={styles.project}>
      <section className={styles.titles}>
        <h3>{title}</h3>
        <h3>Description</h3>
      </section>
      <p>{description}</p>
    </div>
  )
}

Project.propTypes = {
  description: PropTypes.string,
  gitLink: PropTypes.string,
  image: PropTypes.object,
  library: PropTypes.arrayOf(PropTypes.object),
  link: PropTypes.string,
  publishedAt: PropTypes.instanceOf(Date),
  title: PropTypes.string,
}
