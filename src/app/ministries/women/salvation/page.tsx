import type { Metadata } from 'next';
import Link from 'next/link';
import MinistrySubnav from '@/components/MinistrySubnav';

export const metadata: Metadata = {
  title: "Salvation — Women's Ministry",
  description:
    'Before anything else, there is one thing that matters most: Do you know Jesus Christ? Discover what it means to be born again.',
  alternates: { canonical: '/ministries/women/salvation' },
};

export default function WomensMinistrySalvationPage() {
  return (
    <>
      <MinistrySubnav current="/ministries/women/salvation" />
      <main className="page-narrow">
        <p className="eyebrow">Salvation</p>
        <h1 className="page-title">The most important page on this site.</h1>
        <p className="lead" style={{ margin: '0 0 40px' }}>
          Before anything else — before community, before conferences, before
          any teaching — there is one thing that matters most:{' '}
          <strong>Do you know Jesus Christ?</strong>
        </p>

        <h2 className="section-title">The Message</h2>
        <p className="lead" style={{ margin: '0 0 14px' }}>
          The Bible is not a collection of stories. It is one story. And it
          has one message: God loves you, and He made a way for you to be
          reconciled to Him — through the death and resurrection of His Son,
          Jesus Christ.
        </p>
        <p className="lead" style={{ margin: '0 0 14px' }}>
          You were not created to strive for acceptance. You were created to
          receive it. Jesus Christ took your sin, your shame, your separation
          from God — and in exchange, He gave you His righteousness, His
          life, and His identity as a child of God.
        </p>
        <p className="lead" style={{ margin: '0 0 40px', fontWeight: 700, color: '#111' }}>
          This is not religion. This is relationship.
        </p>

        <h2 className="section-title">What It Means to Be Born Again</h2>
        <p className="lead" style={{ margin: '0 0 40px' }}>
          To be born again means to receive Jesus Christ as your Lord and
          Savior — to believe in your heart that God raised Him from the
          dead, and to confess Him with your mouth. In that moment, you are
          not improved. You are made entirely new. Old things pass away. All
          things become new. <em>(Romans 10:9 &amp; 2 Corinthians 5:17)</em>
        </p>

        <h2 className="section-title">A Simple Prayer of Faith</h2>
        <p className="lead" style={{ margin: '0 0 4px' }}>
          If you are ready to receive Jesus Christ as your Lord and Savior,
          you can pray this prayer right now:
        </p>
        <div className="prayer-box">
          <p>
            &ldquo;Father, I come to You today. I believe that Jesus Christ is
            Your Son. I believe He died for my sins and that You raised Him
            from the dead. I confess Jesus as my Lord and Savior. I receive
            Your forgiveness, Your life, and Your Spirit right now. I am born
            again. I am a new creation. Thank You, Father. In Jesus&apos;
            name, Amen.&rdquo;
          </p>
        </div>

        <h2 className="section-title">What Happens Next</h2>
        <p className="lead" style={{ margin: '0 0 24px' }}>
          If you just prayed that prayer — welcome to the family. You are now
          a new creation in Christ. We would love to walk with you in this
          next step. Please reach out to us so we can connect you with a
          campus or community near you.
        </p>
        <Link className="btn btn-yellow" href="/ministries/women/contact?subject=Salvation">
          I Just Prayed This Prayer — Contact Us
        </Link>
      </main>
    </>
  );
}
