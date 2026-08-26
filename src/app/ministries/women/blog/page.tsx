import type { Metadata } from 'next';
import MinistrySubnav from '@/components/MinistrySubnav';

export const metadata: Metadata = {
  title: "Blog — Women's Ministry",
  description:
    "Teaching, reflection and practical truth from Huios Nation Women's Ministry — all anchored in who you are in Christ.",
  alternates: { canonical: '/ministries/women/blog' },
};

const categories = [
  { title: 'Identity & Truth', text: 'Deep dives into what the Word says about who you are.' },
  { title: 'Devotionals', text: 'Short, rich reflections for your daily walk.' },
  { title: 'Conference Recaps', text: 'Key messages and takeaways from our annual gatherings.' },
  { title: "Women's Stories", text: 'Real testimonies from women in our community.' },
  { title: 'Ministry News', text: 'Updates from our campuses and global outreach.' },
];

export default function WomensMinistryBlogPage() {
  return (
    <>
      <MinistrySubnav current="/ministries/women/blog" />
      <main className="page-wide">
        <p className="eyebrow">Blog</p>
        <h1 className="page-title">Words carry weight.</h1>
        <p className="lead" style={{ maxWidth: '70ch', margin: '0 0 12px' }}>
          The right word at the right time can shift how you see yourself,
          how you see God, and how you walk through your day. Our blog is a
          space for teaching, reflection, and practical truth — all anchored
          in who you are in Christ.
        </p>

        <h2 className="section-title" style={{ marginTop: '32px' }}>What You&apos;ll Find Here</h2>
        <div className="blog-grid">
          {categories.map((c) => (
            <div className="blog-card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>

        <p className="fine-print centered" style={{ marginTop: '32px' }}>
          Our first posts are coming soon — check back soon, or follow us on
          TikTok and YouTube (links coming soon).
        </p>
      </main>
    </>
  );
}
