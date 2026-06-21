import { CollectionConfig } from 'payload'
import { admin, contentManager } from '../access/roles'

export const Documents: CollectionConfig = {
  slug: 'documents',
  labels: {
    singular: 'Document',
    plural: 'Library',
  },
  upload: {
    staticDir: 'documents',
    mimeTypes: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
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
        { label: 'Policy', value: 'policy' },
        { label: 'Other', value: 'other' },
      ],
      required: true,
    },
  ],
}
