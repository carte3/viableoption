import { useState } from 'react'

// Renders an image; if it fails to load, shows the fallback children in a styled panel.
export default function SafeImg({ src, alt, className = '', children }) {
  const [err, setErr] = useState(false)
  if (err) return <div className={className + ' ph'}>{children}</div>
  return <img src={src} alt={alt} className={className} onError={() => setErr(true)} />
}
