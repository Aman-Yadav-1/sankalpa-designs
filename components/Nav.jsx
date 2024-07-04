"use client"
import { usePathname } from 'next/navigation'
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
const Nav = () => {
    const pathname = usePathname()
  return (
    <nav className="flex gap-8">
        {links.map((link,index)=>{
            return(
                <Link href={link.path} key={index} className={`${link.path===pathname && 'text-gray-600'} capitalize font-medium hover:text-gray-500 transition-all`}>
                    {link.name}
                </Link>
            )
        })}
    </nav>
  )
}

export default Nav