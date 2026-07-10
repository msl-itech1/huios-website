import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank you',
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <main className="page-form">
      <div className="form-success ice" style={{ marginTop: '40px' }}>
        <p className="success-title">Thank you for your generosity! 💛</p>
        <p>
          Your gift was received. A receipt is on its way to your inbox. We&apos;re
          grateful for you — every gift carries the work of the family forward.
        </p>
      </div>
      <p className="fine-print centered">
        <Link href="/">Back to the home page</Link>
      </p>
    </main>
  );
}
