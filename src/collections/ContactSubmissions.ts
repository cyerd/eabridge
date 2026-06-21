import { CollectionConfig } from 'payload'
import { admin } from '../access/roles'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'commodity', 'status', 'createdAt'],
  },
  access: {
    read: admin,
    create: () => true, // Anyone can submit
    update: admin,
    delete: admin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
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
      name: 'country',
      type: 'text',
    },
    {
      name: 'commodity',
      type: 'text',
    },
    {
      name: 'userType',
      type: 'select',
      options: [
        { label: 'Buyer', value: 'buyer' },
        { label: 'Supplier', value: 'supplier' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'hot',
      options: [
        { label: 'Hot', value: 'hot' },
        { label: 'Warm', value: 'warm' },
        { label: 'Cold', value: 'cold' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'internalNotes',
      type: 'textarea',
    },
  ],
}
