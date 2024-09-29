import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const NewsAndEvents = ({ news, events }) => (
  <Card className="bg-white shadow-md">
    <CardHeader className="bg-white text-[#001f3f] shadow-md border border-gray-300">
      <CardTitle>News & Events</CardTitle>
    </CardHeader>
    <CardContent>
      <Tabs defaultValue="news">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="news" className="text-[#001f3f]">Latest News</TabsTrigger>
          <TabsTrigger value="events" className="text-[#001f3f]">Upcoming Events</TabsTrigger>
        </TabsList>
        <TabsContent value="news">
          <ul className="space-y-2">
            {news.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="border-b pb-2"
              >
                <h3 className="font-semibold text-[#001f3f]">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.date}</p>
              </motion.li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="events">
          <ul className="space-y-2">
            {events.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="border-b pb-2"
              >
                <h3 className="font-semibold text-[#001f3f]">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.date}</p>
              </motion.li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </CardContent>
  </Card>
)

export default NewsAndEvents
