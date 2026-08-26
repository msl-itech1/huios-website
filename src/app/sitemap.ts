import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/beliefs',
    '/campuses',
    '/ministries',
    '/ministries/women',
    '/ministries/women/about',
    '/ministries/women/community',
    '/ministries/women/events',
    '/ministries/women/gallery',
    '/ministries/women/blog',
    '/ministries/women/salvation',
    '/ministries/women/contact',
    '/events',
    '/give',
    '/join',
    '/contact',
  ];
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/events' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
