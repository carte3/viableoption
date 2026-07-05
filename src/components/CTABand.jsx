import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

export default function CTABand() {
  return (
    <div className="wrap ctaband-wrap">
      <Reveal>
        <div className="ctaband">
          <div>
            <h3>Ready to restore financial stability and confidence?</h3>
            <p>Book a consultation with our advisory team.</p>
          </div>
          <Link className="btn primary" to="/contact">Book a consultation</Link>
        </div>
      </Reveal>
    </div>
  )
}
