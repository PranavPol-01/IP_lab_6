import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

const Hero = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative h-[60vh] bg-[#001f3f] text-white overflow-hidden"
  >
    <img
      src="https://images.static-collegedunia.com/public/college_data/images/appImage/15528_VESIT.jpg"
      alt="VESIT Campus"
      // layout="fill"
      // objectFit="cover"
      className=" w-full h-full object-cover opacity-50 "
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 border-orange-600 text-[#FFD700]"
        >
          Welcome to VESIT
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl mb-8 text-gray-100 "
        >
          Empowering Minds, Innovating Tomorrow
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center space-x-4"
        >
          <Button size="lg" className="bg-[#FFD700] text-[#001f3f] shadow-md shadow-gray-500">Apply Now</Button>
          <Button size="lg" variant="outline" className="border-[#FFD700] text-[#FFD700] shadow-md shadow-gray-500">Virtual Tour</Button>
        </motion.div>
      </div>
    </div>
  </motion.div>
)

export default Hero