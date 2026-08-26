import type { Metadata } from 'next';
import Link from 'next/link';
import { MINISTRIES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Ministries',
  description:
    "Find your people. Discover the ministries of Huios Nation World, including the Women's Ministry — a vibrant, global community.",
  alternates: { canonical: '/ministries' },
};

export default function MinistriesPage() {
  return (
    <main className="page-wide">
      <p className="eyebrow">Ministries</p>
      <h1 className="page-title">Find your people.</h1>
      <p className="lead" style={{ maxWidth: '64ch', margin: '0 0 44px' }}>
        Church isn&apos;t something you watch — it&apos;s a family you belong
        to. These are some of the ways we connect and grow together.
      </p>

      <div className="ministries-grid">
        {MINISTRIES.map((ministry) => (
          <div key={ministry.slug} className={`ministry-card ${ministry.live ? 'live' : 'soon'}`}>
            <p className="ministry-card-badge">{ministry.live ? 'Active' : 'Coming soon'}</p>
            <h2>{ministry.name}</h2>
            <p className="ministry-tagline">{ministry.tagline}</p>
            <p className="ministry-desc">{ministry.description}</p>
            {ministry.live && (
              <Link className="btn btn-dark" href={`/ministries/${ministry.slug}`}>
                Explore {ministry.name} →
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="serve-card">
        <h2>Looking for a way to serve or connect?</h2>
        <p>
          More ministries are taking shape across our campuses. Tell us
          what&apos;s on your heart — we&apos;ll help you find your place.
        </p>
        <Link className="btn btn-yellow-sm" href="/contact">Get in touch</Link>
      </div>
    </main>
  );
}
