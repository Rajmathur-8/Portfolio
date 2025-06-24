"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

interface Education {
  id: number
  institution: string
  degree: string
  duration: string
  location: string
  grade: string
  description: string
}

interface EducationProps {
  data: Education[]
}

export default function Education({ data }: EducationProps) {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-600"></div>

          {data.map((education, index) => (
            <motion.div
              key={education.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full border-4 border-slate-900 z-10"></div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="flex items-start mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mr-4">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{education.degree}</h3>
                      <h4 className="text-lg text-purple-400 font-semibold mb-2">{education.institution}</h4>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-400 mb-3">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {education.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {education.location}
                        </div>
                      </div>

                      <div className="flex items-center mb-3">
                        <Award className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-yellow-400 font-semibold">{education.grade}</span>
                      </div>

                      <p className="text-gray-300 text-sm">{education.description}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
