import type { Metadata } from 'next';
import Link from 'next/link';
import CardGivingForm from '@/components/CardGivingForm';
import { PAYPAL_DONATE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Give',
  description:
    'Giving is one of our rhythms. Support Huios Nation World online by card, PayPal, Zelle (United States) or Interac e-Transfer (Canada).',
  alternates: { canonical: '/give' },
};

export default function GivePage() {
  const stripeEnabled = Boolean(process.env.STRIPE_SECRET_KEY);

  return (
    <main className="page-narrow">
      <p className="eyebrow">Give</p>
      <h1 className="page-title">Giving is one of our rhythms.</h1>
      <p className="lead" style={{ maxWidth: '60ch', margin: '0 0 12px' }}>
        We give because grace came to us free. Every gift supports the
        gatherings, ministries and outreach of Huios Nation World across our
        campuses.
      </p>
      <p className="give-note">
        Giving is always voluntary — you will never be pressured to give.
      </p>

      <div className="give-list">
        {stripeEnabled && (
          <div className="give-card">
            <div className="give-head">
              <h2>Give by card</h2>
              <span className="region-tag ca">One time or monthly</span>
            </div>
            <p className="give-desc">
              Give securely with any debit or credit card, from anywhere in the
              world — one time, or as a monthly rhythm.
            </p>
            <CardGivingForm />
          </div>
        )}

        <div className="give-card split">
          <div className="give-copy">
            <h2>Give online with PayPal</h2>
            <p className="give-desc">
              Secure one-time or recurring gifts by card or PayPal balance,
              from anywhere in the world.
            </p>
          </div>
          <a className="btn btn-yellow" href={PAYPAL_DONATE_URL} target="_blank" rel="noopener">
            Donate with PayPal
          </a>
        </div>

        <div className="give-card">
          <div className="give-head">
            <h2>Zelle</h2>
            <span className="region-tag us">United States</span>
          </div>
          <p className="give-desc">
            Send directly from your US bank&apos;s app — no fees, and the full
            amount reaches the church.
          </p>
          <div className="detail-box">
            <p className="detail-label">Send to</p>
            <p className="detail-value">giving@huiosnationworld.org</p>
            <p className="detail-sub">Recipient name: Huios Nation World</p>
          </div>
          <p className="give-hint">
            In your banking app: choose Zelle → add the email above as a
            recipient → confirm the name matches → send your gift.
          </p>
        </div>

        <div className="give-card">
          <div className="give-head">
            <h2>Interac e-Transfer</h2>
            <span className="region-tag ca">Canada</span>
          </div>
          <p className="give-desc">
            Send from any Canadian bank account — simple, secure, no fees.
          </p>
          <div className="detail-box">
            <p className="detail-label">Send to</p>
            <p className="detail-value">giving@huiosnationworld.org</p>
            <p className="detail-sub">Auto-deposit is enabled — no security question needed.</p>
          </div>
        </div>
      </div>

      <p className="fine-print centered">
        Questions about giving or receipts? <Link href="/contact">Contact us</Link> —
        we&apos;re happy to help.
      </p>
    </main>
  );
}
