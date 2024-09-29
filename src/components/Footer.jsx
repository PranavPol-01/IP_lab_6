
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, ChevronDown, Search, Menu , GraduationCap, BookOpen, Users, Briefcase} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-12 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p>Hashu Advani Memorial Complex, Collector's Colony, Chembur, Mumbai - 400074</p>
                <p>Phone: +91 22 6153 9400</p>
                <p>Email: vesit@ves.ac.in</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-gray-300">Facebook</a>
                  <a href="#" className="hover:text-gray-300">Twitter</a>
                  <a href="#" className="hover:text-gray-300">LinkedIn</a>
                  <a href="#" className="hover:text-gray-300">Instagram</a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <form className="flex space-x-2 ">
                  <Input type="email" placeholder="Enter your email" className="bg-gray-100 text-primary" />
                  <Button variant="secondary" className="bg-gray-300">Subscribe</Button>
                </form>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p>&copy; 2023 Vivekanand Education Society's Institute of Technology. All rights reserved.</p>
            </div>
          </div>
        </footer>
  );
};

export default Footer;
