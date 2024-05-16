import {defineField, defineType} from 'sanity'

export const scheduleHours = defineType({
  name: 'scheduleHours',
  title: 'Schedule Hours',
  description: 'Opening and closing hours for each business',
  type: 'object',
  fields: [
    defineField({
      name: 'opening',
      title: 'Opening Hour',
      type: 'timeValue',
    }),
    defineField({
      name: 'closing',
      title: 'Closing Hour',
      type: 'timeValue',
    }),
  ],
})
