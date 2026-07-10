import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/HNW_final2019_03.png';

export default function Header() {
  return (
    <>
      <div className="announcement">
        Global Service — Saturday 5:20 PM ET (United States) &nbsp;·&nbsp; Sunday
        4:00 PM ET (Canada, online)
      </div>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/">
            <Image src={logo} alt="Huios Nation World" height={48} priority />
          </Link>
          <nav className="site-nav">
            <Link className="nav-link" href="/beliefs">What we believe</Link>
            <Link className="nav-link" href="/campuses">Campuses &amp; times</Link>
            <Link className="nav-link" href="/ministries">Ministries</Link>
            <Link className="nav-link" href="/events">Events</Link>
            <Link className="nav-link" href="/give">Give</Link>
            <Link className="nav-link" href="/contact">Contact</Link>
            <Link className="nav-cta" href="/join">Join online</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
