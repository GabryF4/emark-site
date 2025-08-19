import React from 'react'
import { VscArrowSmallDown } from "react-icons/vsc";

const jumbo = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center'>
      <div className='text-center leading-32'>
        <h1>emark</h1>
        <p>Centro di ricerca sul marketing</p>
      </div>
      <button className='absolute bottom-15 border-1 border-solid rounded-full flex flex-col px-9 py-2'><VscArrowSmallDown className='w-auto text-lg' /></button>

      <div id='black-screen' className='absolute w-full h-0 bg-black'></div>
    </div>
  )
}

export default jumbo