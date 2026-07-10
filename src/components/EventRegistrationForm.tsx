'use client';

import { useState } from 'react';

type Status = 'closed' | 'open' | 'submitting' | 'success';

export default function EventRegistrationForm({ event }: { event: string }) {
  const [status, setStatus] = useState<Status>('closed');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus('submitting');
    const data = new FormData(e.currentTarget);
    const res = await fetch('/api/registrations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event,
        names: data.get('names'),
        email: data.get('email'),
        campus: data.get('campus'),
      }),
    }).catch(() => null);

    if (res?.ok) {
      setStatus('success');
    } else {
      const body = await res?.json().catch(() => null);
      setError(body?.error ?? 'Something went wrong — please try again.');
      setStatus('open');
    }
  }

  if (status === 'closed') {
    return (
      <button
        className="btn btn-yellow-sm"
        type="button"
        onClick={() => setStatus('open')}
      >
        Register your interest
      </button>
    );
  }

  if (status === 'success') {
    return (
      <div className="inline-form-card inline-success">
        <p className="success-title">🎉 You&apos;re on the list!</p>
        <p>We&apos;ll email you as soon as the date and details are confirmed.</p>
      </div>
    );
  }

  return (
    <div className="inline-form-card">
      <form onSubmit={handleSubmit}>
        <p className="form-title">Reserve your spot</p>
        <input type="text" name="names" placeholder="Your names (e.g. Sarah & David)" required />
        <input type="email" name="email" placeholder="Email address" required />
        <select name="campus" defaultValue="">
          <option value="">Your campus…</option>
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Côte d&apos;Ivoire</option>
          <option>Cameroon</option>
          <option>South Africa</option>
          <option>I&apos;m new — no campus yet</option>
        </select>
        {error && <p className="form-error">{error}</p>}
        <button className="form-submit" type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Register'}
        </button>
      </form>
    </div>
  );
}
