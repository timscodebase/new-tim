// import 'css-paint-polyfill';
// import workletURL from 'url-loader!css-houdini-lines';
import styles from './Separator.module.css';

// CSS.paintWorklet.addModule(workletURL);

export default function Separator() {
  return <div className={styles.separator} />;
}
