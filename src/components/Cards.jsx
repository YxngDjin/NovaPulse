import React from 'react'

const Cards = ({ title, description, icon }) => {
  return (
    <div className='w-full py-10 px-3 rounded-xl flex bg-gray-700/5 backdrop-blur-sm inset-shadow-card'>
        <div className='flex w-full items-center justify-evenly gap-4'>
            <img
                src={icon}
                className='w-10 h-10'
            />
            <div className='flex flex-col w-full '>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <p className='whitespace-nowrap text-2xl'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Cards