import { CollectionConfig } from 'payload'
import { admin } from '../access/roles'

export const Notifications: CollectionConfig = {
  slug: 'notifications',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'read', 'createdAt'],
  },
  access: {
    read: admin,
    create: admin,
    update: admin,
    delete: admin,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'read',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'userId',
      type: 'text',
      admin: {
        description: 'Optional: ID of the user this notification is for.',
      },
    },
  ],
}
