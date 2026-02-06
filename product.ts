import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: '产品',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '产品名称',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: '产品描述',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'category',
      title: '产品分类',
      type: 'string',
      options: {
        list: [
          { title: '挤出型材', value: '挤出型材' },
          { title: '注塑成型', value: '注塑成型' },
          { title: '定制服务', value: '定制服务' },
        ],
      },
    }),
    defineField({
      name: 'image',
      title: '产品图片',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: '产品特点',
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