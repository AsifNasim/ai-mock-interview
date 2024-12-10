import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
      <Image src={'/ai-mock-interview.svg'} alt='ai-mock-interview' width={160} height={160} />

      <ul className='flex gap-6'>
        <li>Dashboard</li>
        <li>Questions</li>
        <li>Upgrade</li>
        <li>How it works?</li>
      </ul>

      <UserButton />
    </div>
  )
}

export default Header