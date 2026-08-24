'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/HNW_final2019_03.png';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="site-top">
      <div className="announcement">
        Global Service — Saturday 5:20 PM ET (United States) &nbsp;·&nbsp; Sunday
        4:00 PM ET (Canada, online)
      </div>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" onClick={close}>
            <Image src={logo} alt="Huios Nation World" height={48} priority />
          </Link>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <nav id="site-nav" className={`site-nav${open ? ' open' : ''}`}>
            <Link className="nav-link" href="/beliefs" onClick={close}>What we believe</Link>
            <Link className="nav-link" href="/campuses" onClick={close}>Campuses &amp; times</Link>
            <Link className="nav-link" href="/ministries" onClick={close}>Ministries</Link>
            <Link className="nav-link" href="/events" onClick={close}>Events</Link>
            <Link className="nav-link" href="/give" onClick={close}>Give</Link>
            <Link className="nav-link" href="/contact" onClick={close}>Contact</Link>
            <Link className="nav-cta" href="/join" onClick={close}>Join online</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
