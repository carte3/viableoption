import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { NAV, CONTACT } from '../data.js'

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <Logo dark />
          <b>Viable Option</b>
          <p>Consulting services to municipalities. Supporting municipalities, government entities and institutions across South Africa.</p>
        </div>

        <div className="foot-col">
          <h5>Explore</h5>
          {NAV.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
        </div>

        <div className="foot-col">
          <h5>Contact</h5>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href={`tel:${CONTACT.landline.replace(/\s/g, '')}`}>Landline: {CONTACT.landline}</a>
          <a href={`tel:${CONTACT.cell.replace(/\s/g, '')}`}>Cell: {CONTACT.cell}</a>
          <p>{CONTACT.office}<br />Mon–Fri, 08:00–17:00 SAST</p>
        </div>

        <div className="foot-col">
          <h5>Focus</h5>
          <p>Municipal Recovery</p>
          <p>Revenue Optimization</p>
          <p>Accounting and Financial Reporting</p>
          <p>Governance and Compliance</p>
          <p>Data-Driven Finance</p>
        </div>
      </div>

      <div className="wrap foot-bottom">
        <span>© {new Date().getFullYear()} Viable Option Pty Ltd. All rights reserved.</span>
        <span>Municipal Financial Advisory</span>
      </div>
    </footer>
  )
}
