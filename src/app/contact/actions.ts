'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

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

    console.log('Form submitted successfully:', submission);
    console.log('Sending email to: procurement@eabridgegroup.com');

    revalidatePath('/contact');
    return { success: true, message: 'Thank you! Your request has been submitted.' };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, message: 'Something went wrong. Please try again later.' };
  }
}
