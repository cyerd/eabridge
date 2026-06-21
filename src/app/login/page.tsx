'use client';

import { useState } from 'react';
import { login } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const result = await login(formData);

    if (result.success) {
      router.push('/');
      router.refresh();
    } else {
      setError(result.error || 'Something went wrong');
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            Access the East Africa Bridge Group portal
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="email@example.com"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="mt-1"
              />
            </div>
          </div>

          {error && (
            <div className="text-sm text-red-600 font-medium text-center">
              {error}
            </div>
          )}

          <div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-primary text-white hover:bg-brand-primary/90"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
