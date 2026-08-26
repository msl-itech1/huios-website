import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const KNOWN_MINISTRIES = new Set(['women']);

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const ministry = typeof body?.ministry === 'string' ? body.ministry.trim() : '';
  const name = typeof body?.name === 'string' ? body.name.trim() : '';
  const email = typeof body?.email === 'string' ? body.email.trim() : '';
  const location = typeof body?.location === 'string' ? body.location.trim() : '';
  const subject = typeof body?.subject === 'string' ? body.subject.trim() : '';
  const message = typeof body?.message === 'string' ? body.message.trim() : '';

  if (!KNOWN_MINISTRIES.has(ministry)) {
    return NextResponse.json({ error: 'Unknown ministry.' }, { status: 400 });
  }
  if (!name || name.length > 200) {
    return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > 320) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (!message || message.length > 5000) {
    return NextResponse.json({ error: 'Please write a message (max 5000 characters).' }, { status: 400 });
  }

  await prisma.ministryContactMessage.create({
    data: {
      ministry,
      name,
      email,
      location: location || null,
      subject: subject || null,
      message,
    },
  });

  return NextResponse.json({ ok: true }, { status: 201 });
}
