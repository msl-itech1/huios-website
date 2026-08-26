import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-copy">
          <p className="hero-badge">A church family on two continents — and growing</p>
          <h1 className="hero-title">
            Wherever you are on the journey, there&apos;s a place for you here.
          </h1>
          <p className="hero-sub">
            Huios Nation World is a family of campuses across the United States,
            Canada, Africa and Europe, gathered around one simple hope:{' '}
            <strong>Jesus Christ died, was buried, and rose again.</strong> You
            don&apos;t need to have it all figured out to belong.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-yellow" href="/campuses">Find a service time</Link>
            <Link className="btn btn-outline" href="/beliefs">What we believe</Link>
          </div>
        </div>
        <div className="hero-media">
          <ImageSlot label="Photo — worship moment, hands raised" radius={24} />
        </div>
      </section>

      {/* Services strip */}
      <section className="services-strip">
        <div className="strip-inner">
          <h2>Join us this weekend</h2>
          <div className="services-grid">
            <div className="service-card">
              <p className="service-region yellow">United States</p>
              <p className="service-time">Saturday · 5:20 PM</p>
              <p className="service-meta spaced">
                Eastern Time (ET) · in person in Silver Spring, MD &amp; on Zoom
              </p>
              <Link className="btn btn-ghost-dark" href="/campuses">
                Address &amp; Zoom details
              </Link>
            </div>
            <div className="service-card">
              <p className="service-region cyan">Canada · online</p>
              <p className="service-time">Sunday · 4:00 PM</p>
              <p className="service-meta spaced">Eastern Time (ET) · in French</p>
              <Link className="btn btn-cyan-sm" href="/join">Request connection details</Link>
            </div>
            <div className="service-card">
              <p className="service-region white">During the week</p>
              <p className="service-time">Mon · Wed · Thu</p>
              <p className="service-meta spaced">Online gatherings in English &amp; French</p>
              <Link className="btn btn-ghost-dark" href="/campuses">See all times</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gospel line */}
      <section className="gospel">
        <p className="eyebrow">The heart of it all</p>
        <h2>Christ died, was buried, and rose again — and everything changed.</h2>
        <p className="gospel-text">
          That&apos;s the whole message. Not a list of rules, not a performance
          to keep up — a gift, received by faith. If you&apos;re searching,
          hurting, or just curious, you&apos;re exactly who this is for.
        </p>
        <Link className="btn-link" href="/beliefs">Read what we believe →</Link>
      </section>

      {/* Five rhythms */}
      <section className="rhythms">
        <div className="rhythms-inner">
          <h2>How we grow together</h2>
          <p className="rhythms-sub">
            Five simple rhythms shape our life as a family — practiced at every
            campus, in every language.
          </p>
          <div className="rhythms-grid">
            <div className="rhythm-card">
              <h3>Prayer</h3>
              <p>Talking with God, honestly and often.</p>
            </div>
            <div className="rhythm-card">
              <h3>Reading</h3>
              <p>Opening the Bible together, a little every day.</p>
            </div>
            <div className="rhythm-card">
              <h3>Meditation</h3>
              <p>Letting what we read settle deep and take root.</p>
            </div>
            <div className="rhythm-card">
              <h3>Fellowship</h3>
              <p>Doing life together — nobody walks alone.</p>
            </div>
            <div className="rhythm-card">
              <h3>Giving</h3>
              <p>Living open-handed, because grace came to us free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries + events preview */}
      <section className="preview">
        <div className="preview-cards">
          <div className="preview-card ice">
            <div className="preview-media">
              <ImageSlot label="Photo — women's ministry gathering" />
            </div>
            <div className="preview-body">
              <h3>Women&apos;s Ministry</h3>
              <p>
                One of the ways to connect and grow at Huios Nation World — a
                community of women learning to stand in who they are in Christ.
              </p>
              <Link className="btn btn-dark" href="/ministries/women">
                Explore the Women&apos;s Ministry
              </Link>
            </div>
          </div>
          <div className="preview-card plain">
            <div className="preview-media">
              <ImageSlot label="Photo — conference or gathering" />
            </div>
            <div className="preview-body">
              <h3>Upcoming events</h3>
              <p>
                The Women&apos;s Conference and the Couples Conference are
                moments we look forward to all year. Come see what&apos;s next.
              </p>
              <Link className="btn btn-yellow-sm" href="/events">See all events</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Invitation band */}
      <section className="invite-band">
        <div className="invite-inner">
          <h2>Come as you are. Really.</h2>
          <p>
            No dress code, no prerequisites, no perfect people. Just a family
            that would love to meet you — in person or online.
          </p>
          <Link className="btn btn-dark-lg" href="/contact">Say hello</Link>
        </div>
      </section>
    </main>
  );
}
