import type { Metadata } from 'next';
import { Bricolage_Grotesque, Figtree } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE_NAME, SITE_URL } from '@/lib/site';
import './globals.css';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-display',
});

const body = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — A church family across the US, Canada, Africa & Europe`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    'Huios Nation World is a multi-campus church family gathered around one hope: Jesus Christ died, was buried, and rose again. Find a service, join online, and come as you are.',
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: SITE_URL,
    images: ['/assets/HNW_final2019_03.png'],
  },
  twitter: { card: 'summary' },
  icons: { icon: '/assets/HNW_final2019_03.png' },
  alternates: { canonical: './' },
};

const churchJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Church',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/HNW_final2019_03.png`,
  description:
    'A multi-campus church family across the United States, Canada, France, Côte d\'Ivoire, Cameroon and South Africa.',
  areaServed: [
    'United States',
    'Canada',
    'France',
    "Côte d'Ivoire",
    'Cameroon',
    'South Africa',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(churchJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
