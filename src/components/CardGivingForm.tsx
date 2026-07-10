'use client';

import { useState } from 'react';

const PRESETS = [20, 50, 100, 250];

export default function CardGivingForm() {
  const [amount, setAmount] = useState<number | ''>(50);
  const [interval, setInterval] = useState<'one_time' | 'monthly'>('one_time');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!amount || amount < 1) {
      setError('Please enter an amount of at least $1.');
      return;
    }
    setError(null);
    setSubmitting(true);
    const res = await fetch('/api/donate/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, interval }),
    }).catch(() => null);

    const body = await res?.json().catch(() => null);
    if (res?.ok && body?.url) {
      window.location.href = body.url;
    } else {
      setError(body?.error ?? 'Something went wrong — please try again.');
      setSubmitting(false);
    }
  }

  return (
    <form className="card-giving" onSubmit={handleSubmit}>
      <div className="amount-presets">
        {PRESETS.map((preset) => (
          <button
            key={preset}
            type="button"
            className={`amount-btn${amount === preset ? ' selected' : ''}`}
            onClick={() => setAmount(preset)}
          >
            ${preset}
          </button>
        ))}
        <div className="amount-custom">
          <span>$</span>
          <input
            type="number"
            min={1}
            step={1}
            placeholder="Other"
            value={typeof amount === 'number' && !PRESETS.includes(amount) ? amount : ''}
            onChange={(e) =>
              setAmount(e.target.value === '' ? '' : Math.floor(Number(e.target.value)))
            }
            aria-label="Custom amount in dollars"
          />
        </div>
      </div>
      <div className="interval-toggle" role="radiogroup" aria-label="Giving frequency">
        <button
          type="button"
          className={interval === 'one_time' ? 'selected' : ''}
          onClick={() => setInterval('one_time')}
        >
          One time
        </button>
        <button
          type="button"
          className={interval === 'monthly' ? 'selected' : ''}
          onClick={() => setInterval('monthly')}
        >
          Monthly
        </button>
      </div>
      {error && <p className="form-error">{error}</p>}
      <button className="form-submit" type="submit" disabled={submitting}>
        {submitting
          ? 'Redirecting…'
          : `Give ${amount ? `$${amount}` : ''}${interval === 'monthly' ? ' / month' : ''} by card`}
      </button>
      <p className="give-hint" style={{ textAlign: 'center' }}>
        Secure payment by Stripe. You&apos;ll receive a receipt by email.
      </p>
    </form>
  );
}
