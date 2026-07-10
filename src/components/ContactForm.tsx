'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message'),
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
      <div className="form-success cream">
        <p className="success-title">Message received 💛</p>
        <p>Thank you for reaching out. Someone from the team will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" name="name" type="text" placeholder="First and last name" required />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" placeholder="you@example.com" required />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">Your message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Write anything — questions, prayer requests, or just hello."
          required
        />
      </div>
      {error && <p className="form-error">{error}</p>}
      <button className="form-submit" type="submit" disabled={submitting}>
        {submitting ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
