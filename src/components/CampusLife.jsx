import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const CampusLife = ({ activities }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <Card className="bg-[#001f3f] text-white">
      <CardHeader>
        <CardTitle className="text-[#FFD700]">Campus Life</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <div className="bg-[#FFD700] text-[#001f3f] rounded-full p-4 inline-block mb-2">
                {activity.icon}
              </div>
              <h3 className="font-semibold text-[#C0C0C0]">{activity.name}</h3>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

export default CampusLife
