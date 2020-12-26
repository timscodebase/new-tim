import PropTypes from 'prop-types'
import styled from 'styled-components'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const StyledCourse = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .image {
    width: 100px;
    height: 100px;
    background-image: url(${props => props.logo});
    background-size: cover;
  }

  a {
    display: inline-block;
    margin-top: 10px;
    margin-left: auto;
    padding: 5px 10px;
    border-radius: 20px;
    background: var(--purpletoyellow);
  }
  a,
  a:hover,
  a:visited {
    color: var(--black);
  }
`

export default function Course({ description, link, logo, title }) {
  return (
    <StyledCourse logo={urlFor(logo)}>
      <div className="wrapper">
        <div className="image" />
        <div className="details">
          <h4>{title}</h4>
          {description}
        </div>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Check it out
      </a>
    </StyledCourse>
  )
}

Course.propTypes = {
  description: PropTypes.string,
  link: PropTypes.string,
  logo: PropTypes.object,
  title: PropTypes.string,
}
