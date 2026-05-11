import Link from 'next/link';

export default function ExperienceCard({ experience }) {
  return (
    <article className="experienceCard">
      <img src={experience.image} alt={experience.title} />
      <div>
        <h3>{experience.title}</h3>
        <p>{experience.summary}</p>
        <Link className="textLink" href={`/experiences/${experience.slug}`}>
          Learn more →
        </Link>
      </div>
    </article>
  );
}
