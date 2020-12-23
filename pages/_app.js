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

export function reportWebVitals(metric) {
  switch (metric.name) {
    case 'FCP':
      break
    case 'LCP':
      break
    case 'CLS':
      break
    case 'FID':
      break
    case 'TTFB':
      break
    case 'Next.js-hydration':
      break
    case 'Next.js-route-change-to-render':
      break
    case 'Next.js-render':
      break
    default:
      break
  }
}
