import { CollectionConfig } from 'payload'
import { admin, anyone } from '../access/roles'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: true,
  access: {
    read: anyone,
    create: admin,
    update: admin,
    delete: admin,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
