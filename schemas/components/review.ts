import {defineField, defineType} from 'sanity'

export const review = defineType({
  name: 'review',
  title: 'Review',
  type: 'object',
  fields: [
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'User email',
      type: 'string',
    }),
    defineField({
      name: 'picture',
      title: 'User picture',
      type: 'string',
    }),
    defineField({
      name: 'review',
      title: 'Review',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date'
    }),
  ],
  preview: {
    select: {
      userName: 'userName',
    },
    prepare(selection) {
      const {userName} = selection
      return {
        title: `${userName}'s review`,
      }
    },
  },
})
