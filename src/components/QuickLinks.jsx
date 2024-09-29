import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const QuickLinks = ({ links }) => (
  <Card className="bg-white shadow-md">
    <CardHeader>
      <CardTitle className="text-[#001f3f]">Quick Links</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <a href={link.url} className="text-[#FFD700] hover:underline flex items-center">
              {link.icon}
              <span className="ml-2">{link.text}</span>
            </a>
          </motion.li>
        ))}
      </ul>
    </CardContent>
  </Card>
)

export default QuickLinks