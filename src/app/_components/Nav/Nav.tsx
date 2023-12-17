import React from 'react'

const Nav = () => {
  return (
    <div className='fixed top-0 h-[60px] w-full px-5 lg:px-12 flex gap-10  items-center z-10'>
      <div className='flex gap-2 items-center'>
        <img src='Logo.png' alt='' className='w-[50px]' />
        <h1 className='text-2xl text-white font-bold'>Questlang</h1>
      </div>
      <p className='text-white cursor-pointer hover:bg-blue-950 rounded-lg py-2 px-3'>Find a Partner</p>
    </div>
  )
}

export default Nav
