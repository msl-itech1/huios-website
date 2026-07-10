import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/HNW_final2019_03.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-cols">
          <div className="footer-about">
            <Image src={logo} alt="Huios Nation World" height={42} />
            <p>
              Christ died, was buried, and rose again — and everything changed.
              A church family across the United States, Canada, France, Côte
              d&apos;Ivoire, Cameroon and South Africa.
            </p>
          </div>
          <div className="footer-col">
            <p className="footer-heading">Explore</p>
            <div className="footer-links">
              <Link href="/beliefs">What we believe</Link>
              <Link href="/campuses">Campuses &amp; times</Link>
              <Link href="/ministries">Ministries</Link>
              <Link href="/events">Events</Link>
            </div>
          </div>
          <div className="footer-col">
            <p className="footer-heading">Connect</p>
            <div className="footer-links">
              <Link href="/join">Join online</Link>
              <Link href="/give">Give</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div className="footer-col wide">
            <p className="footer-heading">Services (ET)</p>
            <p className="time">Sat 5:20 PM — United States</p>
            <p className="time">Sun 4:00 PM — Canada (online)</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Huios Nation World. All rights reserved.</p>
          <p>
            English · <span className="lang-soon">Français (à venir)</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
