'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { sendEmail } from '@/lib/email/transporter';
import { getPayload } from 'payload';
import config from '@/payload.config';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const company = formData.get('company') as string;
  const country = formData.get('country') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const commodity = formData.get('commodity') as string;
  const message = formData.get('message') as string;
  const userType = formData.get('userType') as string;

  try {
    // 1. Save to database (Prisma)
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        company,
        country,
        email,
        phone,
        commodity,
        message,
        userType,
      },
    });

    // 2. Save to Payload (Mini CRM)
    const payload = await getPayload({ config });
    await payload.create({
      collection: 'contact-submissions',
      data: {
        name,
        email,
        phone,
        company,
        country,
        commodity,
        userType: userType.toLowerCase() as any,
        message,
        status: 'hot',
      },
    });

    // 3. Create In-App Notification (Payload)
    await payload.create({
      collection: 'notifications',
      data: {
        title: `New Sourcing Request from ${name}`,
        message: `Company: ${company || 'N/A'}\nEmail: ${email}\nCommodity: ${commodity || 'N/A'}\nMessage: ${message}`,
      },
    });

    // 4. Send Email Notification
    await sendEmail({
      to: 'procurement@eabridgegroup.com',
      subject: `New Sourcing Inquiry: ${name}`,
      html: `
        <h2>New Sourcing Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Country:</strong> ${country || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Commodity:</strong> ${commodity || 'N/A'}</p>
        <p><strong>Type:</strong> ${userType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log('Form processed successfully:', submission.id);

    revalidatePath('/contact');
    return { success: true, message: 'Thank you! Your request has been submitted.' };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, message: 'Something went wrong. Please try again later.' };
  }
}
