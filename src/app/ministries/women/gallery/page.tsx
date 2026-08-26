import type { Metadata } from 'next';
import MinistrySubnav from '@/components/MinistrySubnav';
import ImageSlot from '@/components/ImageSlot';

export const metadata: Metadata = {
  title: "Gallery — Women's Ministry",
  description:
    "Moments from Huios Nation Women's Ministry conferences, campus events, and community gatherings — from Maryland to Ivory Coast, from Canada to France.",
  alternates: { canonical: '/ministries/women/gallery' },
};

export default function WomensMinistryGalleryPage() {
  return (
    <>
      <MinistrySubnav current="/ministries/women/gallery" />
      <main className="page-wide">
        <p className="eyebrow">Gallery</p>
        <h1 className="page-title">Every gathering tells a story.</h1>
        <p className="lead" style={{ maxWidth: '70ch', margin: '0 0 12px' }}>
          Every face represents a life transformed by the truth of the
          finished work of Christ. Browse through moments from our
          conferences, campus events, and community gatherings — from
          Maryland to Ivory Coast, from Canada to France.
        </p>

        <div className="gallery-grid">
          <div className="gallery-card">
            <div className="gallery-media">
              <ImageSlot label="Photos — US, Canada &amp; Ivory Coast annual conferences" />
            </div>
            <p className="gallery-label">Conferences</p>
          </div>
          <div className="gallery-card">
            <div className="gallery-media">
              <ImageSlot label="Photos — moments from our local communities worldwide" />
            </div>
            <p className="gallery-label">Campus Life</p>
          </div>
          <div className="gallery-card">
            <div className="gallery-media">
              <ImageSlot label="Photos — team, preparation and behind-the-scenes" />
            </div>
            <p className="gallery-label">Behind the Ministry</p>
          </div>
        </div>

        <p className="fine-print centered" style={{ fontStyle: 'italic' }}>
          These are not just photographs. These are testimonies.
        </p>
      </main>
    </>
  );
}
