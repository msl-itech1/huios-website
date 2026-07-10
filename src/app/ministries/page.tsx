import type { Metadata } from 'next';
import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';
import { WOMEN_MINISTRY_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Ministries',
  description:
    "Find your people. Discover the ministries of Huios Nation World, including the Women's Ministry — a vibrant community across all our campuses.",
  alternates: { canonical: '/ministries' },
};

export default function MinistriesPage() {
  return (
    <main className="page-wide">
      <p className="eyebrow">Ministries</p>
      <h1 className="page-title">Find your people.</h1>
      <p className="lead" style={{ maxWidth: '64ch', margin: '0 0 44px' }}>
        Church isn&apos;t something you watch — it&apos;s a family you belong
        to. Our ministries are where that happens.
      </p>

      <div className="featured-ministry">
        <div className="ministry-media">
          <ImageSlot label="Photo — women's ministry, joyful community" radius={20} />
        </div>
        <div className="ministry-copy">
          <p className="pill pill-white">Featured ministry</p>
          <h2>Women&apos;s Ministry</h2>
          <p className="ministry-text">
            A vibrant community of women across all our campuses — praying
            together, learning together, and cheering each other on through
            every season of life. The ministry hosts its own gatherings,
            teachings and the annual <strong>Women&apos;s Conference</strong>.
          </p>
          <p className="ministry-note">
            The Women&apos;s Ministry has its own home online, with everything
            you need to get connected.
          </p>
          <a className="btn btn-dark" href={WOMEN_MINISTRY_URL} target="_blank" rel="noopener">
            Visit the Women&apos;s Ministry site →
          </a>
        </div>
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
