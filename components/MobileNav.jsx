"use client"
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { CiMenuFries } from "react-icons/ci";
import Link from 'next/link'

const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Services',
        path: '/services'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Portfolio',
        path: '/portfolio'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
    
]

const MobileNav = () => {
    const pathname=usePathname()
  return (
    <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className='text-[20px] text-black'/>
        </SheetTrigger>
        <SheetContent className='flex flex-col'>
            <div className="mt-5 mb-20 text-center text-xl">
                <Link href='/'>
                <h1 className="text-2xl font-semibold">
                    Sankalpa Designs
                </h1>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-6">
                {links.map((link,index)=>{
                    return(
                        <Link href={link.path} key={index} className={`${link.path===pathname && 'text-black border-b-2 border-accent'} text-lg capitalize hover:text-black transition-all`}>
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav