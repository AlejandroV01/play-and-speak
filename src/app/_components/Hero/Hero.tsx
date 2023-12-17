import React from 'react'
import { PrimaryButton } from '../Buttons/Buttons'
const Hero = () => {
  return (
    <div className='ml-auto mr-auto max-w-[1170px] w-full px-6 relative '>
      <div className='pt-[60px]'></div>
      <div className='flex flex-col items-center gap-10 mt-[100px]'>
        <h1 className='text-gradient text-5xl lg:text-7xl font-bold text-center max-w-[800px]'>A Language Exchange Platform For Gamers</h1>
        <p className='text-neutral-400 text-md lg:text-lg max-w-[500px] text-center '>
          Unlock fluency, loot languages, and conquer gaming realms with Loot Language. Where gaming meets global communication.
        </p>
        <div className='flex gap-5'>
          <PrimaryButton text='Get Started' color='bg-blue-500' textBlack={false} />
          <PrimaryButton text='Get Started' color='bg-white' textBlack />
        </div>
      </div>
    </div>
  )
}

export default Hero
