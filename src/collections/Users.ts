import { CollectionConfig } from 'payload'
import { admin, superAdmin, superAdminFieldAccess } from '../access/roles'

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
  ],
}
