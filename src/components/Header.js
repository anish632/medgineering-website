'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
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
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Contact
            </button>
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
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 mt-2"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
