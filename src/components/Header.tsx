'use client'

import React, { useState } from 'react'
import { Menu, X, User, Search } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center font-bold text-black">
              FC
            </div>
            <span className="text-xl font-bold">FA CHAI Gaming</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Games</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Promotions</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">VIP</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Support</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all">
              Login
            </button>
            <button className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="hover:text-yellow-400 transition-colors">Home</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Games</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Promotions</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">VIP</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Support</a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-semibold">
                  Login
                </button>
                <button className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold">
                  Sign Up
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
