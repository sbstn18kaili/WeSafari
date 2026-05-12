import Link from 'next/link';
import { navLinks, quickLinks } from '@/data/site';

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerBrandBlock">
        <Link className="brand footerBrand" href="/">
          <span className="brandMark">GR</span>
          <span>
            <strong>Great Roar Safaris</strong>
            <small>Private Tanzania safari operator</small>
          </span>
        </Link>
        <p>Headquarters: Arusha, Tanzania • Phone: +255 700 000 000</p>
      </div>
      <div className="footerColumn">
        <h3>Main pages</h3>
        <div className="footerLinks">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </div>
      </div>
      <div className="footerColumn quickLinks">
        <h3>Quick links</h3>
        <div className="footerLinks">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
