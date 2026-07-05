export default function PageHead({ eyebrow, title, sub }) {
  return (
    <section className="pagehead">
      <div className="hero-fallback" style={{ opacity: 0.9 }} />
      <div className="hero-dots" />
      <div className="wrap pagehead-in">
        <span className="eyebrow light">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{sub}</p>
      </div>
    </section>
  )
}
