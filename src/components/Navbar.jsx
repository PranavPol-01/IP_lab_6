import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Search, Menu, ChevronDown } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    const navItems = [
      { name: 'About', subcategories: ['Overview', 'Vision & Mission', 'Leadership'] },
      { name: 'Academics', subcategories: ['Departments', 'Programs', 'Research'] },
      { name: 'Admissions', subcategories: ['Undergraduate', 'Postgraduate', 'International'] },
      { name: 'Student Life', subcategories: ['Clubs', 'Events', 'Sports'] },
      { name: 'Placements', subcategories: ['Statistics', 'Recruiters', 'Internships'] },
    ]
  
    return (
      <nav className="bg-blue-900 text-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg" alt="VESIT Logo" width={50} height={50} className="rounded-full" />
            <div>
              <div className="text-2xl font-bold text-white">VESIT</div>
              <div className="text-sm hidden md:block text-gray-300">Vivekanand Education Society's Institute of Technology</div>
            </div>
          </div>
          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Button variant="ghost" className="text-gray-200">
                  {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-md py-2 hidden group-hover:block"
                >
                  {item.subcategories.map((sub) => (
                    <a key={sub} href="#" className="block px-4 py-2 hover:bg-gray-100">
                      {sub}
                    </a>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-200">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-200 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-blue-900 text-gray-200"
        >
          {navItems.map((item) => (
            <div key={item.name} className="px-4 py-2">
              <Button variant="ghost" className="text-gray-200 w-full justify-start">
                {item.name}
              </Button>
            </div>
          ))}
        </motion.div>
      )}
    </nav>
  )
  }

export default Navbar;