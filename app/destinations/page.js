import Link from 'next/link';
import DestinationCard from '@/components/DestinationCard';
import PageHero from '@/components/PageHero';
import { destinations } from '@/data/site';

export const metadata = {
  title: 'Destinations',
  description: 'Discover Tanzania parks, cultural regions, and Zanzibar beach extensions with Great Roar Safaris.'
};

export default function DestinationsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Where we go"
        title="From Serengeti plains to Zanzibar shores."
        image="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1600&q=80"
      >
        Combine celebrated national parks, crater landscapes, highland culture, and Indian Ocean relaxation in one carefully paced itinerary.
      </PageHero>
      <section className="section destinationsFull">
        <div className="destinationList">
          {destinations.map((destination) => (
            <DestinationCard key={destination.name} destination={destination} />
          ))}
        </div>
      </section>
      <section className="section callout">
        <h2>Not sure which parks fit your dates?</h2>
        <p>Tell us when you want to travel and we will recommend the strongest route for wildlife, weather, and your preferred comfort level.</p>
        <Link className="button primary" href="/contact">Ask an expert</Link>
      </section>
    </main>
  );
}
