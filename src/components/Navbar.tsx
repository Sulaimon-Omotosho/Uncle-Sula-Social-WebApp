import React from 'react'
import MobileMenu from './MobileMenu'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='h-24 flex items-center justify-between'>
      {/* LEFT SIDE  */}
      <div className='md:hidden lg:block w-[20%]'>
        <Link href='/' className='text-blue-600 font-bold text-xl'>
          Uncle Sula
        </Link>
      </div>
      {/* CENTER SIDE  */}
      <div className='hidden md:flex w-[50%] text-sm'>
        {/* LINKS  */}
        <div className='flex gap-6 text-gray-600'>
          <Link href='/' className='flex gap-2 items-center'>
            <Image
              src='/home.png'
              alt='Homepage'
              width={16}
              height={16}
              className='w-4 h-4'
            />
            <span>Hompage</span>
          </Link>
          <Link href='/' className='flex gap-2 items-center'>
            <Image
              src='/friends.png'
              alt='Friends'
              width={16}
              height={16}
              className='w-4 h-4'
            />
            <span>Friends</span>
          </Link>
          <Link href='/' className='flex gap-2 items-center'>
            <Image
              src='/stories.png'
              alt='Stories'
              width={16}
              height={16}
              className='w-4 h-4'
            />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      {/* RIGHT SIDE  */}
      <div className='w-[30%] flex items-center gap-4 xl:g8 justify-end'>
        <MobileMenu />{' '}
      </div>
    </div>
  )
}

export default Navbar
