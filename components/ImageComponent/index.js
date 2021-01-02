import PropTypes from 'prop-types'
import { Image, Transformation } from 'cloudinary-react'

export default function ImageComponent({ public_id }) {
  return (
    <Image cloudName="tihos" publicId={public_id} secure="true">
      <Transformation width="150" height="150" />
    </Image>
  )
}

ImageComponent.propTypes = {
  public_id: PropTypes.string,
}
