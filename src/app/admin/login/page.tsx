import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { isAdmin } from '@/lib/admin-session';
import { login } from '../actions';

export const metadata: Metadata = {
  title: 'Admin login',
  robots: { index: false },
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (await isAdmin()) redirect('/admin');
  const { error } = await searchParams;

  return (
    <main className="page-form" style={{ maxWidth: '480px' }}>
      <p className="eyebrow">Admin</p>
      <h1 className="page-title" style={{ fontSize: 'clamp(28px,4vw,40px)' }}>
        Team sign in
      </h1>
      <form className="form-card" action={login}>
        <div className="form-field">
          <label htmlFor="admin-password">Password</label>
          <input id="admin-password" name="password" type="password" required autoFocus />
        </div>
        {error && <p className="form-error">Wrong password — try again.</p>}
        <button className="form-submit" type="submit">Sign in</button>
      </form>
    </main>
  );
}
