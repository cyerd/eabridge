import { CollectionConfig } from 'payload'
import { admin, contentManager } from '../access/roles'

export const Commodities: CollectionConfig = {
  slug: 'commodities',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: contentManager,
    update: contentManager,
    delete: admin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'origins',
      type: 'text',
    },
    {
      name: 'grades',
      type: 'text',
    },
    {
      name: 'packaging',
      type: 'text',
    },
    {
      name: 'markets',
      type: 'text',
    },
  ],
}
