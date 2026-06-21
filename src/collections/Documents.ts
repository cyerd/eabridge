import { CollectionConfig } from 'payload'
import { admin, editor } from '../access/roles'

export const Documents: CollectionConfig = {
  slug: 'documents',
  upload: {
    staticDir: 'documents',
    mimeTypes: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  },
  access: {
    read: () => true,
    create: editor,
    update: editor,
    delete: admin,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Certificate', value: 'certificate' },
        { label: 'Report', value: 'report' },
        { label: 'Corporate', value: 'corporate' },
      ],
    },
  ],
}
