import Courses from './Courses'
import Tutorials from './Tutorials'
import Web from './Web'

import styles from './Education.module.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

export default function Education() {
  return (
    <div className={styles.educationWrapper}>
      <h1>Education</h1>
      <Courses />
      <Tutorials />
      <Web />
    </div>
  )
}
