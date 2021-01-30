import withApollo from 'next-with-apollo'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import SecondaryHeader from '../components/SecondaryHeader'
import Separator from '../components/Separator'

import '../styles/globals.css'
import Head from 'next/head'

function Tim({ Component, pageProps, apollo }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Tim Smith</title>
        <meta name="keywords" content="HTML, CSS, JavaScript, Photography" />
        <meta
          name="description"
          content="I am a web developer, but also a lot more!"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="rgba(255, 0, 142, 1)"
        />
        <meta name="msapplication-TileColor" content="rgba(255, 0, 142, 1)" />
        <meta name="theme-color" content="rgba(255, 0, 142, 1)" />
      </Head>
      <ApolloProvider client={apollo}>
        <div className="bodyWrapper">
          <SecondaryHeader />
          <Nav />
          <Separator />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ApolloProvider>
    </>
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
