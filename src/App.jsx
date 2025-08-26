import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { gsap } from "gsap"
import {ScrollTrigger, SplitText} from "gsap/all"
import Jumbo from './components/Jumbo'
import Servizi from './components/Servizi'

gsap.registerPlugin(ScrollTrigger, SplitText)


const App = () => {
  return (
    <div className='overflow-hidden'>
      <Jumbo />
      <Servizi />
    </div>
  )
}

export default App
