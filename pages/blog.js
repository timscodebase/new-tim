import gql from 'graphql-tag'
import Loader from 'react-loader-spinner'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'
import imageUrlBuilder from '@sanity/image-url'
import styled from 'styled-components'

import client from '../client'

import styles from '../styles/Post.module.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const StyledPostLink = styled.div`
  padding: 1rem;
  margin: 0 -2rem;
  background: var(--transtodarkblue), url(${props => props.image});
  background-size: cover;
  margin-bottom: 5px;
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;

  h3 {
    color: var(--purple);
    text-shadow: 0px 0px 4px var(--black);
  }

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
`

const ALL_POSTS_QUERY = gql`
  query {
    allPost {
      excerpt
      mainImage {
        asset {
          url
        }
      }
      slug {
        current
      }
      title
    }
  }
`

export default function Blog() {
  const { loading, data } = useQuery(ALL_POSTS_QUERY)

  return (
    <div className={styles.blog}>
      <h1>Blog Posts</h1>
      {loading || !data ? (
        <div className={styles.loaderWrapper}>
          <Loader
            type="Rings"
            color="rgba(255, 0, 142, 1)"
            height={100}
            width={100}
            timeout={3000}
          />
        </div>
      ) : (
        data.allPost.map(({ mainImage, slug, title }) => (
          <StyledPostLink
            key={title}
            image={mainImage ? urlFor(mainImage) : null}
          >
            <h3>{title}</h3>
            <Link prefetch as={`${slug.current}`} href="[slug]">
              <a>Link</a>
            </Link>
          </StyledPostLink>
        ))
      )}
    </div>
  )
}
