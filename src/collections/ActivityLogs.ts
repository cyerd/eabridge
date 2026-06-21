import { CollectionConfig } from 'payload'
import { admin } from '../access/roles'

export const ActivityLogs: CollectionConfig = {
  slug: 'activity-logs',
  admin: {
    useAsTitle: 'action',
    defaultColumns: ['user', 'action', 'collectionName', 'entityId', 'createdAt'],
  },
  access: {
    read: admin,
    create: () => false, // Only system can create via hooks
    update: () => false,
    delete: admin,
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: false, // Could be system action
    },
    {
      name: 'action',
      type: 'text',
      required: true,
    },
    {
      name: 'collectionName',
      type: 'text',
      required: true,
    },
    {
      name: 'entityId',
      type: 'text',
      required: true,
    },
    {
      name: 'details',
      type: 'json',
    },
  ],
}
