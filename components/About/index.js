import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.image}>
        <div className={styles.textWrapper}>
          <h2>A little about me</h2>
          <p>
            My passion in life is meeting new people and learning as much as I
            can about the many things I love! ❤️ Every day, I find new inspiring
            things that motivate me to keep moving forward and to continue my
            search for my purpose. I believe that my Higher Power put me on this
            Earth to learn and inspire people to love life as I do.
          </p>
        </div>
      </div>
    </div>
  )
}
