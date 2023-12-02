import {defineField, defineType} from 'sanity'

export const schedule = defineType({
  name: 'schedule',
  title: 'Schedule',
  description: 'Opening and closing hours for each business',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        defineField({
          title: 'Opening Day',
          name: 'openingDay',
          type: 'string',
          options: {
            list: [
              {title: 'Monday', value: 'lunes'},
              {title: 'Tuesday', value: 'martes'},
              {title: 'Wednesday', value: 'miercoles'},
              {title: 'Thursday', value: 'jueves'},
              {title: 'Friday', value: 'viernes'},
              {title: 'Saturday', value: 'sabado'},
              {title: 'Sunday', value: 'domingo'},
            ],
          },
        }),
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
      options: {columns: 3},
      preview: {
        select: {
          openingDay: 'openingDay',
          opening: 'opening',
          closing: 'closing'
        },
        prepare(selection) {
          const { openingDay, opening, closing } = selection
          return {
            title: openingDay,
            subtitle: `${opening}h - ${closing}h`
          }
        },
      },
    },
  ],
})
