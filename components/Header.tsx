import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='shadow-sm'>
        <div className='max-w-[1000px] m-auto flex flex-row justify-between p-[10px]'>
            <Link href="/">
                <div className='relative h-[50px] w-[200px]'>
                    <Image 
                        src="/your-photos-icon.svg"
                        alt='dsfdsf'
                        layout='fill'
                        objectFit='contain' 
                        sizes='1'
                        />    
                </div>
            </Link>
            <div className='flex flex-row items-center text-[20px]'>
                <div className='relative h-[50px] w-[50px] ml-[20px]'>
                    <Image 
                        className='rounded-full'
                        src="/placeholder-img.jpg"
                        alt='dsfdsf'
                        layout='fill'
                        objectFit='contain' 
                        sizes='1'
                        />
                </div>
            </div>
        </div>
    </header>
  )
}
