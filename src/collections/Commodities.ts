import { CollectionConfig } from 'payload'
import { admin, contentManager } from '../access/roles'
import { logActivity, logDelete } from './hooks/activityLogger'

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
