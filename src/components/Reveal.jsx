import { useEffect, useRef } from 'react'

// Fades content in on scroll. Respects prefers-reduced-motion via CSS.
export default function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el) }
      }),
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={'reveal ' + className}>{children}</div>
}
