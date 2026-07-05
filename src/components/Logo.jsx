import { useState } from 'react'
import { ASSETS } from '../data.js'

export default function Logo({ dark = false }) {
  const [err, setErr] = useState(false)
  if (err) return <div className={'logo fallback' + (dark ? ' on-dark' : '')}>VO</div>
  return (
    <div className="logo">
      <img src={ASSETS.logo} alt="Viable Option" onError={() => setErr(true)} />
    </div>
  )
}
