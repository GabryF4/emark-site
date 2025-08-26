import React from 'react'
import { VscArrowSmallDown } from "react-icons/vsc";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const jumbo = () => {
  useGSAP(() => {

    // stato iniziale: black-screen "chiuso" a metà (centro)
    gsap.set("#black-screen", {
      clipPath: "inset(50% 0% 50% 0%)",
    });

    const titleSplit = SplitText.create('#jumbo h1', {
      type: 'words'
    })

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#jumbo h1',
        start: 'center bottom',
        end: '+=500',
        markers: true,
      }
    })

    scrollTimeline.from(titleSplit.words, {
      opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
    })
    scrollTimeline.from('#subtitle-jumbo', {
      opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
    })

  })

  return (
    <div id='jumbo' className='h-screen w-screen flex flex-col items-center justify-center '>
      <div className='text-center leading-32'>
        <h1 id='title-jumbo'>emark</h1>
        <p id='subtitle-jumbo'>Centro di ricerca sul marketing</p>
      </div>
      <button className='absolute bottom-15 border-1 border-solid rounded-full flex flex-col px-9 py-2'><VscArrowSmallDown className='w-auto text-lg' /></button>

      <div id='black-screen' className='absolute w-full h-0 bg-black'></div>
    </div>
  )
}

export default jumbo