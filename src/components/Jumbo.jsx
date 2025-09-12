import React from 'react'
import { VscArrowSmallDown } from "react-icons/vsc";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const jumbo = () => {
  useGSAP(() => {

    const titleSplit = SplitText.create('#jumbo h1', {
      type: 'words'
    })
  
    const tljumbo = gsap.timeline({
      
    })

    tljumbo.from(titleSplit.words, {
      opacity: 0, duration: 0.8, yPercent: 100, ease: 'expo.out', stagger: 0.02
    })
    tljumbo.from('#subtitle-jumbo', {
      opacity: 0, duration: 0.8, yPercent: 100, ease: 'expo.out', stagger: 0.02,
    })
    tljumbo.from('#scroll-button', {
      opacity: 0, duration: 0.8, yPercent: 100, ease: 'expo.out', stagger: 0.02})
    gsap.to('#black-screen', {
      height: "100%",    // diventa alto quanto il contenitore (qui #jumbo che è h-screen)
      duration: 0.3,       // tempo dell’animazione (1s)
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: '#jumbo',
        toggleActions: 'play none none reverse', // ↓ play, ↑ reverse sullo start
        start: "top top",
        markers: true
      }
      
    })

  })

  return (
    <div id='jumbo' className='relative h-screen w-full overflow-hidden flex flex-col items-center justify-center'>
      <div className='text-center md:leading-32 leading-15'>
        <h1 id='title-jumbo'>emark</h1>
        <p id='subtitle-jumbo'>Centro di ricerca sul marketing</p>
      </div>
      <button id='scroll-button' className='absolute bottom-15 border-1 border-solid rounded-full flex flex-col px-9 py-2'><VscArrowSmallDown className='w-auto text-lg' /></button>

      <div id='black-screen' className='absolute w-full h-0 bg-black '></div>
    </div>
  )
}

export default jumbo