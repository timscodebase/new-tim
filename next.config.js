const cloudinary = require('cloudinary')

module.exports = {
  target: 'serverless',
  images: {
    loader: 'cloudinary',
    path: 'res.cloudinary.com/tihos/image/upload/v1609372042/tim-smith',
    domains: ['res.cloudinary.com/'],
  },
}
