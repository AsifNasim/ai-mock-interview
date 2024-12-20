'use client'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const Header = () => {
  const path = usePathname();
  useEffect(() => {
  }, [])
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
      <Image src={'/ai-mock-interview.svg'} alt='ai-mock-interview' width={160} height={160} />

      <ul className='hidden md:flex gap-6'>
        <li className={`hover:text-cyan-600 hover:font-bold transition-all cursor-pointer 
          ${path === '/dashboard' && 'text-cyan-600 font-bold' }`}>Dashboard</li>
        <li className={`hover:text-cyan-600 hover:font-bold transition-all cursor-pointer 
          ${path === '/questions' && 'text-cyan-600 font-bold' }`}>Questions</li>
        <li className={`hover:text-cyan-600 hover:font-bold transition-all cursor-pointer 
          ${path === '/upgrade' && 'text-cyan-600 font-bold' }`}>Upgrade</li>
        <li className={`hover:text-cyan-600 hover:font-bold transition-all cursor-pointer 
          ${path === '/how' && 'text-cyan-600 font-bold' }`}>How it works?</li>
      </ul>

      <UserButton />
    </div>
  )
}

export default Header