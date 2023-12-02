import { defineField, defineType } from 'sanity'
import { MdBusiness as icon } from 'react-icons/md'

export default defineType({
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
    }),
    defineField({
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        list: [
          { title: 'Flexitariano', value: 'flexitarian' },
          { title: 'Vegetariano', value: 'vegetarian' },
          { title: 'Vegano', value: 'vegan' }
        ],
        layout: 'tags'
      }
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      title: 'Coordinates',
      name: 'coordinates',
      type: 'geopoint'
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'reference',
      to: { type: 'city' },
    }),
    defineField({
      name: 'schedule',
      type: 'schedule'
    }),
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare(selection) {
      return {
        title: `${selection.name}`,
      }
    },
  },
})
