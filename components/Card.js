export default function Card({ title, description, children, className = '' }) {
  return (
    <section className={`card ${className}`.trim()}>
      {title ? <h3 className="card-title">{title}</h3> : null}
      {description ? <p className="card-description">{description}</p> : null}
      {children}
    </section>
  );
}
