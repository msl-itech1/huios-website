import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { isAdmin } from '@/lib/admin-session';
import { EVENTS, isEventSlug } from '@/lib/site';
import { logout } from './actions';

export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false },
};

export const dynamic = 'force-dynamic';

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'America/New_York',
  }).format(date);
}

function formatAmount(cents: number, currency: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(cents / 100);
}

export default async function AdminPage() {
  if (!(await isAdmin())) redirect('/admin/login');

  const [registrations, joinRequests, contacts, ministryContacts, donations] = await Promise.all([
    prisma.eventRegistration.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.joinRequest.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.ministryContactMessage.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.donation.findMany({ orderBy: { createdAt: 'desc' } }),
  ]);

  const donationTotal = donations
    .filter((d) => d.status === 'completed')
    .reduce((sum, d) => sum + d.amount, 0);

  return (
    <main className="page-wide admin">
      <div className="admin-head">
        <div>
          <p className="eyebrow">Admin</p>
          <h1 className="page-title" style={{ fontSize: 'clamp(28px,4vw,40px)', marginBottom: 0 }}>
            Dashboard
          </h1>
        </div>
        <form action={logout}>
          <button className="btn btn-outline" type="submit" style={{ fontSize: '14px', padding: '10px 20px' }}>
            Sign out
          </button>
        </form>
      </div>

      <div className="admin-stats">
        <div className="admin-stat">
          <p className="stat-value">{registrations.length}</p>
          <p className="stat-label">Event registrations</p>
        </div>
        <div className="admin-stat">
          <p className="stat-value">{joinRequests.length}</p>
          <p className="stat-label">Join requests</p>
        </div>
        <div className="admin-stat">
          <p className="stat-value">{contacts.length}</p>
          <p className="stat-label">Messages</p>
        </div>
        <div className="admin-stat">
          <p className="stat-value">{ministryContacts.length}</p>
          <p className="stat-label">Ministry messages</p>
        </div>
        <div className="admin-stat">
          <p className="stat-value">{formatAmount(donationTotal, 'usd')}</p>
          <p className="stat-label">Donations ({donations.length})</p>
        </div>
      </div>

      <section className="admin-section">
        <h2 className="section-title">Event registrations</h2>
        {registrations.length === 0 ? (
          <p className="fine-print">No registrations yet.</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr><th>Event</th><th>Names</th><th>Email</th><th>Campus</th><th>Date</th></tr>
              </thead>
              <tbody>
                {registrations.map((r) => (
                  <tr key={r.id}>
                    <td>{isEventSlug(r.event) ? EVENTS[r.event].name : r.event}</td>
                    <td>{r.names}</td>
                    <td><a href={`mailto:${r.email}`}>{r.email}</a></td>
                    <td>{r.campus ?? '—'}</td>
                    <td>{formatDate(r.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="admin-section">
        <h2 className="section-title">Join requests</h2>
        {joinRequests.length === 0 ? (
          <p className="fine-print">No join requests yet.</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr><th>Name</th><th>Email</th><th>Phone</th><th>Gathering</th><th>Heard via</th><th>Date</th></tr>
              </thead>
              <tbody>
                {joinRequests.map((r) => (
                  <tr key={r.id}>
                    <td>{r.name}</td>
                    <td><a href={`mailto:${r.email}`}>{r.email}</a></td>
                    <td>{r.phone ?? '—'}</td>
                    <td>{r.service ?? '—'}</td>
                    <td>{r.source ?? '—'}</td>
                    <td>{formatDate(r.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="admin-section">
        <h2 className="section-title">Contact messages</h2>
        {contacts.length === 0 ? (
          <p className="fine-print">No messages yet.</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr><th>Name</th><th>Email</th><th>Message</th><th>Date</th></tr>
              </thead>
              <tbody>
                {contacts.map((m) => (
                  <tr key={m.id}>
                    <td>{m.name}</td>
                    <td><a href={`mailto:${m.email}`}>{m.email}</a></td>
                    <td className="message-cell">{m.message}</td>
                    <td>{formatDate(m.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="admin-section">
        <h2 className="section-title">Ministry messages</h2>
        {ministryContacts.length === 0 ? (
          <p className="fine-print">No ministry messages yet.</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr><th>Ministry</th><th>Name</th><th>Email</th><th>Location</th><th>Subject</th><th>Message</th><th>Date</th></tr>
              </thead>
              <tbody>
                {ministryContacts.map((m) => (
                  <tr key={m.id}>
                    <td style={{ textTransform: 'capitalize' }}>{m.ministry}</td>
                    <td>{m.name}</td>
                    <td><a href={`mailto:${m.email}`}>{m.email}</a></td>
                    <td>{m.location ?? '—'}</td>
                    <td>{m.subject ?? '—'}</td>
                    <td className="message-cell">{m.message}</td>
                    <td>{formatDate(m.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="admin-section">
        <h2 className="section-title">Donations</h2>
        {donations.length === 0 ? (
          <p className="fine-print">
            No donations recorded yet. Card gifts appear here automatically via
            the Stripe webhook.
          </p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr><th>Amount</th><th>Frequency</th><th>Donor</th><th>Email</th><th>Method</th><th>Status</th><th>Date</th></tr>
              </thead>
              <tbody>
                {donations.map((d) => (
                  <tr key={d.id}>
                    <td>{formatAmount(d.amount, d.currency)}</td>
                    <td>{d.interval === 'monthly' ? 'Monthly' : 'One time'}</td>
                    <td>{d.donorName ?? '—'}</td>
                    <td>{d.donorEmail ? <a href={`mailto:${d.donorEmail}`}>{d.donorEmail}</a> : '—'}</td>
                    <td>{d.method}</td>
                    <td>{d.status}</td>
                    <td>{formatDate(d.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
