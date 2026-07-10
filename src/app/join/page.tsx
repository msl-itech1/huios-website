import type { Metadata } from 'next';
import JoinForm from '@/components/JoinForm';

export const metadata: Metadata = {
  title: 'Join us online',
  description:
    "We'd love to save you a seat. Request the connection details for a Huios Nation World online gathering and a member of the team will reach out to you personally.",
  alternates: { canonical: '/join' },
};

export default function JoinPage() {
  return (
    <main className="page-form">
      <p className="eyebrow">Join us online</p>
      <h1 className="page-title">We&apos;d love to save you a seat.</h1>
      <p className="lead">
        Our online gatherings are warm, personal spaces — so rather than
        posting a public link, we send the connection details to each person
        directly. Fill in the form below and a member of our team will reach
        out to you personally, usually within a day.
      </p>
      <p className="privacy-note">
        Your information is only used to welcome you — nothing else.
      </p>
      <JoinForm />
    </main>
  );
}
