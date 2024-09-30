import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Bell} from 'lucide-react'
const AnnouncementBanner = ({ announcement }) => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-yellow-500 text-black py-2"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Bell className="mr-2 h-5 w-5" />
          <span>{announcement}</span>
        </div>
        <Button variant="ghost" size="sm">Learn More</Button>
      </div>
    </motion.div>
  )

export default AnnouncementBanner;