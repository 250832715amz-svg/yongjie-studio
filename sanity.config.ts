import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

const projectId = 'xbywcfcw'
const dataset = 'production'

export default defineConfig({
  name: 'yongjie-studio',
  title: '永杰塑胶 CMS',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})