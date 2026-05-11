import Link from 'next/link';
import { navLinks } from '@/data/site';

export default function Header() {
  return (
    <header className="site-nav">
      <Link className="brand" href="/" aria-label="Great Roar Safaris home">
        <span className="brandMark">GR</span>
        <span>
          <strong>Great Roar Safaris</strong>
          <small>Arusha, Tanzania</small>
        </span>
      </Link>
      <nav aria-label="Primary navigation" className="navLinks">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        <Link className="navCta" href="/contact">
          Plan my trip
        </Link>
      </nav>
    </header>
  );
}
