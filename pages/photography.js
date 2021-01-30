import useSWR from 'swr'
import PropTypes from 'prop-types'
import Photography from '../components/Photography'

const fetcher = url => fetch(url).then(res => res.json())
export default function PhotographyPage() {
  const { data, error } = useSWR('/api/photos', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  if (data) return <Photography cloudinaryImages={data.resources} />
}

PhotographyPage.propTypes = {
  cloudinaryImages: PropTypes.array,
}
