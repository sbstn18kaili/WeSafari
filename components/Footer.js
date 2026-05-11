import Link from 'next/link';
import { navLinks, quickLinks } from '@/data/site';

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div>
        <Link className="brand footerBrand" href="/">
          <span className="brandMark">GR</span>
          <span>
            <strong>Great Roar Safaris</strong>
            <small>Private Tanzania safari operator</small>
          </span>
        </Link>
        <p>Headquarters: Arusha, Tanzania • Phone: +255 700 000 000</p>
      </div>
      <div className="footerLinks">
        <Link href="/safaris">Safari packages</Link>
        <Link href="/destinations">Destinations</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
}
