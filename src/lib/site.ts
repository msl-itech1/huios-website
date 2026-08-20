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

export const WOMEN_MINISTRY_URL = 'https://alwayswin.live';

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
