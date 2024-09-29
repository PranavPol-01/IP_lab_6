import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Hero = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative h-[60vh] bg-[#001f3f] text-white overflow-hidden"
  >
    <img
      src="/placeholder.svg?height=1080&width=1920"
      alt="VESIT Campus"
      layout="fill"
      objectFit="cover"
      className="opacity-50"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-[#FFD700]"
        >
          Welcome to VESIT
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl mb-8 text-[#C0C0C0]"
        >
          Empowering Minds, Innovating Tomorrow
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center space-x-4"
        >
          <Button size="lg" className="bg-[#FFD700] text-[#001f3f]">Apply Now</Button>
          <Button size="lg" variant="outline" className="border-[#FFD700] text-[#FFD700]">Virtual Tour</Button>
        </motion.div>
      </div>
    </div>
  </motion.div>
)

export default Hero