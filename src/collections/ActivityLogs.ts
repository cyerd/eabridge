import { CollectionConfig } from 'payload'
import { superAdmin } from '../access/roles'

export const ActivityLogs: CollectionConfig = {
  slug: 'activity-logs',
  admin: {
    useAsTitle: 'action',
    defaultColumns: ['user', 'action', 'target', 'createdAt'],
  },
  access: {
    read: superAdmin,
    create: () => true, // System-created
    update: () => false,
    delete: superAdmin,
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'action',
      type: 'text',
      required: true,
    },
    {
      name: 'target',
      type: 'text',
    },
    {
      name: 'details',
      type: 'json',
    },
  ],
}
