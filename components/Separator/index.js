import PropTypes from 'prop-types'
// import 'css-paint-polyfill'
// import workletURL from 'url-loader!css-houdini-lines'

import styles from './Separator.module.css'

export default function Separator({ fullBleed = false }) {
  // CSS.paintWorklet.addModule(workletURL)

  return (
    <div
      className={
        fullBleed ? `${styles.separator} ${styles.fullBleed}` : styles.separator
      }
    />
  )
}

Separator.propTypes = {
  fullBleed: PropTypes.bool,
}
