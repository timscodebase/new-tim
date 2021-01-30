import gql from 'graphql-tag'
import Loader from 'react-loader-spinner'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'
import styled from 'styled-components'

import styles from '../styles/Post.module.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const StyledPostLink = styled.div`
  display: grid;
  flex: 1 1 195px;
  padding: 1rem;
  background: var(--transtodarkblue), url(${props => props.image});
  background-size: cover;
  margin-bottom: 5px;
  flex-direction: column;
  margin-top: 1rem;
  justify-content: space-between;

  h3 {
    color: var(--purple);
    text-shadow: 0px 0px 4px var(--black);
  }

  a {
    padding: 5px 10px;
    margin: auto 0;
    border-radius: 20px;
    margin-top: 0.5rem;
    text-align: center;
    background: var(--purpletoyellow);

    span {
      margin-left: 0.25rem;
    }
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
      medImage
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
      <div className={styles.blogGrid}>
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
          data.allPost.map(({ medImage, excerpt, slug, title }) => (
            <StyledPostLink key={title} image={medImage}>
              <h3>{title}</h3>
              <p>{excerpt}</p>
              <Link prefetch as={`${slug.current}`} href="[slug]">
                <a>
                  Got to post <span>&rarr;</span>
                </a>
              </Link>
            </StyledPostLink>
          ))
        )}
      </div>
    </div>
  )
}
