export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'library',
      title: 'Library',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
