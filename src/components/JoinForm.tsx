'use client';

import { useState } from 'react';

export default function JoinForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const res = await fetch('/api/join', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.get('name'),
        email: data.get('email'),
        phone: data.get('phone'),
        service: data.get('service'),
        source: data.get('source'),
      }),
    }).catch(() => null);

    if (res?.ok) {
      setDone(true);
    } else {
      const body = await res?.json().catch(() => null);
      setError(body?.error ?? 'Something went wrong — please try again.');
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="form-success ice">
        <p className="success-title">Thank you! 💛</p>
        <p>
          Your request is in. Someone from the team will contact you shortly
          with everything you need to join. We can&apos;t wait to meet you.
        </p>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="join-name">Your name</label>
        <input id="join-name" name="name" type="text" placeholder="First and last name" required />
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="join-email">Email</label>
          <input id="join-email" name="email" type="email" placeholder="you@example.com" required />
        </div>
        <div className="form-field">
          <label htmlFor="join-phone">Phone</label>
          <input id="join-phone" name="phone" type="tel" placeholder="+1 …" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="join-service">Which gathering would you like to join?</label>
        <select id="join-service" name="service" defaultValue="">
          <option value="">Choose a gathering…</option>
          <option>Sunday 4:00 PM ET — Canada service (French)</option>
          <option>Saturday 5:20 PM ET — US Global Service (English)</option>
          <option>Monday 8:00 PM ET — All campuses (English)</option>
          <option>Wednesday 10:30 PM ET — Canada (French)</option>
          <option>Thursday 8:00 PM ET — United States (English)</option>
          <option>Not sure yet — help me choose</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="join-source">How did you hear about us?</label>
        <select id="join-source" name="source" defaultValue="">
          <option value="">Select…</option>
          <option>A friend or family member</option>
          <option>Online search</option>
          <option>Social media</option>
          <option>I attended an event</option>
          <option>Other</option>
        </select>
      </div>
      {error && <p className="form-error">{error}</p>}
      <button className="form-submit" type="submit" disabled={submitting}>
        {submitting ? 'Sending…' : 'Send my request'}
      </button>
    </form>
  );
}
