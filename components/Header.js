import Link from 'next/link';
import { destinations, navLinks } from '@/data/site';

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
          link.href === '/destinations' ? (
            <div className="navDropdown" key={link.href}>
              <Link className="dropdownTrigger" href={link.href}>
                {link.label}
              </Link>
              <div className="dropdownMenu" aria-label="Destination pages">
                {destinations.map((destination) => (
                  <Link key={destination.slug} href={`/destinations/${destination.slug}`}>
                    {destination.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          )
        ))}
        <Link className="navCta" href="/contact">
          Plan my trip
        </Link>
      </nav>
    </header>
  );
}
