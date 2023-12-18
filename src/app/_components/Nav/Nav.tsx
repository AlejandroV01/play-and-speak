/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import React from 'react'
import { PrimaryButton } from '../Buttons/Buttons'
const Nav = () => {
  return (
    <div className=' h-[60px] w-full px-5 lg:px-12 flex gap-10 items-center z-10 justify-between bg-neutral-950 bg-opacity-40'>
      <div className='flex items-center '>
        <Link className='flex gap-2 items-center md:mr-12 cursor-pointer' href={'/'}>
          <img src='Logo.png' alt='' className='w-[50px]' />
          <h1 className='text-2xl text-white font-bold'>Questlang</h1>
        </Link>
        <Link className='text-white cursor-pointer hover:bg-blue-950 rounded-lg py-2 px-3 font-bold hidden md:block' href={'/'}>
          Home
        </Link>
        <Link className='text-white cursor-pointer hover:bg-blue-950 rounded-lg py-2 px-3 font-bold hidden md:block' href={'/register'}>
          Find a Partner
        </Link>
      </div>
      <div className='hidden md:flex gap-5 z-10 items-center'>
        <PrimaryButton text='Get Started' color='bg-blue-500' textBlack={false} hoverColor='hover:bg-blue-600' to='/register' />
        <PrimaryButton text='Login' color='bg-white' textBlack hoverColor='hover:bg-neutral-400' to='/login' />
      </div>
    </div>
  )
}

export default Nav
