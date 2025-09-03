import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonServizi from './ButtonServizi';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const WebDevelopment = () => {
  return (
    <div id='web-development' className='bg-black'>
        <ButtonServizi title="Web developer" />
    </div>
  )
}

export default WebDevelopment