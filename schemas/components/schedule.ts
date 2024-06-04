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
          name: 'availableHours',
          title: 'Available Hours',
          type: 'array',
          of: [
            {
              type: 'scheduleHours',
            }
          ]
        }),
        defineField({
          name: 'isClosed',
          title: 'Is closed?',
          type: 'boolean',
          initialValue: false,
          options: {
            layout: 'checkbox'
          }
        }),
      ],
      options: {columns: 3},
      preview: {
        select: {
          openingDay: 'openingDay'
        },
        prepare(selection) {
          const { openingDay } = selection
          return {
            title: openingDay,
          }
        },
      },
    },
  ],
})
