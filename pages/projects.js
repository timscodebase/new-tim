import PropTypes from 'prop-types'
import groq from 'groq'
import Projects from '../components/Projects'

import client from '../client'

export default function ProjectsPage({ projects }) {
  return <Projects projects={projects} />
}

const ProjectQuery = groq`*[_type == "project"]{
  description,
  gitLink,
  image,
  link,
  title,
}`

ProjectsPage.getInitialProps = async () => {
  const projects = await client.fetch(ProjectQuery)
  return { projects }
}

ProjectsPage.propTypes = {
  projects: PropTypes.array,
}
