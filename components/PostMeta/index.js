import PropTypes from 'prop-types'
import Head from 'next/head'

export default function PostMeta({ excerpt, image, title }) {
  return (
    <Head>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={excerpt} />
      <meta property="og:image" content={image} />
      <meta
        property="og:url"
        content="http://euro-travel-example.com/index.htm"
      />
      <meta name={excerpt} />

      <meta property="og:site_name" content={title} />
      <meta name="twitter:image:alt" content={excerpt} />
    </Head>
  )
}

PostMeta.propTypes = {
  excerpt: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
}
