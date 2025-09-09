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

    const fromX = () => {
      const r = el.getBoundingClientRect()
      const cx = window.innerWidth / 2
      return cx - (r.left + r.width / 2)
    }

    // Desktop ≥ 1024px
    mm.add('(min-width: 1024px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          // markers: true,
          toggleActions: 'play none none reverse', // ↓ play, ↑ reverse sullo start
          invalidateOnRefresh: true,
        },
      })

      tl.from(el, {
        x: fromX,
        scale: 8,
        duration: 0.3,
        ease: 'power3.out',
        transformOrigin: '50% 50%',
      })

      return () => { tl.scrollTrigger?.kill(); tl.kill() }
    }, context.scope)

    // Mobile ≤ 1023px
    mm.add('(max-width: 1023px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          // markers: true,
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true,
        },
      })

      tl.from(el, {
        x: fromX,
        scale: 1, // se vuoi 1 su mobile
        duration: 0.3,
        ease: 'power3.out',
        transformOrigin: '50% 50%',
      })

      return () => { tl.scrollTrigger?.kill(); tl.kill() }
    }, context.scope)

    return () => mm.revert()
  }, { scope: btnRef })

  return (
    <button ref={btnRef} className="bg-white rounded-full py-1 px-7">
      <span className="text-md">{title}</span>
    </button>
  )
}

export default ButtonServizi
