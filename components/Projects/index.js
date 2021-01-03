import gql from 'graphql-tag'
import Loader from 'react-loader-spinner'
import { useQuery } from '@apollo/react-hooks'
import Project from './Project'

import styles from './Projects.module.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const QUERY = gql`
  query allProjects {
    allProject {
      description
      gitLink
      image {
        asset {
          url
        }
      }
      link
      title
    }
  }
`

export default function Projects() {
  const { loading, data } = useQuery(QUERY)

  if (loading || !data) {
    return (
      <div className={styles.loaderWrapper}>
        <Loader
          type="Rings"
          color="rgba(255, 0, 142, 1)"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    )
  }
  return (
    <div className={styles.projectsWrapper}>
      <h1>Projects</h1>
      <div className={styles.projectsGrid}>
        {data.allProject.map(project => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}
