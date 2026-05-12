import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import ExperienceCard from '@/components/ExperienceCard';
import { experiences, findSafari, safariPackages } from '@/data/site';

export function generateStaticParams() {
  return safariPackages.map((safari) => ({ slug: safari.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const safari = findSafari(slug);

  if (!safari) {
    return { title: 'Safari Not Found' };
  }

  return {
    title: safari.title,
    description: safari.summary
  };
}

export default async function SafariDetailPage({ params }) {
  const { slug } = await params;
  const safari = findSafari(slug);

  if (!safari) {
    notFound();
  }

  const essentials = [
    { label: 'Duration', value: safari.duration },
    { label: 'Travel style', value: safari.style },
    { label: 'Best for', value: safari.bestFor },
    { label: 'Route', value: safari.route },
    { label: 'Starts / ends', value: safari.startsEnds },
    { label: 'Accommodation', value: safari.accommodation },
    { label: 'Group size', value: safari.groupSize },
    { label: 'Best time', value: safari.bestTime },
    { label: 'Pace', value: safari.pace },
    { label: 'Physical level', value: safari.physicalLevel }
  ];

  return (
    <main>
      <PageHero eyebrow={`${safari.duration} • ${safari.style}`} title={safari.title} image={safari.image}>
        {safari.summary}
      </PageHero>

      <section className="section detailGrid safariOverviewGrid">
        <article className="detailPanel">
          <p className="eyebrow">Safari overview</p>
          <h2>What to expect</h2>
          <p>{safari.overview}</p>
          <p>{safari.priceNote}</p>
          <div className="detailMeta safariMeta">
            {essentials.slice(0, 3).map((item) => (
              <span key={item.label}><strong>{item.label}</strong>{item.value}</span>
            ))}
          </div>
        </article>
        <aside className="detailPanel accentPanel">
          <p className="eyebrow">Highlights</p>
          <ul className="pillList stacked">
            {safari.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <Link className="button primary" href="/contact">Customize this safari</Link>
        </aside>
      </section>

      <section className="section safariDetailsPanel">
        <div className="sectionHeading compact">
          <p className="eyebrow">Trip essentials</p>
          <h2>Everything you need to know before you enquire.</h2>
        </div>
        <div className="essentialsGrid">
          {essentials.map((item) => (
            <article key={item.label}>
              <strong>{item.label}</strong>
              <p>{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section itineraryPanel detailedItinerary">
        <p className="eyebrow">Suggested itinerary</p>
        <h2>A flexible day-by-day plan.</h2>
        <ol className="timeline expandedTimeline">
          {safari.itineraryDetailed.map((day) => (
            <li key={`${day.day}-${day.title}`}>
              <span>Day {day.day}</span>
              <h3>{day.title}</h3>
              <p>{day.description}</p>
              <dl>
                <div><dt>Location</dt><dd>{day.location}</dd></div>
                <div><dt>Accommodation</dt><dd>{day.accommodation}</dd></div>
                <div><dt>Meals</dt><dd>{day.meals}</dd></div>
              </dl>
            </li>
          ))}
        </ol>
      </section>

      <section className="section inclusionsGrid">
        <article className="detailPanel">
          <p className="eyebrow">Included</p>
          <h2>What is covered</h2>
          <ul className="checkList">
            {safari.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="detailPanel">
          <p className="eyebrow">Excluded</p>
          <h2>What to budget separately</h2>
          <ul className="checkList mutedList">
            {safari.excluded.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="detailPanel accentPanel bookingPanel">
          <p className="eyebrow">Meals and planning</p>
          <h2>Built around your comfort.</h2>
          <p>{safari.meals}</p>
          <Link className="button primary" href="/contact">Request a quote</Link>
        </article>
      </section>

      <section className="section experiencesPreview">
        <div className="sectionHeading withAction">
          <div>
            <p className="eyebrow">Enhance this safari</p>
            <h2>Optional experiences to consider.</h2>
          </div>
          <Link className="button secondary" href="/experiences">View all experiences</Link>
        </div>
        <div className="experienceGrid">
          {experiences.slice(0, 3).map((experience) => (
            <ExperienceCard key={experience.slug} experience={experience} />
          ))}
        </div>
      </section>
    </main>
  );
}
