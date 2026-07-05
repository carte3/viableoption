import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import CTABand from '../components/CTABand.jsx'
import { I } from '../icons.jsx'
import { ASSETS, SUPPORT, STEPS } from '../data.js'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-media">
          <video autoPlay muted loop playsInline poster="">
            <source src={ASSETS.video} type="video/mp4" />
          </video>
          <div className="hero-fallback" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-dots" />
        <div className="wrap hero-in">
          <span className="eyebrow light">Viable Option</span>
          <h1>Professional financial advisory and accounting for stability, compliance, and long-term growth.</h1>
          <p className="sub">Viable Option provides professional financial advisory and accounting services for municipalities, government entities, financial institutions and businesses across South Africa.</p>
          <div className="hero-cta">
            <Link className="btn primary" to="/contact">Book a consultation</Link>
            <Link className="btn ghost" to="/expertise">View expertise</Link>
          </div>
        </div>
        <div className="hero-strip">
          <div className="wrap">
            <div className="row">
              <div className="hstat"><b>50+ years</b><span>Combined senior leadership experience</span></div>
              <div className="hstat"><b>Public &amp; private</b><span>Sector expertise under one roof</span></div>
              <div className="hstat"><b>End-to-end</b><span>From diagnosis to implementation</span></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head center">
            <span className="eyebrow">Who we support</span>
            <h2>Trusted advisory across the public and private sectors</h2>
            <p>We partner with institutions that need clarity, compliance and a credible path back to financial health.</p>
          </div>
          <div className="grid support-grid">
            {SUPPORT.map((s, i) => (
              <Reveal key={i}>
                <div className="card"><div className="icon">{I[s.icon]}</div><h3>{s.title}</h3><p>{s.text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="tint">
        <div className="wrap">
          <div className="sec-head center"><span className="eyebrow">Why Viable Option</span><h2>Depth of experience, delivered end to end</h2></div>
          <div className="grid stat-grid">
            <Reveal><div className="stat"><b>50+</b><div className="lab">Years of combined senior leadership experience</div></div></Reveal>
            <Reveal><div className="stat"><b>2</b><div className="lab">Sectors mastered — public finance and private advisory</div></div></Reveal>
            <Reveal><div className="stat"><b>360°</b><div className="lab">Support from diagnosis through to implementation</div></div></Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head center">
            <span className="eyebrow">Our delivery model</span>
            <h2>A structured path from diagnosis to lasting outcomes</h2>
            <p>Every engagement follows a disciplined, collaborative method designed to embed change.</p>
          </div>
          <div className="grid steps">
            {STEPS.map((s, i) => (
              <Reveal key={i}><div className="step"><div className="n">{i + 1}</div><h4>{s[0]}</h4><p>{s[1]}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  )
}
