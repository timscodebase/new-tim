import PropTypes from 'prop-types'

import Feed from 'react-instagram-authless-feed'
import ImageComponent from '../ImageComponent'
import Separator from '../Separator'

import styles from './Photography.module.css'

export default function Photography({ cloudinaryImages }) {
  return (
    <div className={styles.photographyWrapper}>
      <h1>Photography</h1>
      <h2 className={styles.h2}>Hand Picked</h2>
      <div className={styles.handpicked}>
        {cloudinaryImages.map(image => (
          <ImageComponent key={image.public_id} {...image} />
        ))}
      </div>
      <Separator fullBleed />
      <h2 className={styles.h2}>Instagram Snaps</h2>
      <Feed
        userName="tithos"
        className={styles.gramz}
        classNameLoading="Loading"
        limit="6"
      />
    </div>
  )
}

Photography.propTypes = {
  cloudinaryImages: PropTypes.array,
}
