import type { Metadata } from 'next';
import MinistrySubnav from '@/components/MinistrySubnav';
import MinistryContactForm from '@/components/MinistryContactForm';

export const metadata: Metadata = {
  title: "Contact — Women's Ministry",
  description:
    "We would love to hear from you. Connect with a campus, ask a question, or reach out to Huios Nation Women's Ministry.",
  alternates: { canonical: '/ministries/women/contact' },
};

const VALID_SUBJECTS = new Set([
  'General Inquiry',
  'Campus Connection',
  'Prayer Request',
  'Salvation',
  'Conference',
  'Media & Press',
]);

export default async function WomensMinistryContactPage({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string }>;
}) {
  const { subject } = await searchParams;
  const defaultSubject = subject && VALID_SUBJECTS.has(subject) ? subject : undefined;

  return (
    <>
      <MinistrySubnav current="/ministries/women/contact" />
      <main className="page-form">
        <p className="eyebrow">Contact</p>
        <h1 className="page-title">We&apos;d love to hear from you.</h1>
        <p className="lead" style={{ margin: '0 0 10px' }}>
          Whether you have a question about our ministry, want to connect
          with a campus, or just prayed the salvation prayer — our door is
          open.
        </p>
        <p className="privacy-note" style={{ margin: '0 0 8px' }}>
          Headquarters: Maryland, USA — part of Huios Nation World.
        </p>
        <p className="privacy-note" style={{ margin: '0 0 40px' }}>
          We have campuses in California, Massachusetts, Ohio, Canada,
          Cameroon, Ivory Coast, and France. To connect with a specific
          campus, add your location below and we&apos;ll direct you to the
          right contact.
        </p>

        <MinistryContactForm ministry="women" defaultSubject={defaultSubject} />

        <p className="fine-print centered" style={{ marginTop: '24px' }}>
          Follow us on TikTok and YouTube — links coming soon.
        </p>
      </main>
    </>
  );
}
