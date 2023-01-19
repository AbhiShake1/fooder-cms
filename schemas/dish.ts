import {Rule} from 'sanity'

export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of dish',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (rule: Rule) => rule.max(200),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of dish in nepali rupees.',
      validation: (rule: Rule) => rule.min(0),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of dish',
    },
  ],
}
