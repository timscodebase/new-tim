import Footer from '../comonents/Footer';
import Header from '../comonents/Header';

import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
