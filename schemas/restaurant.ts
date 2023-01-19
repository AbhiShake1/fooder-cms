import {Rule} from 'sanity'

export default {
  name: 'restaurant',
  title: 'Restaurant',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant name',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (rule: Rule) => rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the restaurant',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of the restaurant',
    },
    {
      name: 'lng',
      type: 'number',
      title: 'Longitude of the restaurant',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address of the restaurant',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating (1-5 stars)',
      validation: (rule: Rule) => rule.min(1).max(5).error('Only 1-5 allowed'),
    },
    {
      name: 'type',
      title: 'Category',
      validation: (rule: Rule) => rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
}
