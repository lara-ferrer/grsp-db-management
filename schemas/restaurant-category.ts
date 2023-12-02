import { defineField, defineType } from 'sanity'
import { MdFilterList as icon } from 'react-icons/md'

export default defineType({
  name: 'restaurantCategory',
  title: 'Restaurant categories',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
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
