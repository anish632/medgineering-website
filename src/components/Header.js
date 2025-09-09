'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo400.png" 
              alt="MEDGineering Logo" 
              width={60} 
              height={60}
              className="mr-3"
            />
            <div>
              <h1 className="text-2xl font-bold text-blue-800">MEDGineering</h1>
              <p className="text-sm text-gray-600">Medical Engineering Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Home
            </Link>
            <Link 
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              About
            </Link>
            <Link 
              href="/services"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Services
            </Link>
            <Link 
              href="/portfolio"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Portfolio
            </Link>
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <Link 
              href="/"
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about"
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services"
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/portfolio"
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              href="/contact"
              className="block w-full text-left py-2 bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
