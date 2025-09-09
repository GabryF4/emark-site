import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import ButtonServizi from './ButtonServizi';
import Card from './Card';
import {webDev} from "../constants/index.js"

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const WebDevelopment = () => {
  useGSAP(() =>{
    const webSplit = SplitText.create('#container-paragrafi p', {
      type: 'words'
    })

    const tlWeb = gsap.timeline({

    })
                                  //da finire
    tlWeb.from(webSplit.words, {
      opacity: 0,
    })
  })

  return (
    <div id='web-development' className='bg-black w-full h-full flex flex-col justify-between md:justify-center px-5 md:px-30'>
      <div className=''>
        <ButtonServizi title="Web development"/>
      </div>
      <div className='text-white flex max-sm:flex-col justify-between py-10' id='container-paragrafi'>
        <p className='w-100 max-sm:w-90 max-sm:mb-5 font-bold text-2xl'>Creiamo siti e landing page d’impatto, belli e funzionali con testi ottimizzati per dominare la SERP.</p>
        <p className='w-100 max-sm:w-90 items-end font-light text-xl'>Il lavoro di eMark è uno: aiutare le aziende a raggiungere in modo ottimale i propri obiettivi.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-10 max-sm:mx-auto'>
        {webDev.map((item) => (
          <Card 
            key={item.id}
            name={item.name}
            role={item.role}
            description={item.description}
            img={item.img}
          />
        ))}

      </div>
    </div>
  )
}

export default WebDevelopment