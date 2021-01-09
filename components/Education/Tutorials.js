import gql from 'graphql-tag'
import Loader from 'react-loader-spinner'
import { useQuery } from '@apollo/react-hooks'

import Course from './Course'

import styles from './Education.module.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

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

export default function Tutorials() {
  const { loading, data } = useQuery(TUTORIALS_QUERY)

  return (
    <div className={styles.educationWrapper}>
      <h2 className={styles.h2}>Online Tutorials</h2>
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
          {data.allEducation.map(tutorial => (
            <Course key={tutorial.title} {...tutorial} />
          ))}
        </div>
      )}
    </div>
  )
}
