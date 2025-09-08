import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const ButtonServizi = ({ title }) => {
  const btnRef = useRef(null)

  useGSAP((context) => {
    const el = btnRef.current
    const mm = gsap.matchMedia()

    // stessa funzione per l'offset orizzontale
    const fromX = () => {
      const r = el.getBoundingClientRect()
      const cx = window.innerWidth / 2
      return cx - (r.left + r.width / 2)
    }

    // Desktop ≥ 1024px: scale = 8
    mm.add('(min-width: 1024px)', () => {
      const tl = gsap.timeline({
        // ScrollTrigger a livello di timeline
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          // markers: true,             // <-- utile in debug
          toggleActions: 'play none none none',
          once: true,                   // riproduci una sola volta
          invalidateOnRefresh: true,    // ricalcola i valori function-based (fromX) su resize/refresh
        },
      })

      tl.from(el, {
        x: fromX,
        scale: 8,
        duration: 0.8,
        ease: 'power3.out',
        transformOrigin: '50% 50%',
      })

      return () => {
        tl.scrollTrigger?.kill()
        tl.kill()
      }
    }, context.scope)

    // Mobile ≤ 1023px: scale = 1
    mm.add('(max-width: 1023px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          // markers: true,
          toggleActions: 'play none none none',
          once: true,
          invalidateOnRefresh: true,
        },
      })

      tl.from(el, {
        x: fromX,
        scale: 2,
        duration: 0.8,
        ease: 'power3.out',
        transformOrigin: '50% 50%',
      })

      return () => {
        tl.scrollTrigger?.kill()
        tl.kill()
      }
    }, context.scope)

    // cleanup generale (smontaggio componente / cambio breakpoint)
    return () => mm.revert()
  }, { scope: btnRef })

  return (
    <button ref={btnRef} className="bg-white rounded-full py-1 px-7">
      <span className="text-md">{title}</span>
    </button>
  )
}

export default ButtonServizi
