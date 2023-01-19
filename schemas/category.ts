import {Rule} from 'sanity'

export default {
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category name',
      validation: (rule: Rule) => rule.required(),
    },
    {name: 'image', type: 'image', title: 'image of category'},
  ],
}
