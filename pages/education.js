import PropTypes from 'prop-types'
import groq from 'groq'
import Education from '../components/Education'

import client from '../client'

export default function EducationPage(props) {
  return <Education {...props} />
}

const onlineCoursesEdQuery = groq`*[_type == "education" && category == "online courses"]{
  category,
  description,
  link,
  logo,
  title
}`

const tutorialsEdQuery = groq`*[_type == "education" && category == "tutorials"]{
  category,
  description,
  link,
  logo,
  title
}`

const webResourcesEdQuery = groq`*[_type == "education" && category == "web resource"]{
  category,
  description,
  link,
  logo,
  title
}`

EducationPage.getInitialProps = async () => {
  const onlineCourses = await client.fetch(onlineCoursesEdQuery)
  const tutorials = await client.fetch(tutorialsEdQuery)
  const webResources = await client.fetch(webResourcesEdQuery)
  return { onlineCourses, tutorials, webResources }
}

EducationPage.propTypes = {
  onlineCourses: PropTypes.array,
  tutorials: PropTypes.array,
  webResources: PropTypes.array,
}
