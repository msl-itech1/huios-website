import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { prisma } from '@/lib/prisma';

// Records completed Checkout donations so they appear in the admin dashboard.
// Configure the endpoint in the Stripe dashboard: <site>/api/webhooks/stripe,
// event `checkout.session.completed`, and set STRIPE_WEBHOOK_SECRET.
export async function POST(request: Request) {
  const key = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!key || !webhookSecret) {
    return NextResponse.json({ error: 'Webhook not configured.' }, { status: 503 });
  }

  const stripe = new Stripe(key);
  const signature = request.headers.get('stripe-signature');
  const payload = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature ?? '', webhookSecret);
  } catch {
    return NextResponse.json({ error: 'Invalid signature.' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    await prisma.donation.upsert({
      where: { stripeSessionId: session.id },
      update: {},
      create: {
        stripeSessionId: session.id,
        amount: session.amount_total ?? 0,
        currency: session.currency ?? 'usd',
        interval: session.metadata?.interval === 'monthly' ? 'monthly' : 'one_time',
        donorName: session.customer_details?.name ?? null,
        donorEmail: session.customer_details?.email ?? null,
        method: 'card',
        status: 'completed',
      },
    });
  }

  return NextResponse.json({ received: true });
}
