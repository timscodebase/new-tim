import PropTypes from 'prop-types'
import styles from './Education.module.css'
import Course from './Course'

export default function Education({ onlineCourses, tutorials, webResources }) {
  return (
    <div className={styles.educationWrapper}>
      <h1>Education</h1>
      <h2 className={styles.h2}>Online Courses</h2>
      {onlineCourses.map(course => (
        <Course key={course.title} {...course} />
      ))}
      <h2 className={styles.h2}>Tutorials</h2>
      {tutorials.map(tutorial => (
        <Course key={tutorial.title} {...tutorial} />
      ))}
      <h2 className={styles.h2}>Online Courses</h2>
      {webResources.map(resources => (
        <Course key={resources.title} {...resources} />
      ))}
    </div>
  )
}

Education.propTypes = {
  onlineCourses: PropTypes.array,
  tutorials: PropTypes.array,
  webResources: PropTypes.array,
}
