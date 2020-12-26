// import 'css-paint-polyfill'
// import workletURL from 'url-loader!css-houdini-lines'

import styles from './Separator.module.css'

export default function Separator() {
  // CSS.paintWorklet.addModule(workletURL)

  return <div className={styles.separator} />
}
