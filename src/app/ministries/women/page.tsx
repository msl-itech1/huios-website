import type { Metadata } from 'next';
import Link from 'next/link';
import MinistrySubnav from '@/components/MinistrySubnav';
import ImageSlot from '@/components/ImageSlot';

export const metadata: Metadata = {
  title: "Women's Ministry",
  description:
    'You were made for more. Discover who you are, what you carry, and where you stand — in Christ, with Huios Nation Women\'s Ministry.',
  alternates: { canonical: '/ministries/women' },
};

export default function WomensMinistryHomePage() {
  return (
    <>
      <MinistrySubnav current="/ministries/women" />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="hero-badge">Huios Nation Women&apos;s Ministry</p>
            <h1 className="hero-title">You Were Made for More.</h1>
            <p className="hero-sub">
              Discover who you are, what you carry, and where you stand — in Christ.
            </p>
            <p className="lead" style={{ margin: '0 0 30px', maxWidth: '54ch' }}>
              Welcome to Huios Nation Women&apos;s Ministry. This is a place where
              women come to encounter truth — not religion, not performance, but
              the finished work of Jesus Christ. Here, we don&apos;t teach you to
              strive. We teach you to stand in what has already been done.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-yellow" href="/ministries/women/events">Upcoming Events</Link>
              <Link className="btn btn-outline" href="/ministries/women/about#doctrine">Our Confession of Faith</Link>
            </div>
          </div>
          <div className="hero-media">
            <ImageSlot label="Photo — women's ministry, worship or fellowship" radius={24} />
          </div>
        </section>

        <section className="page-wide" style={{ paddingTop: 0 }}>
          <h2 className="section-title">Our Heartbeat</h2>
          <p className="lead" style={{ maxWidth: '70ch' }}>
            We believe the Bible has one message and one character: salvation
            through faith in Jesus Christ. As women who are born again, we are
            on a journey of growing into who we already are. Our teaching is
            rooted in four anchoring truths:
          </p>
          <div className="anchor-grid">
            <div className="anchor-card">
              <p className="anchor-label">Who I Am</p>
              <p className="anchor-text">My identity as a new creation in Christ.</p>
            </div>
            <div className="anchor-card">
              <p className="anchor-label">What I Have</p>
              <p className="anchor-text">The inheritance that belongs to me by grace.</p>
            </div>
            <div className="anchor-card">
              <p className="anchor-label">Where I Stand</p>
              <p className="anchor-text">My position in Christ, seated in heavenly places.</p>
            </div>
            <div className="anchor-card">
              <p className="anchor-label">How I Live</p>
              <p className="anchor-text">Walking out this reality as a spirit being in this world.</p>
            </div>
          </div>
        </section>

        <section className="gospel">
          <p className="eyebrow">Join Us</p>
          <h2>Come as you are. Leave knowing who you are.</h2>
          <p className="gospel-text">
            Whether you are in Maryland, California, Massachusetts, Canada,
            Ivory Coast, France, or anywhere in the world — there is a place
            for you here.
          </p>
          <div className="location-tags" style={{ justifyContent: 'center' }}>
            <span>Maryland</span>
            <span>California</span>
            <span>Massachusetts</span>
            <span>Canada</span>
            <span>Ivory Coast</span>
            <span>France</span>
          </div>
        </section>
      </main>
    </>
  );
}
