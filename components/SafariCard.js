import Link from 'next/link';

export default function SafariCard({ safari, detailed = false }) {
  return (
    <article className="packageCard">
      <img src={safari.image} alt={`${safari.title} safari`} />
      <div>
        <span>
          {safari.duration} • {safari.style}
        </span>
        <h3>{safari.title}</h3>
        <p>{safari.summary}</p>
        {detailed && (
          <ul className="pillList">
            {safari.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
        <Link className="textLink" href={`/safaris/${safari.slug}`}>
          View safari details →
        </Link>
      </div>
    </article>
  );
}
