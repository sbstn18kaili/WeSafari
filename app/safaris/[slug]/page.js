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

  return (
    <main>
      <PageHero eyebrow={`${safari.duration} • ${safari.style}`} title={safari.title} image={safari.image}>
        {safari.summary}
      </PageHero>

      <section className="section detailGrid">
        <article className="detailPanel">
          <p className="eyebrow">Safari overview</p>
          <h2>What to expect</h2>
          <p>{safari.overview}</p>
          <div className="detailMeta">
            <span><strong>Duration</strong>{safari.duration}</span>
            <span><strong>Travel style</strong>{safari.style}</span>
            <span><strong>Best for</strong>{safari.bestFor}</span>
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

      <section className="section itineraryPanel">
        <p className="eyebrow">Suggested itinerary</p>
        <h2>A flexible day-by-day idea.</h2>
        <ol className="timeline">
          {safari.itinerary.map((day, index) => (
            <li key={day}>
              <span>Day {index + 1}</span>
              <p>{day}</p>
            </li>
          ))}
        </ol>
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
