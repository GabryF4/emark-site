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

    const tl = gsap.timeline({
      
    })

    tl.from(titleSplit.words, {
      opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
    })
    tl.from('#subtitle-jumbo', {
      opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
    })
    tl.to('#black-screen', {
      height: "100%",    // diventa alto quanto il contenitore (qui #jumbo che è h-screen)
      duration: 1,       // tempo dell’animazione (1s)
      ease: "power2.out",
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