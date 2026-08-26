// Env vars may exist with an empty value (e.g. created blank in the Vercel
// dashboard) — treat those as unset.
function envOrUndefined(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

export const SITE_URL =
  envOrUndefined('NEXT_PUBLIC_SITE_URL') ??
  (envOrUndefined('VERCEL_PROJECT_PRODUCTION_URL')
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://huiosnationworld.org');

export const SITE_NAME = 'Huios Nation World';

// Ministries listed on /ministries. Only "women" has its own pages so far —
// the rest render as "coming soon" cards until their content arrives.
export const MINISTRIES = [
  {
    slug: 'women',
    name: "Women's Ministry",
    tagline: 'You were made for more.',
    description:
      'A global community of women anchored in who they are, what they have, and where they stand — in Christ.',
    live: true,
  },
  {
    slug: 'youth',
    name: 'Youth & Children Ministry',
    tagline: 'Raising up the next generation.',
    description: 'For our youngest campus members and the students growing up in our family.',
    live: false,
  },
  {
    slug: 'couples',
    name: "Couples Ministry",
    tagline: 'Investing in marriage, together.',
    description: 'Honest teaching and community for every couple, married or engaged.',
    live: false,
  },
  {
    slug: 'men',
    name: "Men's Ministry",
    tagline: 'Standing strong, together.',
    description: 'A community of men growing in their identity and calling in Christ.',
    live: false,
  },
] as const;

// Sub-navigation for the Women's Ministry section (src/app/ministries/women/**)
export const WOMENS_MINISTRY_NAV = [
  { href: '/ministries/women', label: 'Home' },
  { href: '/ministries/women/about', label: 'About' },
  { href: '/ministries/women/community', label: 'Community' },
  { href: '/ministries/women/events', label: 'Events' },
  { href: '/ministries/women/gallery', label: 'Gallery' },
  { href: '/ministries/women/blog', label: 'Blog' },
  { href: '/ministries/women/salvation', label: 'Salvation' },
  { href: '/ministries/women/contact', label: 'Contact' },
] as const;

export const PAYPAL_DONATE_URL =
  envOrUndefined('NEXT_PUBLIC_PAYPAL_DONATE_URL') ??
  'https://www.paypal.com/donate';

// Events open for registration. The slug is what the registration API accepts.
export const EVENTS = {
  'couples-conference': {
    name: 'Couples Conference',
    description:
      'Two days to invest in your marriage — honest teaching, real conversations, and time together. Open to every couple, married or engaged.',
  },
} as const;

export type EventSlug = keyof typeof EVENTS;

export function isEventSlug(value: string): value is EventSlug {
  return value in EVENTS;
}
