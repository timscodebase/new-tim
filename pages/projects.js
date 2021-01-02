import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import PropTypes from 'prop-types'
import Projects from '../components/Projects'

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

const ProjectsPage = () => {
  const { loading, data } = useQuery(QUERY)
  // const { allProject } = data

  if (loading || !data) {
    return <h1>loading...</h1>
  }

  return <Projects projects={data.allProject} />
}

export default ProjectsPage

ProjectsPage.propTypes = {
  projects: PropTypes.array,
}
