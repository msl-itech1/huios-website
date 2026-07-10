import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Say hello. A question, a prayer request, or just curious about who we are — we read every message, and a real person will write back.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main className="page-form">
      <p className="eyebrow">Contact</p>
      <h1 className="page-title">Say hello.</h1>
      <p className="lead" style={{ marginBottom: '40px' }}>
        A question, a prayer request, or just curious about who we are — we
        read every message, and a real person will write back.
      </p>
      <ContactForm />
    </main>
  );
}
