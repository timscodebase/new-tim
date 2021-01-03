import BlockContent from '@sanity/block-content-to-react'
import gql from 'graphql-tag'
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/react-hooks'
import { getAllPostsWithSlug } from '../lib/api'

import PostMeta from '../components/PostMeta'

import styles from '../styles/Post.module.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const BLOG_POST_QUERY = gql`
  query BLOG_POST_QUERY($slug: String!) {
    allPost(where: { slug: { current: { eq: $slug } } }) {
      author {
        name
        image {
          asset {
            url
          }
        }
      }
      bodyRaw
      categories {
        title
      }
      excerpt
      fullImage
      medImage
      smallImage
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
    <>
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
          ({
            author,
            bodyRaw,
            categories,
            excerpt,
            smallImage,
            medImage,
            fullImage,
            title,
          }) => (
            <article className={styles.blogPost} key={title}>
              <PostMeta excerpt={excerpt} image={medImage} title={title} />
              <img
                srcSet={`${smallImage} 400w, ${medImage} 800w`}
                sizes="(max-width: 600px) 400px, 800px"
                src={fullImage}
                alt={title}
              />
              <div className={styles.categories}>
                {categories.map((category, i) => (
                  <span key={i} data-category={category.title}>
                    {category.title}
                  </span>
                ))}
              </div>
              <h1>{title}</h1>
              <BlockContent blocks={bodyRaw} />
              <p className={styles.author}>
                <span>Author</span> - {author.name}
              </p>
            </article>
          )
        )
      )}
    </>
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
