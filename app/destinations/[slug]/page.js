import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import SafariCard from '@/components/SafariCard';
import { destinations, findDestination, findSafari } from '@/data/site';

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const destination = findDestination(slug);

  if (!destination) {
    return { title: 'Destination Not Found' };
  }

  return {
    title: destination.name,
    description: destination.description
  };
}

export default async function DestinationDetailPage({ params }) {
  const { slug } = await params;
  const destination = findDestination(slug);

  if (!destination) {
    notFound();
  }

  const suggestedSafaris = destination.suggestedSafaris.map(findSafari).filter(Boolean);

  return (
    <main>
      <PageHero eyebrow={destination.region} title={destination.name} image={destination.image}>
        {destination.description}
      </PageHero>

      <section className="section detailGrid destinationDetailGrid">
        <article className="detailPanel">
          <p className="eyebrow">Destination overview</p>
          <h2>Why visit {destination.name}?</h2>
          <p>{destination.overview}</p>
          <div className="detailMeta">
            <span><strong>Region</strong>{destination.region}</span>
            <span><strong>Best time</strong>{destination.bestTime}</span>
            <span><strong>Best for</strong>{destination.bestFor}</span>
          </div>
        </article>
        <aside className="detailPanel accentPanel">
          <p className="eyebrow">Travel notes</p>
          <ul className="pillList stacked">
            {destination.travelNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <Link className="button primary" href="/contact">Plan this destination</Link>
        </aside>
      </section>

      <section className="section destinationInfoGrid">
        <article className="detailPanel">
          <p className="eyebrow">Wildlife and nature</p>
          <h2>What you may see</h2>
          <ul className="checkList">
            {destination.wildlife.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="detailPanel">
          <p className="eyebrow">Experiences</p>
          <h2>What to do</h2>
          <ul className="checkList">
            {destination.experiences.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section featured">
        <div className="sectionHeading withAction">
          <div>
            <p className="eyebrow">Suggested safari routes</p>
            <h2>Safaris featuring {destination.name}.</h2>
          </div>
          <Link className="button secondary" href="/safaris">View all safaris</Link>
        </div>
        <div className="packageGrid detailed">
          {suggestedSafaris.map((safari) => (
            <SafariCard key={safari.slug} safari={safari} detailed />
          ))}
        </div>
      </section>
    </main>
  );
}
