import nodemailer from 'nodemailer'
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function getTransporter() {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({
    slug: 'email-settings',
  })

  if (!settings || !settings.smtpHost) {
    console.warn('SMTP settings not configured. Emails will not be sent.')
    return null
  }

  return nodemailer.createTransport({
    host: settings.smtpHost,
    port: settings.smtpPort,
    secure: settings.encryption === 'ssl',
    auth: {
      user: settings.smtpUser,
      pass: settings.smtpPassword,
    },
    tls: {
      rejectUnauthorized: settings.encryption !== 'none',
    },
  })
}

export async function sendEmail({ to, subject, html, text }: { to: string, subject: string, html?: string, text?: string }) {
  const transporter = await getTransporter()
  if (!transporter) return false

  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({
    slug: 'email-settings',
  })

  try {
    await transporter.sendMail({
      from: `"${settings.fromName}" <${settings.fromEmail}>`,
      to,
      subject,
      html,
      text,
    })
    return true
  } catch (error) {
    console.error('Failed to send email:', error)
    return false
  }
}
