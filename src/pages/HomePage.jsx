

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, ChevronDown, Search, Menu , GraduationCap, BookOpen, Users, Briefcase} from 'lucide-react'
import Navbar from '@/components/Navbar'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import Hero from '@/components/Hero'
import NewsAndEvents from '@/components/NewsAndEvents'
import AcademicPrograms from '@/components/AcademicPrograms'
import ResearchHighlights from '@/components/ResearchHighlights'
import CampusLife from '@/components/CampusLife'
import Testimonials from '@/components/Testimonials'
import QuickLinks from '@/components/QuickLinks'





 
  
  

  
 
  
  export default function EnhancedVESITHomepage() {
    const quickLinks = [
      { text: 'Student Portal', url: '#', icon: <motion.div whileHover={{ scale: 1.1 }}><Search className="h-4 w-4" /></motion.div> },
      { text: 'Faculty Directory', url: '#', icon: <motion.div whileHover={{ scale: 1.1 }}><Search className="h-4 w-4" /></motion.div> },
      { text: 'Library Catalog', url: '#', icon: <motion.div whileHover={{ scale: 1.1 }}><Search className="h-4 w-4" /></motion.div> },
      { text: 'Academic Calendar', url: '#', icon: <motion.div whileHover={{ scale: 1.1 }}><Search className="h-4 w-4" /></motion.div> },
      { text: 'Career Services', url: '#', icon: <motion.div whileHover={{ scale: 1.1 }}><Search className="h-4 w-4" /></motion.div> },
    ]
  
    const news = [
      { title: "VESIT Ranks in Top 10 Engineering Colleges", date: "May 15, 2023" },
      { title: "New AI Research Center Inaugurated", date: "May 10, 2023" },
      { title: "Students Win National Robotics Competition", date: "May 5, 2023" },
    ]
  
    const events = [
      { title: "Annual Tech Fest 'PRAXIS'", date: "June 1-3, 2023" },
      { title: "Industry Expert Guest Lecture Series", date: "May 25, 2023" },
      { title: "Campus Recruitment Drive", date: "June 10, 2023" },
    ]
  
    const programs = [
      { name: "Computer Engineering", degree: "B.Tech" },
      { name: "Electronics Engineering", degree: "B.Tech" },
      { name: "Information Technology", degree: "B.Tech" },
      { name: "Artificial Intelligence and Data Science", degree: "B.Tech" },
      { name: "Computer Science", degree: "M.Tech" },
      { name: "Internet of Things", degree: "M.Tech" },
    ]
  
    const researchHighlights = [
      { title: "AI in Healthcare", description: "Developing AI models for early disease detection and personalized treatment plans." },
      { title: "Sustainable Energy Solutions", description: "Research on efficient solar cell technologies and smart grid systems." },
      { title: "Cybersecurity Innovations", description: "Advanced encryption methods and network security protocols for the digital age." },
      { title: "Robotics and Automation", description: "Cutting-edge robotics research for industrial and domestic applications." },
    ]
  
    const campusActivities = [
      { name: "Sports", icon: <Users className="h-6 w-6" /> },
      { name: "Cultural Clubs", icon: <BookOpen className="h-6 w-6" /> },
      { name: "Tech Societies", icon: <GraduationCap className="h-6 w-6" /> },
      { name: "Community Service", icon: <Briefcase className="h-6 w-6" /> },
    ]
  
    const testimonials = [
      {
        quote: "VESIT has provided me with incredible opportunities to grow both academically and personally.",
        name: "Priya Sharma",
        program: "B.Tech Computer Engineering",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        quote: "The faculty's support and industry connections have been instrumental in shaping my career.",
        name: "Rahul Desai",
        program: "M.Tech Computer Science",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ]
    return (
        <div className="min-h-screen bg-background">
          <Navbar />
          <AnnouncementBanner announcement="VESIT awarded Autonomous Status for 10 years! Click to learn more." />
          <Hero />
          <div className="container mx-auto py-12 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-white shadow-md">
                    <CardHeader className="bg-[#001f3f] text-white">
                      <CardTitle className="text-[#FFD700]">Welcome to VESIT</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#001f3f]">
                        Vivekanand Education Society's Institute of Technology (VESIT) is committed to providing high-quality education in engineering and technology. Our state-of-the-art facilities, experienced faculty, and industry connections ensure that our students are well-prepared for successful careers in the ever-evolving tech landscape.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
                <NewsAndEvents news={news} events={events} />
                <AcademicPrograms programs={programs} />
                <ResearchHighlights highlights={researchHighlights} />
                <CampusLife activities={campusActivities} />
                <Testimonials testimonials={testimonials} />
              </div>
              <aside className="space-y-8">
                <QuickLinks links={quickLinks} />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Card className="bg-white shadow-md">
                    <CardHeader className="bg-[#001f3f] text-white">
                      <CardTitle className="text-[#FFD700]">Admissions Open</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-[#001f3f]">Join our vibrant community of learners and innovators. Applications for the upcoming academic year are now open.</p>
                      <Button className="w-full bg-[#FFD700] text-[#001f3f]">Apply Now</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </aside>
            </div>
          </div>
        </div>
      )
    }