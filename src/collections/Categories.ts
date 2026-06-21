import { CollectionConfig } from 'payload'
import { anyone, contentManager } from '../access/roles'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: anyone,
    create: contentManager,
    update: contentManager,
    delete: contentManager,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
    },
  ],
}
