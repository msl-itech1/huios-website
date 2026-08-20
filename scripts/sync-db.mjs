// Runs `prisma db push` during the Vercel build when a Postgres DATABASE_URL
// is configured, so the Neon tables are created/updated automatically on
// deploy. Skips quietly when the database isn't wired up yet, letting the
// site deploy before the Neon integration is added.
import { execSync } from 'node:child_process';

const url = process.env.DATABASE_URL ?? '';

if (url.startsWith('postgres://') || url.startsWith('postgresql://')) {
  console.log('DATABASE_URL found — syncing schema with `prisma db push`…');
  execSync('npx prisma db push --skip-generate --accept-data-loss', {
    stdio: 'inherit',
  });
} else {
  console.log('No Postgres DATABASE_URL — skipping schema sync.');
}
