import gql from 'graphql-tag'
import Loader from 'react-loader-spinner'
import { useQuery } from '@apollo/react-hooks'

import Course from './Course'

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

export default function Courses() {
  const { loading, data } = useQuery(COURSES_QUERY)

  return (
    <div className={styles.educationWrapper}>
      <h2 className={styles.h2}>Online Courses</h2>
      {loading || !data ? (
        <div className={styles.loaderWrapper}>
          <Loader
            type="Rings"
            color="rgba(255, 0, 142, 1)"
            height={100}
            width={100}
            timeout={3000}
          />
        </div>
      ) : (
        <div className={styles.edGrid}>
          {data.allEducation.map(course => (
            <Course key={course.title} {...course} />
          ))}
        </div>
      )}
    </div>
  )
}
