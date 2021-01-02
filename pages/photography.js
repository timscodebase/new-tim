import PropTypes from 'prop-types'
import Photography from '../components/Photography'

export default function PhotographyPage({ cloudinaryImages }) {
  return <Photography cloudinaryImages={cloudinaryImages} />
}

export async function getServerSideProps({ query }) {
  const cloudinaryImages = query.resources

  return { props: { cloudinaryImages } }
}

PhotographyPage.propTypes = {
  cloudinaryImages: PropTypes.array,
}
