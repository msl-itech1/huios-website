'use client';

import { useState } from 'react';

const SUBJECTS = [
  'General Inquiry',
  'Campus Connection',
  'Prayer Request',
  'Salvation',
  'Conference',
  'Media & Press',
];

export default function MinistryContactForm({
  ministry,
  defaultSubject,
}: {
  ministry: string;
  defaultSubject?: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const res = await fetch('/api/ministries/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ministry,
        name: data.get('name'),
        email: data.get('email'),
        location: data.get('location'),
        subject: data.get('subject'),
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
      <div className="form-success ice">
        <p className="success-title">Message received 💛</p>
        <p>Thank you for reaching out. Someone from the team will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="mc-name">Full Name</label>
          <input id="mc-name" name="name" type="text" placeholder="First and last name" required />
        </div>
        <div className="form-field">
          <label htmlFor="mc-email">Email Address</label>
          <input id="mc-email" name="email" type="email" placeholder="you@example.com" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="mc-location">Country / Location</label>
          <input id="mc-location" name="location" type="text" placeholder="e.g. Maryland, USA" />
        </div>
        <div className="form-field">
          <label htmlFor="mc-subject">Subject</label>
          <select id="mc-subject" name="subject" defaultValue={defaultSubject ?? ''}>
            <option value="">Select…</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="mc-message">Message</label>
        <textarea id="mc-message" name="message" rows={5} placeholder="Write your message here…" required />
      </div>
      {error && <p className="form-error">{error}</p>}
      <button className="form-submit" type="submit" disabled={submitting}>
        {submitting ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
