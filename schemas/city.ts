import { defineField, defineType } from 'sanity'
import { MdBusiness as icon } from 'react-icons/md'

export default defineType({
  name: 'city',
  title: 'Cities',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'cityName',
      title: 'City name',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      cityName: 'cityName',
      country: 'country',
    },
    prepare(selection) {
      return {
        title: `${selection.cityName}, ${selection.country}`,
      }
    },
  },
})
