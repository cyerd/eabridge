import { CollectionConfig } from 'payload'
import { anyone, contentManager } from '../access/roles'
import { logActivity, logDelete } from './hooks/activityLogger'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedDate', 'status'],
  },
  access: {
    read: anyone,
    create: contentManager,
    update: contentManager,
    delete: contentManager,
  },
  versions: {
    drafts: true,
  },
  hooks: {
    afterChange: [logActivity('posts')],
    afterDelete: [logDelete('posts')],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      index: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      localized: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'media',
    },
  ],
}
