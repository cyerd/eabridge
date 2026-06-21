'use server';

import { getPayload } from 'payload';
import config from '@/payload.config';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  try {
    const payload = await getPayload({ config });

    const result = await payload.login({
      collection: 'users',
      data: {
        email,
        password,
      },
    });

    if (result.token) {
      const cookieStore = await cookies();
      cookieStore.set('payload-token', result.token, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });

      return { success: true };
    }

    return { error: 'Invalid credentials' };
  } catch (error: any) {
    console.error('Login error:', error);
    return { error: error.message || 'An error occurred during login' };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('payload-token');
  redirect('/login');
}
