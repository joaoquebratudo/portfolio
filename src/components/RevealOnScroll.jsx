'use client'

import { useEffect, useRef, useState } from 'react'

function RevealOnScroll({
  as: Component = 'div',
  children,
  className = '',
  delay = 0,
  direction = 'up'
}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -12% 0px'
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <Component
      ref={ref}
      className={`scroll-reveal scroll-reveal-${direction} ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Component>
  )
}

export default RevealOnScroll
