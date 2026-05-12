import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import { experiences, findExperience } from '@/data/site';

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const experience = findExperience(slug);

  if (!experience) {
    return { title: 'Experience Not Found' };
  }

  return {
    title: experience.title,
    description: experience.summary
  };
}

export default async function ExperienceDetailPage({ params }) {
  const { slug } = await params;
  const experience = findExperience(slug);

  if (!experience) {
    notFound();
  }

  return (
    <main>
      <PageHero eyebrow="Optional experience" title={experience.title} image={experience.image}>
        {experience.summary}
      </PageHero>
      <section className="section detailGrid">
        <article className="detailPanel">
          <p className="eyebrow">Experience details</p>
          <h2>How it fits your journey</h2>
          <p>{experience.details}</p>
          <Link className="button primary" href="/contact">Add this to my safari</Link>
        </article>
        <aside className="detailPanel accentPanel">
          <p className="eyebrow">Good to know</p>
          <ul className="pillList stacked">
            {experience.goodToKnow.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </aside>
      </section>
      <section className="section callout">
        <h2>Want to combine multiple experiences?</h2>
        <p>We will suggest the best sequence based on your route, season, and preferred safari pace.</p>
        <Link className="button primary" href="/experiences">Browse all experiences</Link>
      </section>
    </main>
  );
}
