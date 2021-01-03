import client, { previewClient } from '../client'

const getUniquePosts = posts => {
  const slugs = new Set()
  return posts.filter(post => {
    if (slugs.has(post.slug)) {
      return false
    }
    slugs.add(post.slug)
    return true
  })
}

const postFields = `
  'author': author->{name, 'picture': picture.asset->url},
  bodyRaw,
  categories: title
  title,
  excerpt,
  'slug': slug.current,
  'mainImage': mainImage.asset->url,
`

const getClient = preview => (preview ? previewClient : client)

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`)
  return data
}

export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview)
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        content,
      }`,
        { slug }
      )
      .then(res => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc){
        ${postFields}
        content,
      }[0...2]`,
      { slug }
    ),
  ])
  return { post, morePosts: getUniquePosts(morePosts) }
}
