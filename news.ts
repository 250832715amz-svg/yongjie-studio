import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'news',
  title: '新闻动态',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '标题',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: '摘要',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: '正文内容',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'date',
      title: '发布日期',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
    }),
    defineField({
      name: 'category',
      title: '分类',
      type: 'string',
      options: {
        list: [
          { title: '公司新闻', value: '公司新闻' },
          { title: '产品动态', value: '产品动态' },
          { title: '展会信息', value: '展会信息' },
        ],
      },
    }),
    defineField({
      name: 'image',
      title: '封面图片',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'published',
      title: '已发布',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})