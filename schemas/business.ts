import { defineField, defineType } from 'sanity'
import { MdBusiness as icon } from 'react-icons/md'

export default defineType({
  name: 'business',
  title: 'Business',
  type: 'document',
  icon,
  groups: [
    {
      name: 'contact',
      title: 'Contact information',
    },
  ],
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
      name: 'address',
      title: 'Address',
      type: 'string',
      group: 'contact'
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      group: 'contact'
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'string',
      group: 'contact'
    }),
    defineField({
      title: 'Category',
      name: 'category',
      type: 'string',
      options: {
        list: [
          { title: 'Restaurant', value: 'restaurant' },
          { title: 'Cafe', value: 'cafe' },
          { title: 'Fashion and beauty', value: 'fashion' },
          { title: 'Leisure', value: 'leisure' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      }
    }),
    defineField({
      title: 'Subcategories',
      name: 'subcategories',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        list: [
          { title: 'Flexitarian', value: 'flexitarian' },
          { title: 'Vegetarian', value: 'vegetarian' },
          { title: 'Vegan', value: 'vegan' }
        ],
        layout: 'grid'
      }
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
    }),
    defineField({
      name: 'images',
      title: 'Business Images',
      type: 'array',
      of: [
        {
          type: 'image'
        }
      ],
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
    defineField({
      name: 'reviews',
      type: 'array',
      description: 'Reviews for the business received by users',
      of: [
        {
          type: 'review'
        }
      ]
    }),
  ],
  orderings: [
    {
      title: 'Reviews',
      name: 'reviews',
      by: [
        {field: 'reviews', direction: 'asc'}
      ]
    },
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
