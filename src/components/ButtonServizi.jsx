import React from 'react'

const ButtonServizi = (props) => {
  return (
    <button className='bg-white rounded-full py-1 px-7' id='button-serv'>
        <span className='text-md'>{props.title}</span>
    </button>
  )
}

export default ButtonServizi