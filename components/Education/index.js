import gql from 'graphql-tag'
import Loader from 'react-loader-spinner'
import { useQuery } from '@apollo/react-hooks'

import Course from './Course'
import Courses from './Courses'
import Tutorials from './Tutorials'
import Web from './Web'

import styles from './Education.module.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const COURSES_QUERY = gql`
  query {
    allEducation(where: { category: { matches: "online*" } }) {
      description
      link
      logo {
        asset {
          url
        }
      }
      title
      category
    }
  }
`

const TUTORIALS_QUERY = gql`
  query {
    allEducation(where: { category: { matches: "tutorials" } }) {
      description
      link
      logo {
        asset {
          url
        }
      }
      title
      category
    }
  }
`

const WEB_QUERY = gql`
  query {
    allEducation(where: { category: { matches: "web*" } }) {
      description
      link
      logo {
        asset {
          url
        }
      }
      title
      category
    }
  }
`

const showData = (loading, data) => {
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
  data.map(course => <Course key={course.title} {...course} />)
}

export default function Education() {
  const { loading: loadingCourses, data: courses } = useQuery(COURSES_QUERY)
  const { loading: loadingTutorials, data: tutorials } = useQuery(
    TUTORIALS_QUERY
  )
  const { loadingWeb, data: web } = useQuery(WEB_QUERY)

  return (
    <div className={styles.educationWrapper}>
      <h1>Education</h1>
      <Courses />
      <Tutorials />
      <Web />
    </div>
  )
}
