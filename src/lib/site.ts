export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://huiosnationworld.org';

export const SITE_NAME = 'Huios Nation World';

export const WOMEN_MINISTRY_URL = 'https://alwayswin.live';

export const PAYPAL_DONATE_URL =
  process.env.NEXT_PUBLIC_PAYPAL_DONATE_URL ?? 'https://www.paypal.com/donate';

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
