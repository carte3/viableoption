import Reveal from '../components/Reveal.jsx'
import PageHead from '../components/PageHead.jsx'
import CTABand from '../components/CTABand.jsx'
import { I } from '../icons.jsx'
import { ABOUT_VALUES, STRENGTHS, CLIENTS } from '../data.js'

export default function About() {
  return (
    <main>
      <PageHead
        eyebrow="About Us"
        title="Practical financial advisory for stronger institutions"
        sub="Viable Option Pty Ltd provides specialized consulting services to municipalities, government entities, financial institutions and businesses across South Africa — combining public finance knowledge, corporate advisory experience and data-driven insight."
      />

      <section>
        <div className="wrap split">
          <div className="lead">
            <span className="eyebrow">Who we are</span>
            <h2 className="split-title">Confidence, compliance and long-term resilience</h2>
            <p>We help clients restore confidence and build durable financial health. Our work blends public finance, corporate advisory and analytical rigour to strengthen the institutions that communities and markets depend on.</p>
            <ul className="value-list">
              {ABOUT_VALUES.map((v, i) => (
                <li key={i}><span className="tick">{I.check}</span>{v}</li>
              ))}
            </ul>
          </div>
          <Reveal>
            <div className="panel-dark">
              <h3>Our mission</h3>
              <p>To deliver practical financial, governance and compliance solutions that help clients restore confidence and build long-term resilience.</p>
              <div className="rule" />
              <h3>Our approach</h3>
              <p>We start with diagnostic clarity, co-create realistic improvement plans, and support implementation through training, monitoring and refinement.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="tint">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Our strength</span>
            <h2>A team built across finance, banking and analytics</h2>
            <p>Combined experience across public finance, corporate banking, accounting, taxation, recovery planning and analytical reporting.</p>
          </div>
          <div className="grid mission-grid">
            {STRENGTHS.map((m, i) => (
              <Reveal key={i}><div className="mini"><h4>{m[0]}</h4><p>{m[1]}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head center"><span className="eyebrow">Clients we support</span><h2>Serving institutions across South Africa</h2></div>
          <div className="client-chips center">
            {CLIENTS.map((c, i) => <span key={i}>{c}</span>)}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  )
}
