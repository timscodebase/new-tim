import PropTypes from 'prop-types'
import groq from 'groq'
import Photography from '../components/Photography'

import client from '../client'

export default function PhotographyPage({ photos }) {
  return <Photography photos={photos} />
}

const photoQuery = groq`*[_type == "photo"]{
  "alt": image.alt,
  image,
  slug,
  title
}`

// PhotographyPage.getInitialProps = async () => {
//   const photos = await client.fetch(photoQuery)
//   return { photos }
// }

export async function getServerSideProps() {
  const photos = await client.fetch(photoQuery)

  return {
    props: { photos }, // will be passed to the page component as props
  }
}

PhotographyPage.propTypes = {
  photos: PropTypes.array,
}
