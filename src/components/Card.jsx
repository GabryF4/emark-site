import React from 'react'

const Card = ({name, role, description, img}) => {
  return (
    <div className='text-black bg-white w-2xs flex flex-col p-6 rounded-3xl py-10'>
        <div className='flex justify-center'>
            <img src={img} className='w-40 text-center mb-20 ' alt="" />
        </div>
        <div className=''>
            <p className='font-bold text-2xl '>{name}</p>
            <p className='text-xl leading-13'>{role}</p>
            <p className='text-sm'>{description}</p>
        </div>
    </div>
  )
}

export default Card