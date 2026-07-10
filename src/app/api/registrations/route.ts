import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { isEventSlug } from '@/lib/site';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const event = typeof body?.event === 'string' ? body.event.trim() : '';
  const names = typeof body?.names === 'string' ? body.names.trim() : '';
  const email = typeof body?.email === 'string' ? body.email.trim() : '';
  const campus = typeof body?.campus === 'string' ? body.campus.trim() : '';

  if (!isEventSlug(event)) {
    return NextResponse.json({ error: 'Unknown event.' }, { status: 400 });
  }
  if (!names || names.length > 200) {
    return NextResponse.json({ error: 'Please enter your names.' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > 320) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  await prisma.eventRegistration.create({
    data: { event, names, email, campus: campus || null },
  });

  return NextResponse.json({ ok: true }, { status: 201 });
}
