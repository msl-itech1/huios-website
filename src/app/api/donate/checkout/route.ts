import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { SITE_URL } from '@/lib/site';

// Creates a Stripe Checkout session for a one-time or monthly card donation.
// Requires STRIPE_SECRET_KEY; the give page hides the card option without it.
export async function POST(request: Request) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    return NextResponse.json({ error: 'Card giving is not available yet.' }, { status: 503 });
  }

  const body = await request.json().catch(() => null);
  const amount = Number(body?.amount);
  const interval = body?.interval === 'monthly' ? 'monthly' : 'one_time';

  if (!Number.isInteger(amount) || amount < 1 || amount > 100000) {
    return NextResponse.json(
      { error: 'Please enter an amount between $1 and $100,000.' },
      { status: 400 },
    );
  }

  const stripe = new Stripe(key);
  const amountCents = amount * 100;

  const session = await stripe.checkout.sessions.create({
    mode: interval === 'monthly' ? 'subscription' : 'payment',
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: 'usd',
          unit_amount: amountCents,
          product_data: { name: 'Donation — Huios Nation World' },
          ...(interval === 'monthly' ? { recurring: { interval: 'month' as const } } : {}),
        },
      },
    ],
    metadata: { interval },
    success_url: `${SITE_URL}/give/thank-you`,
    cancel_url: `${SITE_URL}/give`,
  });

  return NextResponse.json({ url: session.url });
}
