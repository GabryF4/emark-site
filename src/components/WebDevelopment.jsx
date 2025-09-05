import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonServizi from './ButtonServizi';
import Card from './Card';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const WebDevelopment = () => {
  return (
    <div id='web-development' className='bg-black w-full h-full flex flex-col justify-between md:justify-center px-5 md:px-30'>
      <div className=''>
        <ButtonServizi title="Web development"/>
      </div>
      <div className='text-white flex max-sm:flex-col justify-between py-10'>
        <p className='w-100 max-sm:w-90 max-sm:mb-5 font-bold text-2xl'>Creiamo siti e landing page d’impatto, belli e funzionali con testi ottimizzati per dominare la SERP.</p>
        <p className='w-100 max-sm:w-90 items-end font-light text-xl'>Il lavoro di eMark è uno: aiutare le aziende a raggiungere in modo ottimale i propri obiettivi.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 max-sm:mx-auto'>
        <Card name="Veronica Scimone" work="Web designer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in fringilla urna, posuere maximus felis. " image="./src/assets/avatar-sample.png"/>
        <Card name="Veronica Scimone" work="Web designer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in fringilla urna, posuere maximus felis. " image="./src/assets/avatar-sample.png"/>

      </div>
    </div>
  )
}

export default WebDevelopment