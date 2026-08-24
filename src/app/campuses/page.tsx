import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Campuses & times',
  description:
    "One family, many time zones. Find Huios Nation World service times across the United States, Canada, France, Côte d'Ivoire, Cameroon and South Africa — all online, all welcome.",
  alternates: { canonical: '/campuses' },
};

export default function CampusesPage() {
  return (
    <main className="page-wide">
      <p className="eyebrow">Campuses &amp; times</p>
      <h1 className="page-title">One family, many time zones.</h1>
      <p className="lead" style={{ maxWidth: '64ch', margin: '0 0 48px' }}>
        Every gathering is online so you can join from anywhere — and in the
        US, the Saturday service also meets in person in Silver Spring, MD.
        Pick the service that fits your language and your clock. All times
        below are <strong>Eastern Time (ET)</strong>.
      </p>

      <h2 className="section-title">Global Services</h2>
      <div className="global-grid">
        <div className="global-card yellow">
          <p className="pill pill-yellow">United States</p>
          <p className="time-big">Saturday · 5:20 PM</p>
          <p className="time-zone">Eastern Time (ET) · in English · in person &amp; on Zoom</p>
          <p className="time-note">
            Our main weekly service for the US campus and everyone who wants to
            join — come in person if you&apos;re in the area, or join on Zoom
            from anywhere.
          </p>
          <div className="detail-box" style={{ marginTop: '16px' }}>
            <p className="detail-label">In person — Silver Spring, MD</p>
            <p className="detail-value">Jan–May: 2004 Queensguard Rd, Silver Spring, MD</p>
            <p className="detail-sub">Jun–Dec: Wheaton Library, 11701 Georgia Ave</p>
          </div>
          <div className="detail-box" style={{ marginTop: '10px' }}>
            <p className="detail-label">On Zoom</p>
            <p className="detail-value">Meeting ID: 430 672 8372</p>
            <p className="detail-sub">Passcode: 4tRumZ</p>
          </div>
        </div>
        <div className="global-card cyan">
          <p className="pill" style={{ background: '#00BEDF', color: '#111' }}>
            Canada · online
          </p>
          <p className="time-big">Sunday · 4:00 PM</p>
          <p className="time-zone spaced">Eastern Time (ET) · in French</p>
          <p className="time-note spaced">
            This service gathers online. To keep it warm and personal, we share
            the connection details individually — just ask, and a member of the
            team will reach out to you.
          </p>
          <Link className="btn btn-dark" href="/join" style={{ fontSize: '14.5px', padding: '13px 24px' }}>
            Request connection details
          </Link>
        </div>
      </div>

      <h2 className="section-title">Weekly gatherings — online</h2>
      <div className="weekly-grid">
        <div className="weekly-card">
          <p className="time">Monday · 8:00 PM</p>
          <p className="lang">Eastern Time (ET) · in English</p>
          <p className="note">Open to all campuses, wherever you are in the world.</p>
        </div>
        <div className="weekly-card">
          <p className="time">Wednesday · 10:30 PM</p>
          <p className="lang">Eastern Time (ET) · in French</p>
          <p className="note">Canada campus gathering, in French.</p>
        </div>
        <div className="weekly-card">
          <p className="time">Thursday · 8:00 PM</p>
          <p className="lang">Eastern Time (ET) · in English</p>
          <p className="note">United States campus gathering.</p>
        </div>
      </div>

      <h2 className="section-title" style={{ marginBottom: '10px' }}>Our campuses</h2>
      <p style={{ fontSize: '16px', color: '#555', margin: '0 0 24px', maxWidth: '60ch' }}>
        Six nations, one family. Every campus joins the same gatherings online.
      </p>
      <div className="campus-chips">
        <span className="chip cream">🇺🇸 United States</span>
        <span className="chip ice">🇨🇦 Canada</span>
        <span className="chip cream">🇫🇷 France</span>
        <span className="chip ice">🇨🇮 Côte d&apos;Ivoire</span>
        <span className="chip cream">🇨🇲 Cameroon</span>
        <span className="chip ice">🇿🇦 South Africa</span>
      </div>
      <p className="fine-print">
        Not sure which gathering is right for you? <Link href="/contact">Ask us</Link> —
        we&apos;ll point you to the best one for your language and time zone.
      </p>
    </main>
  );
}
