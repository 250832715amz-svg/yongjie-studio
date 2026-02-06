import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: '服务',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '服务名称',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: '服务描述',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: '服务图片',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: '服务特点',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'order',
      title: '排序',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'published',
      title: '已发布',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})