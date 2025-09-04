import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonServizi from './ButtonServizi';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const WebDevelopment = () => {
  return (
    <div id='web-development' className='bg-black w-full h-full justify-start px-30'>
      <div>
        <ButtonServizi title="Web development"/>
      </div>
      <div className='text-white columns-2 gap-10 py-10'>
        <p className='w-100 font-bold'>Creiamo siti e landing page d’impatto, belli e funzionali con testi ottimizzati per dominare la SERP.</p>
        <p className='w-100 font-light'>Il lavoro di eMark è uno: aiutare le aziende a raggiungere in modo ottimale i propri obiettivi.</p>
      </div>
        
    </div>
  )
}

export default WebDevelopment