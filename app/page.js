import Link from 'next/link';
import DestinationCard from '@/components/DestinationCard';
import ExperienceCard from '@/components/ExperienceCard';
import SafariCard from '@/components/SafariCard';
import { destinations, experiences, safariPackages } from '@/data/site';

export default function HomePage() {
  const featuredSafaris = safariPackages.slice(0, 4);
  const featuredExperiences = experiences.slice(0, 3);

import SafariCard from '@/components/SafariCard';
import { activities, destinations, safariPackages } from '@/data/site';

export default function HomePage() {
  return (
    <main>
      <section className="homeHero">
        <div className="heroContent">
          <p className="eyebrow">Private Tanzania safaris • Tailor-made journeys</p>
          <h1>Hear the wild roar across Tanzania’s legendary parks.</h1>
          <p>
            Great Roar Safaris designs seamless bush-to-beach adventures led by local experts—from
            Serengeti migration routes and Ngorongoro Crater mornings to relaxed Zanzibar escapes.
          </p>
          <div className="heroActions">
            <Link className="button primary" href="/contact">
              Start planning
            </Link>
            <Link className="button ghost" href="/safaris">
              View all safaris
              Explore trips
            </Link>
          </div>
        </div>
        <aside className="heroCard" aria-label="Trip planning highlights">
          <strong>Most requested journey</strong>
          <h2>8-Day Serengeti & Ngorongoro Private Safari</h2>
          <p>Tarangire, central Serengeti, Ngorongoro Crater, private 4x4 guide, handpicked lodges.</p>
          <span>Customizable from mid-range to luxury</span>
        </aside>
      </section>

      <section className="trustBar" aria-label="Reasons to book with Great Roar Safaris">
        <article><strong>24h</strong><span>Typical enquiry response</span></article>
        <article><strong>100%</strong><span>Private safari vehicles</span></article>
        <article><strong>Local</strong><span>Arusha-based planning team</span></article>
        <article><strong>Big Five</strong><span>Northern circuit expertise</span></article>
      </section>

      <section className="section intro">
        <div>
          <p className="eyebrow">Welcome to Great Roar Safaris</p>
          <h2>Your Tanzania adventure, shaped around your pace.</h2>
        </div>
        <p>
          We are a Tanzania tour operator creating private safari holidays for couples, families,
          honeymooners, photographers, and small groups. Tell us your travel dates, comfort style,
          interests, and budget, and we will build a thoughtful itinerary with clear communication,
          reliable logistics, and warm Tanzanian hospitality.
        </p>
      </section>

      <section className="section featured">
        <div className="sectionHeading withAction">
          <div>
            <p className="eyebrow">Popular Tanzania safari tours</p>
            <h2>Choose a sample itinerary, then make it yours.</h2>
            <p>Use these journeys as starting points. We can adjust length, lodges, routing, pace, and optional experiences.</p>
          </div>
          <Link className="button secondary" href="/safaris">View all safaris</Link>
        </div>
        <div className="packageGrid">
          {featuredSafaris.map((safari) => (
        <div className="sectionHeading">
          <p className="eyebrow">Popular Tanzania safari tours</p>
          <h2>Choose a sample itinerary, then make it yours.</h2>
          <p>Use these journeys as starting points. We can adjust length, lodges, routing, pace, and optional experiences.</p>
        </div>
        <div className="packageGrid">
          {safariPackages.map((safari) => (
            <SafariCard key={safari.title} safari={safari} />
          ))}
        </div>
      </section>

      <section className="section destinationsPreview">
        <div className="sectionHeading compact">
          <p className="eyebrow">Destinations we love</p>
          <h2>Iconic parks, crater landscapes, and island calm.</h2>
        </div>
        <div className="destinationList">
          {destinations.slice(0, 3).map((destination) => (
            <DestinationCard key={destination.name} destination={destination} />
            <article key={destination.name}>
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
            </article>
          ))}
        </div>
        <Link className="button secondary" href="/destinations">
          See all destinations
        </Link>
      </section>

      <section className="section experiencesPreview">
        <div className="sectionHeading withAction">
          <div>
            <p className="eyebrow">Optional experiences</p>
            <h2>Add more texture to your safari.</h2>
            <p>Each experience can be added to a private safari when routing, timing, and park rules allow.</p>
          </div>
          <Link className="button secondary" href="/experiences">View all experiences</Link>
        </div>
        <div className="experienceGrid">
          {featuredExperiences.map((experience) => (
            <ExperienceCard key={experience.slug} experience={experience} />
          ))}
      <section className="section split">
        <div className="imagePanel" />
        <div className="contentPanel">
          <p className="eyebrow">Optional experiences</p>
          <h2>Add more texture to your safari.</h2>
          <ul className="activityList">
            {activities.slice(0, 6).map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
