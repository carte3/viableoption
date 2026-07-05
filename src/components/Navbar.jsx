import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'
import { NAV } from '../data.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="nav-in">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <Logo />
          <div className="bt">
            <b>Viable Option Pty Ltd</b>
            <span>Municipal Financial Advisory</span>
          </div>
        </Link>

        <nav className="nav-links">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end}
              className={({ isActive }) => (isActive ? 'active' : '')}>
              {n.label}
            </NavLink>
          ))}
          <Link className="btn primary" to="/contact">Book consultation</Link>
        </nav>

        <button className="burger" aria-label="Toggle menu" aria-expanded={open}
          onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </div>

      <div className={'mobile-menu' + (open ? ' open' : '')}>
        {NAV.map((n) => (
          <NavLink key={n.to} to={n.to} end={n.end} onClick={() => setOpen(false)}
            className={({ isActive }) => (isActive ? 'active' : '')}>
            {n.label}
          </NavLink>
        ))}
        <Link to="/contact" onClick={() => setOpen(false)} style={{ color: 'var(--blue)' }}>
          Book consultation →
        </Link>
      </div>
    </header>
  )
}
