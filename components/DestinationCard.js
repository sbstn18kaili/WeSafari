import Link from 'next/link';

export default function DestinationCard({ destination }) {
  return (
    <article className="destinationCard">
      <img src={destination.image} alt={`${destination.name} landscape`} />
      <div>
        <h3>{destination.name}</h3>
        <p>{destination.description}</p>
        <strong>Best for: {destination.bestFor}</strong>
        <Link className="textLink" href={`/destinations/${destination.slug}`}>
          Explore destination →
        </Link>
      </div>
    </article>
  );
}
