import Reveal from '../components/Reveal.jsx'
import PageHead from '../components/PageHead.jsx'
import CTABand from '../components/CTABand.jsx'
import SafeImg from '../components/SafeImg.jsx'
import { ASSETS, MD, TEAM_MEMBERS } from '../data.js'

export default function Team() {
  return (
    <main>
      <PageHead
        eyebrow="Our Team"
        title="Leadership that has delivered turnaround at scale"
        sub="Viable Option is led by senior practitioners who pair public-finance depth with corporate and analytical expertise."
      />

      <section>
        <div className="wrap team-hero">
          <SafeImg src={ASSETS.md} alt={`${MD.name}, Managing Director`} className="portrait">
            <div className="ph"><span className="mono">GM</span></div>
          </SafeImg>
          <div className="team-body">
            <span className="eyebrow">Managing Director</span>
            <h2 className="team-name">{MD.name}</h2>
            <div className="role">{MD.role}</div>
            <p>{MD.bio}</p>
            <div className="tag-row">{MD.tags.map((t, i) => <span key={i}>{t}</span>)}</div>
          </div>
        </div>

        <div className="wrap two-col">
          <Reveal>
            <div className="listcard card"><h4>Career highlights</h4>
              <ul>{MD.highlights.map((h, i) => <li key={i}>{h}</li>)}</ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="listcard card"><h4>Education &amp; credentials</h4>
              <ul>{MD.education.map((e, i) => <li key={i}>{e}</li>)}</ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="tint">
        <div className="wrap">
          <div className="sec-head center">
            <span className="eyebrow">Our people</span>
            <h2>A multidisciplinary advisory team</h2>
            <p>Chartered accountants, data scientists, forensic investigators and business analysts working alongside the Managing Director.</p>
          </div>
          <div className="team-profiles">
            {TEAM_MEMBERS.map((member) => (
              <Reveal key={member.name}>
                <article className="team-card card">
                  <div className="team-card-head">
                    <span className="eyebrow">{member.role}</span>
                    <h3>{member.name}</h3>
                  </div>
                  <p>{member.summary}</p>
                  {member.details.map((detail, i) => <p key={i}>{detail}</p>)}
                  <blockquote>{member.quote}</blockquote>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  )
}
