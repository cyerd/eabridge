'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X, Bell, Globe, User } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/commodities', label: 'Commodities' },
    { href: '/markets', label: 'Markets' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/horizontal.jpeg"
            alt="East Africa Bridge Group"
            width={220}
            height={56}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-slate-600 transition-all hover:text-brand-secondary hover:scale-105 active:scale-95"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center space-x-4 ml-4 border-l pl-4">
            <button className="text-slate-600 hover:text-brand-primary transition-colors p-2 rounded-full hover:bg-slate-100" title="Language Switcher">
              <Globe className="h-5 w-5" />
            </button>
            <Link href="/admin/collections/notifications" className="text-slate-600 hover:text-brand-primary transition-colors p-2 rounded-full hover:bg-slate-100 relative" title="Notifications">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border border-white"></span>
            </Link>
          </div>

          <Link href="/login" className="text-slate-600 hover:text-brand-primary transition-colors p-2 rounded-full hover:bg-slate-100" title="Login">
            <User className="h-5 w-5" />
          </Link>

          <Link href="/contact">
            <Button className="bg-brand-primary text-white hover:bg-brand-primary/90">
              Request Sourcing Support
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-slate-600 hover:text-brand-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t bg-background px-4 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-base font-medium text-slate-600 hover:text-brand-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-brand-primary text-white hover:bg-brand-primary/90">
              Request Sourcing Support
            </Button>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
