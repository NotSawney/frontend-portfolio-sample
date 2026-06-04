import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15, ...options })
  return { ref, isInView }
}
