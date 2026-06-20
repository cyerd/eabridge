import { GlobalConfig } from 'payload'
import { sendEmail } from '../lib/email/transporter'

export const EmailSettings: GlobalConfig = {
  slug: 'email-settings',
  access: {
    read: ({ req: { user } }) => user?.role === 'super-admin',
    update: ({ req: { user } }) => user?.role === 'super-admin',
  },
  fields: [
    {
      name: 'smtpHost',
      type: 'text',
      required: true,
    },
    {
      name: 'smtpPort',
      type: 'number',
      required: true,
    },
    {
      name: 'smtpUser',
      type: 'text',
      required: true,
    },
    {
      name: 'smtpPassword',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Enter SMTP Password',
      },
    },
    {
      name: 'fromEmail',
      type: 'text',
      required: true,
    },
    {
      name: 'fromName',
      type: 'text',
      required: true,
    },
    {
      name: 'encryption',
      type: 'select',
      required: true,
      defaultValue: 'tls',
      options: [
        { label: 'SSL', value: 'ssl' },
        { label: 'TLS', value: 'tls' },
        { label: 'None', value: 'none' },
      ],
    },
    {
      name: 'testEmailAddress',
      type: 'text',
      admin: {
        description: 'Enter an email address to send a test email to.',
      },
    },
  ],
  endpoints: [
    {
      path: '/send-test-email',
      method: 'post',
      handler: async (req) => {
        const { user, payload } = req
        if (!user || user.role !== 'super-admin') {
          return Response.json({ error: 'Unauthorized' }, { status: 401 })
        }

        let to: string | undefined
        try {
          const data = await (req as any).json()
          to = data.to
        } catch (e) {
          // ignore
        }

        if (!to) {
          const settings = await payload.findGlobal({ slug: 'email-settings' })
          to = settings.testEmailAddress as string
        }

        if (!to) {
          return Response.json({ error: 'No test email address provided' }, { status: 400 })
        }

        const success = await sendEmail({
          to,
          subject: 'Test Email from East Africa Bridge Group',
          html: '<p>This is a test email to verify your SMTP settings.</p>',
          text: 'This is a test email to verify your SMTP settings.',
        })

        if (success) {
          return Response.json({ message: 'Test email sent successfully!' })
        } else {
          return Response.json({ error: 'Failed to send test email. Check server logs.' }, { status: 500 })
        }
      },
    },
  ],
}
