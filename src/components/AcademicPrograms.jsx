import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from 'lucide-react'

const AcademicPrograms = ({ programs }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="bg-white shadow-md">
      <CardHeader className="bg-[#001f3f] text-white">
        <CardTitle className="text-[#FFD700]">Academic Programs</CardTitle>
      </CardHeader>
      <CardContent  className="p-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 p-4 bg-[#C0C0C0] rounded-lg"
            >
              <GraduationCap className="h-8 w-8 text-[#001f3f]" />
              <div>
                <h3 className="font-semibold text-[#001f3f]">{program.name}</h3>
                <p className="text-sm text-gray-600">{program.degree}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

export default AcademicPrograms
