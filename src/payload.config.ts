import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoPlugin } from '@payloadcms/plugin-seo'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Commodities } from './collections/Commodities'
import { Notifications } from './collections/Notifications'
import { Posts } from './collections/Posts'
import { Categories } from './collections/Categories'
import { Documents } from './collections/Documents'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { ActivityLogs } from './collections/ActivityLogs'
import { EmailSettings } from './globals/EmailSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Commodities,
    Notifications,
    Posts,
    Categories,
    Documents,
    ContactSubmissions,
    ActivityLogs
  ],
  globals: [EmailSettings],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'YOUR_SECRET_HERE',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  localization: {
    locales: [
      {
        label: 'English',
        code: 'en',
      },
      {
        label: 'Arabic',
        code: 'ar',
        rtl: true,
      },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
  plugins: [
    seoPlugin({
      collections: ['posts', 'commodities'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }: any) => `East Africa Bridge Group | \${doc.title || doc.name}`,
      generateDescription: ({ doc }: any) => doc.excerpt || doc.description,
    }),
  ],
})
