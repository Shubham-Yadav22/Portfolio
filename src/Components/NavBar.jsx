import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils'
import { X, Menu } from 'lucide-react'

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
]

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed w-full z-40 transition-all duration-300",
      isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>
      <div className='container flex items-center justify-between'>
        <a className='text-xl font-bold text-primary flex items-center' href='#hero'>
          <span className='relative z-10'>
            <span className='text-glow text-foreground'>Shubham's</span> Portfolio
          </span>
        </a>

        <div className='hidden md:flex space-x-8'>
          {navItems.map((item, key) => (
            <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300'>
              {item.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className='md:hidden text-foreground p-2 z-50'
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu - Always in Dark Mode */}
        <div className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          "bg-neutral-900 text-white backdrop-blur-md", // <- Force dark style
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          <div className='flex flex-col space-y-8 text-xl'>
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className='text-white hover:text-primary transition-colors duration-300'
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
