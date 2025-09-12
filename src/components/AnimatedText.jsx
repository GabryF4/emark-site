import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
    useGSAP(() => {

        
        const textElements = gsap.utils.toArray('.text');

        textElements.forEach(text => {
            gsap.to(text, {
            backgroundSize: '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: text,
                start: 'center 80%',
                end: 'center 20%',
                scrub: true,
                },
            });
});

    })

  return (
    <div className="container-title-fx-web md:mt-40 mt-6">
        <h2 className="text">CREAZIONE SITO<span>RESTYLING SITO</span></h2>
        <h2 className="text">CREAZIONE LANDING<span>E MOLTO ALTRO!!</span></h2>
        <h2 className="text">LOCAL SEO<span>CRAZYYY</span></h2>
        <h2 className="text">SEO COPYWRITING<span>PROFESSIONAL!!</span></h2>
        <h2 className="text">CONTATTACI<span><a href="#" target="_blank">AVANTI!</a></span></h2>
    </div>
  )
}

export default AnimatedText