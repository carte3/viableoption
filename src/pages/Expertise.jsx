import Reveal from '../components/Reveal.jsx'
import PageHead from '../components/PageHead.jsx'
import CTABand from '../components/CTABand.jsx'
import SafeImg from '../components/SafeImg.jsx'
import { I } from '../icons.jsx'
import { ASSETS, SERVICES, WHY, APPROACH } from '../data.js'

export default function Expertise() {
  return (
    <main>
      <PageHead
        eyebrow="Expertise"
        title="Specialized consulting for financial stability and compliance"
        sub="Our management team brings more than 50 combined years of senior leadership experience in public finance, private-sector advisory, corporate banking and strategic advisory — serving municipalities, government entities, financial institutions and businesses across South Africa."
      />

      <section>
        <div className="wrap intro-split">
          <div>
            <span className="eyebrow">What we do</span>
            <h2 className="split-title">Five integrated advisory practices</h2>
            <p className="intro-copy">From full-cycle accounting to institutional turnaround, our services are designed to work together — diagnosing the real problem, fixing it, and building the capacity to keep it fixed.</p>
          </div>
          <SafeImg src={ASSETS.experience} alt="Viable Option advisory work" className="intro-img">
            <div className="intro-img-ph">{I.chart}</div>
          </SafeImg>
        </div>

        <div className="wrap">
          {SERVICES.map((s, i) => (
            <Reveal key={i}>
              <div className="svc">
                <div className="svc-head"><div className="icon">{I[s.icon]}</div><h3>{s.title}</h3></div>
                <ul className="svc-cols">{s.items.map((x, j) => <li key={j}>{x}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="tint">
        <div className="wrap">
          <div className="sec-head center"><span className="eyebrow">Why choose Viable Option</span><h2>Advisory you can build an institution on</h2></div>
          <div className="grid why-grid">
            {WHY.map((w, i) => (
              <Reveal key={i}><div className="why"><div className="icon">{I[w.icon]}</div><p>{w.text}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head center"><span className="eyebrow">Our approach</span><h2>How we work</h2></div>
          <div className="grid approach-grid">
            {APPROACH.map((a, i) => (
              <Reveal key={i}><div className="step"><div className="n">{i + 1}</div><h4 className="approach-h">{a}</h4></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  )
}
