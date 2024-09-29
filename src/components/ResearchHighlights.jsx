import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ResearchHighlights = ({ highlights }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <Card className="bg-[#001f3f] text-white">
      <CardHeader>
        <CardTitle className="text-[#FFD700]">Research Highlights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-white text-[#001f3f] rounded-lg border border-[#C0C0C0]"
            >
              <h3 className="font-semibold mb-2">{highlight.title}</h3>
              <p className="text-sm text-gray-500">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

export default ResearchHighlights
