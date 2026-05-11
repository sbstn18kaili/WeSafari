export default function PageHero({ eyebrow, title, children, image }) {
  return (
    <section className="pageHero" style={{ '--hero-image': `url(${image})` }}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </section>
  );
}
