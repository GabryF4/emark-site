import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import ButtonServizi from './ButtonServizi';
import Card from './Card';
import {webDev} from "../constants/index.js"
import AnimatedText from './AnimatedText.jsx';



const WebDevelopment = () => {
  useGSAP(() =>{
    const webPSplit = SplitText.create(".split-p", {type: "lines"});

    const webDevT = gsap.timeline({
      scrollTrigger: {
        trigger: '#web-development',
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      }
    })

    gsap.set(webPSplit.lines, {
      opacity: 0,
      y: 200,
      
    })
    webDevT.to(webPSplit.lines, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.02,
    })
    

  });
    

  return (
    <div id='web-development' className='bg-black w-full h-full flex flex-col justify-between md:justify-center px-5 md:px-30'>
      <div className=''>
        <ButtonServizi title="Web development"/>
      </div>
      <div className='text-white flex max-sm:flex-col justify-between py-10' id='container-paragrafi'>
        <p className='w-100 max-sm:w-90 max-sm:mb-5 font-bold text-2xl split-p'>Creiamo siti e landing page d’impatto, belli e funzionali con testi ottimizzati per dominare la SERP.</p>
        <p className='w-100 max-sm:w-90 items-end font-light text-xl split-p'>Il lavoro di eMark è uno: aiutare le aziende a raggiungere in modo ottimale i propri obiettivi.</p>
      </div>
      <AnimatedText />
      
      
      {/*  CODICE CARD STANDBY 
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

      </div> */}
    </div>
  )
}

export default WebDevelopment