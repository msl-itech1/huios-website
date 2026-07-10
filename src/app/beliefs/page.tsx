import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What we believe',
  description:
    'Good news, in plain words. What Huios Nation World believes: Jesus Christ died, was buried, and rose again — salvation is a gift, received by faith.',
  alternates: { canonical: '/beliefs' },
};

const beliefs = [
  {
    num: '01',
    title: 'Jesus Christ died, was buried, and rose again.',
    text: (
      <>
        This is the foundation of everything we believe and teach — the good
        news at the center of the Bible <em>(1 Corinthians 15:3–4)</em>. Because
        He is risen, hope is real.
      </>
    ),
  },
  {
    num: '02',
    title: 'Salvation is a gift, not a paycheck.',
    text: "We are saved by grace, through faith in Jesus Christ alone — not by being good enough, doing enough, or knowing enough. You can't earn it; you can only receive it.",
  },
  {
    num: '03',
    title: 'You are invited, not evaluated.',
    text: "God's posture toward you is open arms. Whatever your story, wherever you've been — the invitation stands. Ours does too.",
  },
  {
    num: '04',
    title: 'The Bible is our foundation.',
    text: 'We read it, teach it, and let it shape how we live — not as a rulebook to fear, but as the story of a God who keeps His promises.',
  },
  {
    num: '05',
    title: 'We grow together, never alone.',
    text: 'Five rhythms carry our life as a family: prayer, reading, meditation, fellowship, and giving. Simple practices, shared across every campus and language.',
  },
];

export default function BeliefsPage() {
  return (
    <main className="page-narrow">
      <p className="eyebrow">What we believe</p>
      <h1 className="page-title">Good news, in plain words.</h1>
      <p className="lead" style={{ fontSize: '17.5px', margin: '0 0 44px' }}>
        You won&apos;t find dense theology here — just the heart of what holds
        us together. If you have questions about any of it, we&apos;d genuinely
        love to talk.
      </p>

      <div className="beliefs-list">
        {beliefs.map((belief, i) => (
          <div key={belief.num} className={`belief-card ${i % 2 === 0 ? 'cream' : 'ice'}`}>
            <p className="belief-num">{belief.num}</p>
            <h2>{belief.title}</h2>
            <p>{belief.text}</p>
          </div>
        ))}
      </div>

      <div className="dark-cta">
        <h2>Curious? Come and see.</h2>
        <p>The best way to understand is to experience it with us.</p>
        <Link className="btn btn-yellow-sm" href="/campuses">Find a service time</Link>
      </div>
    </main>
  );
}
