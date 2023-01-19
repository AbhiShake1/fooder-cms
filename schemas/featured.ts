import {Rule} from 'sanity'

export default {
  name: 'featured',
  type: 'document',
  title: 'Featured Menu categories',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured category name',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (rule: Rule) => rule.max(200),
    },
    {
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
  ],
}
