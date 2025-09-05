import React from 'react'

const Card = (props) => {
  return (
    <div className='text-black bg-white w-2xs flex flex-col p-6 rounded-3xl py-10'>
        <div className='flex justify-center'>
            <img src={props.image} className='w-40 text-center mb-20 ' alt="" />
        </div>
        <div className=''>
            <p className='font-bold text-2xl '>{props.name}</p>
            <p className='text-xl leading-13'>{props.work}</p>
            <p className='text-sm'>{props.description}</p>
        </div>
    </div>
  )
}

export default Card