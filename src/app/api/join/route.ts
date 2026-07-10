import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === 'string' ? body.name.trim() : '';
  const email = typeof body?.email === 'string' ? body.email.trim() : '';
  const phone = typeof body?.phone === 'string' ? body.phone.trim() : '';
  const service = typeof body?.service === 'string' ? body.service.trim() : '';
  const source = typeof body?.source === 'string' ? body.source.trim() : '';

  if (!name || name.length > 200) {
    return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > 320) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  await prisma.joinRequest.create({
    data: {
      name,
      email,
      phone: phone || null,
      service: service || null,
      source: source || null,
    },
  });

  return NextResponse.json({ ok: true }, { status: 201 });
}
