import { useState } from 'react'
import PageHead from '../components/PageHead.jsx'
import { I } from '../icons.jsx'
import { CONTACT } from '../data.js'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function submit(e) {
    e.preventDefault()
    const f = e.target
    const body =
      `Name: ${f.name.value}\n` +
      `Organisation: ${f.org.value}\n` +
      `Email: ${f.email.value}\n` +
      `Phone: ${f.phone.value}\n` +
      `Area of interest: ${f.area.value}\n\n` +
      `${f.message.value}`
    const subject = `Consultation enquiry — ${f.org.value || f.name.value}`
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const info = [
    { icon: 'mail', k: 'Email', node: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> },
    { icon: 'phone', k: 'Landline', node: <a href={`tel:${CONTACT.landline.replace(/\s/g, '')}`}>{CONTACT.landline}</a> },
    { icon: 'phone', k: 'Cell', node: <a href={`tel:${CONTACT.cell.replace(/\s/g, '')}`}>{CONTACT.cell}</a> },
    { icon: 'pin', k: 'Office', node: CONTACT.office },
    { icon: 'clock', k: 'Hours', node: CONTACT.hours },
  ]

  return (
    <main>
      <PageHead
        eyebrow="Contact"
        title="Let's talk about your institution's next step"
        sub="Book a consultation or reach out for advisory support. Our team responds within one business day."
      />

      <section>
        <div className="wrap contact-grid">
          <div className="cinfo">
            {info.map((r, i) => (
              <div className="row" key={i}>
                <div className="icon">{I[r.icon]}</div>
                <div><div className="k">{r.k}</div><div className="v">{r.node}</div></div>
              </div>
            ))}
          </div>

          <form className="enquiry" onSubmit={submit}>
            <h3>Book a consultation</h3>
            <p className="fnote">Tell us a little about your needs and we'll be in touch.</p>
            {sent && (
              <div className="sent">
                Thank you — your email draft has opened. We'll respond within one business day.
                If nothing opened, email us directly at {CONTACT.email}.
              </div>
            )}
            <div className="field two">
              <div><label>Full name</label><input name="name" required placeholder="Your name" /></div>
              <div><label>Organisation</label><input name="org" placeholder="Municipality / company" /></div>
            </div>
            <div className="field two">
              <div><label>Email</label><input name="email" type="email" required placeholder="you@example.co.za" /></div>
              <div><label>Phone</label><input name="phone" placeholder="+27 …" /></div>
            </div>
            <div className="field">
              <label>Area of interest</label>
              <select name="area" defaultValue="">
                <option value="" disabled>Select a service area</option>
                <option>Financial Recovery &amp; Turnaround</option>
                <option>Accounting, Taxation &amp; Secretarial</option>
                <option>Revenue &amp; Budget Optimization</option>
                <option>Data-Driven Financial Insights</option>
                <option>Strategic Leadership &amp; Project Management</option>
              </select>
            </div>
            <div className="field">
              <label>How can we help?</label>
              <textarea name="message" rows="4" placeholder="Briefly describe your requirements" />
            </div>
            <button className="btn primary btn-block" type="submit">Send enquiry</button>
          </form>
        </div>
      </section>
    </main>
  )
}
