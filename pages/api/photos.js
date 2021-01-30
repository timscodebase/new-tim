import cloudinary from 'cloudinary'

export default async function handler(req, res) {
  const cloudinaryImages = await cloudinary.v2.search
    .expression('folder:tim-smith')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute()
    .then(result => result)
  res.status(200).json(cloudinaryImages)
}
