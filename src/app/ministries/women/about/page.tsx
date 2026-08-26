import type { Metadata } from 'next';
import MinistrySubnav from '@/components/MinistrySubnav';

export const metadata: Metadata = {
  title: "About — Women's Ministry",
  description:
    "Huios Nation Women's Ministry is the women's expression of Huios Nation World Ministry — a global, Christocentric ministry committed to one Gospel, one message, and one Savior: Jesus Christ.",
  alternates: { canonical: '/ministries/women/about' },
};

export default function WomensMinistryAboutPage() {
  return (
    <>
      <MinistrySubnav current="/ministries/women/about" />
      <main className="page-narrow">
        <p className="eyebrow">About Us</p>
        <h1 className="page-title">One Gospel. One Savior.</h1>
        <p className="lead" style={{ margin: '0 0 40px' }}>
          Huios Nation Women&apos;s Ministry is the women&apos;s expression of
          Huios Nation World Ministry — a global, Christocentric ministry
          committed to one Gospel, one message, and one Savior: Jesus Christ.
        </p>

        <h2 className="section-title">Who We Are</h2>
        <p className="lead" style={{ margin: '0 0 14px' }}>
          We are a community of women across nations and cultures who have
          been transformed by the truth of God&apos;s Word. Our foundation is
          simple and unshakeable: Jesus Christ has finished the work.
          Everything we teach, every conference we host, and every
          conversation we cultivate flows from that reality.
        </p>
        <p className="lead" style={{ margin: '0 0 40px', fontWeight: 700, color: '#111' }}>
          We do not add to the cross. We live from all it has made available to us.
        </p>

        <h2 id="doctrine" className="section-title">Our Doctrine</h2>
        <p className="lead" style={{ margin: '0 0 4px' }}>
          Our ministry is Christocentric in every dimension. We believe:
        </p>
        <ul className="doctrine-list">
          <li>Salvation comes through faith in Jesus Christ alone.</li>
          <li>The Word of God has one unified message — redemption through Christ.</li>
          <li>Once born again, a believer must be established in their identity, inheritance, position, and lifestyle in Christ.</li>
          <li>Growth is not achieved through striving — it is received through sound doctrinal teaching.</li>
        </ul>

        <h2 className="section-title" style={{ marginTop: '40px' }}>Our Global Reach</h2>
        <p className="lead" style={{ margin: '0 0 40px' }}>
          Huios Nation World Ministry is headquartered in Maryland, with
          campuses in California, Massachusetts, Ohio, Canada, Cameroon,
          Ivory Coast, and France — and we continue to expand. Our women&apos;s
          ministry is active across these locations, connecting women locally
          and globally through shared truth.
        </p>

        <h2 className="section-title">Our Leadership</h2>
        <div className="serve-card" style={{ marginBottom: '40px' }}>
          <p style={{ margin: 0, fontSize: '15.5px', color: 'var(--muted)' }}>
            Names, photos and bios for our women&apos;s ministry leadership
            team are coming soon.
          </p>
        </div>

        <h2 className="section-title">Our Vision</h2>
        <p className="lead">
          A generation of women who know who they are in Christ — and live like it.
        </p>
      </main>
    </>
  );
}
