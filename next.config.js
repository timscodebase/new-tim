const cloudinary = require('cloudinary')

module.exports = {
  target: 'serverless',
  images: {
    loader: 'cloudinary',
    path: 'res.cloudinary.com/tihos/image/upload/v1609372042/tim-smith',
    domains: ['res.cloudinary.com/'],
  },
  async exportPathMap(defaultPathMap) {
    const cloudinaryImages = await cloudinary.v2.search
      .expression('folder:tim-smith')
      .sort_by('public_id', 'desc')
      .max_results(30)
      .execute()
      .then(result => result)
    return {
      '/photography': { page: '/photography', query: cloudinaryImages },
      defaultPathMap,
    }
  },
}
