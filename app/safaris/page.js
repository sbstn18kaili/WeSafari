import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SafariCard from '@/components/SafariCard';
import { safariPackages } from '@/data/site';

export const metadata = {
  title: 'Safari Packages',
  description: 'Explore private Tanzania safari package ideas from Great Roar Safaris.'
};

export default function SafarisPage() {
  return (
    <main>
      <PageHero
        eyebrow="All safari packages"
        title="Private Tanzania routes for every travel style."
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
      >
        Browse more safari ideas, then customize parks, lodges, pace, and special experiences with our Arusha-based team.
        eyebrow="Safari packages"
        title="Private Tanzania routes for every travel style."
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
      >
        Start with one of our sample journeys, then customize parks, lodges, pace, and special experiences with our Arusha-based team.
      </PageHero>
      <section className="section">
        <div className="packageGrid detailed">
          {safariPackages.map((safari) => (
            <SafariCard key={safari.title} safari={safari} detailed />
          ))}
        </div>
      </section>
      <section className="section processPanel">
        <p className="eyebrow">What is included</p>
        <h2>Designed for smooth private travel.</h2>
        <div className="featureGrid three">
          <article><h3>Private 4x4 vehicle</h3><p>Enjoy flexible wildlife viewing with a dedicated guide and window seat access for every traveler.</p></article>
          <article><h3>Lodge matching</h3><p>We recommend mid-range, luxury, or boutique camps based on comfort, budget, and availability.</p></article>
          <article><h3>Clear planning</h3><p>Receive practical advice on seasons, park fees, drive times, domestic flights, and packing.</p></article>
        </div>
        <Link className="button primary" href="/contact">Request a custom safari</Link>
      </section>
    </main>
  );
}
