import { CollectionConfig } from 'payload'
import { admin, contentManager } from '../access/roles'
import { logActivity, logDelete } from './hooks/activityLogger'

export const Commodities: CollectionConfig = {
  slug: 'commodities',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'origins', 'updatedAt'],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
    create: contentManager,
    update: contentManager,
    delete: admin,
  },
  versions: {
    drafts: true,
  },
  hooks: {
    afterChange: [logActivity('commodities')],
    afterDelete: [logDelete('commodities')],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'origins',
      type: 'text',
      localized: true,
    },
    {
      name: 'grades',
      type: 'text',
      localized: true,
    },
    {
      name: 'packaging',
      type: 'text',
      localized: true,
    },
    {
      name: 'markets',
      type: 'text',
      localized: true,
    },
  ],
}
