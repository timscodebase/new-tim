import withApollo from 'next-with-apollo'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import SecondaryHeader from '../components/SecondaryHeader'
import Separator from '../components/Separator'

import '../styles/globals.css'

function Tim({ Component, pageProps, apollo }) {
  const { route } = useRouter()
  return (
    <ApolloProvider client={apollo}>
      <div className="bodyWrapper">
        {route == '/' ? <Header /> : <SecondaryHeader />}
        <Nav />
        <Separator />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ApolloProvider>
  )
}

// Tim.getInitialProps = async appContext => {
//   const appProps = await Tim.getInitialProps(appContext)
//   return { ...appProps }
// }

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: 'https://kod60sys.api.sanity.io/v1/graphql/production/default',
      cache: new InMemoryCache().restore(initialState || {}),
    })
)(Tim)

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
