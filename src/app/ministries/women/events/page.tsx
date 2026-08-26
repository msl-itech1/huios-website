import type { Metadata } from 'next';
import Link from 'next/link';
import MinistrySubnav from '@/components/MinistrySubnav';

export const metadata: Metadata = {
  title: "Events — Women's Ministry",
  description:
    "Every year, Huios Nation Women's Ministry gathers women from across the globe for conferences that are more than events — they are encounters.",
  alternates: { canonical: '/ministries/women/events' },
};

export default function WomensMinistryEventsPage() {
  return (
    <>
      <MinistrySubnav current="/ministries/women/events" />
      <main className="page-wide">
        <p className="eyebrow">Events</p>
        <h1 className="page-title">Moments we share.</h1>
        <p className="lead" style={{ maxWidth: '70ch', margin: '0 0 12px' }}>
          Every year, Huios Nation Women&apos;s Ministry gathers women from
          across the globe for conferences that are more than events — they
          are encounters. Come expecting to leave different.
        </p>

        <h2 className="section-title" style={{ marginTop: '32px' }}>Annual Conference Schedule</h2>
        <div className="conference-grid">
          <div className="conference-card cyan">
            <h3>United States Conference</h3>
            <p className="conference-when">Held every year in August, in the United States</p>
            <p className="conference-desc">
              Our flagship annual gathering brings together women from across
              our US campuses and beyond for a weekend of powerful teaching,
              worship, and fellowship rooted in the finished work of Christ.
            </p>
          </div>
          <div className="conference-card yellow">
            <h3>Canada Conference</h3>
            <p className="conference-when">Held in August, every other year (even years — next: August 2026)</p>
            <p className="conference-desc">
              Our Canada conference unites women from our North American
              communities in a powerful regional gathering.
            </p>
          </div>
          <div className="conference-card cream">
            <h3>Ivory Coast Conference</h3>
            <p className="conference-when">Held in July, every other year (odd years — next: July 2028)</p>
            <p className="conference-desc">
              A celebration of the global reach of this ministry — bringing
              together women from Ivory Coast, Cameroon, France, and across
              the African and European diaspora.
            </p>
          </div>
        </div>

        <div className="year-list">
          <div className="year-list-group">
            <h4>2026 Conferences</h4>
            <ul>
              <li>US Conference — August 2026</li>
              <li>Canada Conference — August 2026</li>
            </ul>
          </div>
          <div className="year-list-group">
            <h4>2027 Conferences</h4>
            <ul>
              <li>US Conference — August 2027</li>
              <li>Canada Conference — August 2027</li>
            </ul>
          </div>
        </div>

        <p className="lead" style={{ margin: '0 0 24px' }}>
          Conference dates, locations, registration links, and speakers will
          be posted here as details are confirmed.
        </p>
        <Link className="btn btn-yellow" href="/ministries/women/contact?subject=Conference">
          Get Notified About Upcoming Events
        </Link>
      </main>
    </>
  );
}
