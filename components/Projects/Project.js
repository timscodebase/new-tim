import PropTypes from 'prop-types'
import styled from 'styled-components'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const StyledProject = styled.div`
  padding: 1rem;
  margin: 0 -2rem;
  background: var(--transtodarkblue), url(${props => props.image});
  background-size: cover;
  margin-bottom: 5px;

  h3 {
    color: var(--purple);
    text-shadow: 0px 0px 4px var(--black);
  }

  .links {
    display: flex;
    margin-top: 1rem;
    justify-content: space-between;

    a {
      display: inline-block;
      padding: 5px 10px;
      border-radius: 20px;
      background: var(--purpletoyellow);
    }
    a,
    a:hover,
    a:visited {
      color: var(--black);
    }
  }
`

export default function Project({ project }) {
  const { description, gitLink, image, link, title } = project

  return (
    <StyledProject image={urlFor(image)}>
      <section className="titles">
        <h3>{title}</h3>
        <h4>Description</h4>
      </section>
      <p>{description}</p>
      <section className="footer">
        <div className="links">
          <a href={link}>Project Link</a>
          <a href={gitLink}>GitHub Link</a>
        </div>
      </section>
    </StyledProject>
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    description: PropTypes.string,
    gitLink: PropTypes.string,
    image: PropTypes.object,
    library: PropTypes.arrayOf(PropTypes.object),
    link: PropTypes.string,
    title: PropTypes.string,
  }),
}
