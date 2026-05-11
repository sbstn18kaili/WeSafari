import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'About',
  description: 'Learn about Great Roar Safaris, a Tanzania-based private safari planning team.'
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About us"
        title="Local knowledge, careful planning, warm Tanzanian hospitality."
        image="https://images.unsplash.com/photo-1528277342758-f1d7613953a2?auto=format&fit=crop&w=1600&q=80"
      >
        Great Roar Safaris is built for travelers who want responsive planning, thoughtful routing, and guides who treat every game drive as a chance to learn.
      </PageHero>
      <section className="section storyGrid">
        <div>
          <p className="eyebrow">Our approach</p>
          <h2>We plan around your pace, not a fixed template.</h2>
        </div>
        <div>
          <p>
            Whether you are celebrating a honeymoon, traveling as a family, photographing wildlife, or visiting Tanzania for the first time, we help balance iconic sightings with realistic drive times and comfortable places to stay.
          </p>
          <p>
            Our recommendations consider seasonality, park logistics, conservation etiquette, cultural respect, and the small details that make a safari feel effortless.
          </p>
        </div>
      </section>
      <section className="section featureGrid four">
        <article><span className="icon">✦</span><h3>Tailor-made safaris</h3><p>Routes are shaped around your dates, budget, interests, and comfort style.</p></article>
        <article><span className="icon">☀</span><h3>Responsive planning</h3><p>We keep communication clear before, during, and after your Tanzania journey.</p></article>
        <article><span className="icon">♜</span><h3>Professional guides</h3><p>Travel with driver-guides who understand wildlife behavior and local culture.</p></article>
        <article><span className="icon">≈</span><h3>Safari & Zanzibar</h3><p>Connect dramatic savannah days with relaxed Indian Ocean beach time.</p></article>
      </section>
      <section className="section callout">
        <h2>Ready to plan with a Tanzania-based team?</h2>
        <Link className="button primary" href="/contact">Start your enquiry</Link>
      </section>
    </main>
  );
}
