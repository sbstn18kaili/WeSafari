import PageHero from '@/components/PageHero';
import ExperienceCard from '@/components/ExperienceCard';
import { experiences } from '@/data/site';

export const metadata = {
  title: 'Optional Experiences',
  description: 'Explore optional cultural, wildlife, mountain, and Zanzibar experiences for your Tanzania safari.'
};

export default function ExperiencesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Optional experiences"
        title="Make your Tanzania safari richer and more personal."
        image="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=1600&q=80"
      >
        Add culture, aerial views, coffee farms, waterfalls, spice markets, or island history to your private itinerary.
      </PageHero>
      <section className="section experiencesFull">
        <div className="experienceGrid full">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.slug} experience={experience} />
          ))}
        </div>
      </section>
    </main>
  );
}
