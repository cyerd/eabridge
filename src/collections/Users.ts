import { CollectionConfig } from 'payload'
import { admin, superAdmin, superAdminFieldAccess, adminFieldAccess } from '../access/roles'
import { logActivity, logDelete } from './hooks/activityLogger'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: admin,
    create: superAdmin,
    update: admin,
    delete: superAdmin,
  },
  hooks: {
    afterChange: [logActivity('users')],
    afterDelete: [logDelete('users')],
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: 'Super Admin', value: 'super-admin' },
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'Content Manager', value: 'content-manager' },
      ],
      access: {
        update: superAdminFieldAccess,
      },
    },
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'company',
      type: 'text',
    },
    {
      name: 'isVerified',
      type: 'checkbox',
      defaultValue: false,
      access: {
        update: adminFieldAccess,
      },
    },
  ],
}
