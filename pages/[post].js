import BlockContent from '@sanity/block-content-to-react'
import gql from 'graphql-tag'
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/react-hooks'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../lib/api'

import styles from '../styles/Post.module.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const BLOG_POST_QUERY = gql`
  query BLOG_POST_QUERY($slug: String!) {
    allPost(where: { slug: { current: { eq: $slug } } }) {
      author {
        name
      }
      bodyRaw
      categories {
        title
      }
      excerpt
      mainImage {
        asset {
          url
        }
      }
      title
      slug {
        current
      }
    }
  }
`

export default function Post({ post }) {
  const { loading, data } = useQuery(BLOG_POST_QUERY, {
    variables: { slug: `${post}` },
  })

  return (
    <div className={styles.blogPost}>
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
        data.allPost.map(
          ({ author, bodyRaw, categories, mainImage, title }) => (
            <div className="content" key={title}>
              <h1>{title}</h1>
              <BlockContent blocks={bodyRaw} />
            </div>
          )
        )
      )}
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.string,
}

export async function getStaticProps({ params, preview = false }) {
  return {
    props: {
      post: params.post,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths:
      allPosts?.map(({ slug }) => {
        console.log(slug)
        return {
          params: {
            post: slug,
          },
        }
      }) || [],
    fallback: true,
  }
}
