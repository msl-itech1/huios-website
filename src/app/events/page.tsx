import type { Metadata } from 'next';
import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';
import EventRegistrationForm from '@/components/EventRegistrationForm';
import { SITE_URL, WOMEN_MINISTRY_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Events',
  description:
    "Moments we share. Upcoming Huios Nation World events, including the Women's Conference and the Couples Conference.",
  alternates: { canonical: '/events' },
};

const eventsJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Event',
      name: "Women's Conference",
      description:
        'A weekend for women from every campus to gather, worship, and be refreshed.',
      organizer: { '@type': 'Organization', name: "Huios Nation World Women's Ministry", url: WOMEN_MINISTRY_URL },
      eventStatus: 'https://schema.org/EventScheduled',
      url: `${SITE_URL}/events`,
    },
    {
      '@type': 'Event',
      name: 'Couples Conference',
      description:
        'Two days to invest in your marriage — honest teaching, real conversations, and time together.',
      organizer: { '@type': 'Organization', name: 'Huios Nation World', url: SITE_URL },
      eventStatus: 'https://schema.org/EventScheduled',
      url: `${SITE_URL}/events`,
    },
  ],
};

export default function EventsPage() {
  return (
    <main className="page-wide">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
      />
      <p className="eyebrow">Events</p>
      <h1 className="page-title">Moments we share.</h1>
      <p className="lead" style={{ maxWidth: '64ch', margin: '0 0 44px' }}>
        A few times a year, the whole family gathers for something special.
        Here&apos;s what&apos;s coming up.
      </p>

      <div className="events-grid">
        {/* Women's Conference */}
        <div className="event-card plain">
          <div className="event-media">
            <ImageSlot label="Photo — Women's Conference" />
          </div>
          <div className="event-body">
            <p className="pill pill-ice">Hosted by the Women&apos;s Ministry</p>
            <h2>Women&apos;s Conference</h2>
            <p className="event-date">Date to be announced</p>
            <p className="event-desc">
              A weekend for women from every campus to gather, worship, and be
              refreshed. Registration and full details live on the Women&apos;s
              Ministry site.
            </p>
            <a className="btn btn-dark" href={WOMEN_MINISTRY_URL} target="_blank" rel="noopener">
              Details &amp; registration →
            </a>
          </div>
        </div>

        {/* Couples Conference */}
        <div className="event-card cream">
          <div className="event-media">
            <ImageSlot label="Photo — Couples Conference" />
          </div>
          <div className="event-body">
            <p className="pill pill-yellow">Hosted by Huios Nation World</p>
            <h2>Couples Conference</h2>
            <p className="event-date">Date &amp; location to be announced</p>
            <p className="event-desc">
              Two days to invest in your marriage — honest teaching, real
              conversations, and time together. Open to every couple, married
              or engaged.
            </p>
            <EventRegistrationForm event="couples-conference" />
          </div>
        </div>
      </div>

      <p className="fine-print centered">
        More events are added throughout the year — check back, or{' '}
        <Link href="/contact">ask us</Link> what&apos;s coming.
      </p>
    </main>
  );
}
