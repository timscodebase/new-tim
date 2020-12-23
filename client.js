const sanityClient = require('@sanity/client')

module.exports = sanityClient({
  projectId: 'kod60sys',
  dataset: 'production',
  useCdn: true,
})
