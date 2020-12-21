import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SecondaryHeader from '../components/SecondaryHeader'

import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  const { route } = useRouter()
  console.log(route)
  return (
    <>
      {route == '/' ? <Header /> : <SecondaryHeader />}
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
