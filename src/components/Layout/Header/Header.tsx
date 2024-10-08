import MobileNavbar from '@/components/MobileNavbar/MobileNavbar'
import Navbar from '@/components/Navbar/Navbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white '>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link href={"/"}>
          <h1 className='text-4xl font-semibold'>
            HeNg <span className='text-accent'>.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className='hidden xl:flex items-center gap-8'>
          <Navbar />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className='xl:hidden '>
          <MobileNavbar />
        </div>
      </div>
    </header>
  )
}

export default Header