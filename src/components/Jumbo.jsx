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
      scrollTrigger: {
        trigger: '#jumbo',
        pin: true,
        start: "top top",
        end: "+=1500",
        scrub: true,
      }
    })

    tljumbo.from(titleSplit.words, {
      opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
    })
    tljumbo.from('#subtitle-jumbo', {
      opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02, delay: 2
    })
    tljumbo.to('#black-screen', {
      height: "100%",    // diventa alto quanto il contenitore (qui #jumbo che è h-screen)
      duration: 3,       // tempo dell’animazione (1s)
      ease: "power2.out",
      delay: 2
    })

  })

  return (
    <div id='jumbo' className='relative h-screen w-full overflow-hidden flex flex-col items-center justify-center'>
      <div className='text-center leading-32'>
        <h1 id='title-jumbo'>emark</h1>
        <p id='subtitle-jumbo'>Centro di ricerca sul marketing</p>
      </div>
      <button className='absolute bottom-15 border-1 border-solid rounded-full flex flex-col px-9 py-2'><VscArrowSmallDown className='w-auto text-lg' /></button>

      <div id='black-screen' className='absolute w-full h-0 bg-black '></div>
    </div>
  )
}

export default jumbo