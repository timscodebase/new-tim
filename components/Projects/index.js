import PropTypes from 'prop-types'
import Project from './Project'

import styles from './Projects.module.css'

export default function Projects({ projects }) {
  console.log(projects)
  return (
    <div className={styles.projectsWrapper}>
      <h1>Projects</h1>
      {projects.map(project => (
        <Project key={project.title} project={project} />
      ))}
    </div>
  )
}

Projects.propTypes = {
  projects: PropTypes.array,
}
