import type { Metadata } from 'next';
import Link from 'next/link';
import MinistrySubnav from '@/components/MinistrySubnav';

export const metadata: Metadata = {
  title: "Community — Women's Ministry",
  description:
    "You were never meant to walk this journey alone. Find in-person and online community with Huios Nation Women's Ministry.",
  alternates: { canonical: '/ministries/women/community' },
};

export default function WomensMinistryCommunityPage() {
  return (
    <>
      <MinistrySubnav current="/ministries/women/community" />
      <main className="page-narrow">
        <p className="eyebrow">Community</p>
        <h1 className="page-title">You were never meant to walk this journey alone.</h1>
        <p className="lead" style={{ margin: '0 0 40px' }}>
          At Huios Nation Women&apos;s Ministry, community is not a program —
          it is a conviction. We are better together, and we are stronger
          when we are rooted in the same truth.
        </p>

        <h2 className="section-title">In-Person Community</h2>
        <p className="lead" style={{ margin: '0 0 20px' }}>
          Our campuses across Maryland, California, Massachusetts, Ohio,
          Canada, Cameroon, Ivory Coast, and France host women&apos;s
          gatherings, Bible study sessions, and fellowship events throughout
          the year. Find your nearest campus and plug in with women who are
          growing in the same truth you are.
        </p>
        <Link className="btn btn-outline" href="/campuses" style={{ marginBottom: '40px' }}>
          Find a Campus Near You
        </Link>

        <h2 className="section-title" style={{ marginTop: '48px' }}>Online Community</h2>
        <p className="lead" style={{ margin: '0 0 4px' }}>
          No matter where you are in the world, you belong here. Our online
          community gives you access to:
        </p>
        <ul className="doctrine-list">
          <li>Live and recorded teaching sessions</li>
          <li>Devotional discussions and study groups</li>
          <li>Prayer and encouragement spaces</li>
          <li>Connection with women from across our global campuses</li>
        </ul>
        <div style={{ marginTop: '20px', marginBottom: '48px' }}>
          <Link className="btn btn-outline" href="/join">Join Our Online Community</Link>
        </div>

        <h2 className="section-title">Why Community Matters</h2>
        <p className="lead">
          Iron sharpens iron. As one woman grows in her identity in Christ,
          she becomes a mirror for the woman next to her. We gather not out
          of obligation, but out of the overflow of what God has placed in
          each of us. Come find your people.
        </p>
      </main>
    </>
  );
}
