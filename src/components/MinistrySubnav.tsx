import Link from 'next/link';
import { WOMENS_MINISTRY_NAV } from '@/lib/site';

export default function MinistrySubnav({ current }: { current: string }) {
  return (
    <nav className="ministry-subnav" aria-label="Women's Ministry section">
      <div className="ministry-subnav-inner">
        {WOMENS_MINISTRY_NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`ministry-subnav-link${item.href === current ? ' active' : ''}`}
            aria-current={item.href === current ? 'page' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
