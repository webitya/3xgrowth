"use client"
import { motion } from "framer-motion"
import { TrendingUp, Business, Group } from "@mui/icons-material"

export default function ProjectsHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Success Stories</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Discover how we've helped 100+ companies transform their B2B marketing and achieve remarkable growth
            results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="glass-effect p-6 rounded-lg">
            <Business className="text-blue-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">100+</h3>
            <p className="text-gray-400">Companies Transformed</p>
          </div>
          <div className="glass-effect p-6 rounded-lg">
            <TrendingUp className="text-green-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">300%</h3>
            <p className="text-gray-400">Average ROI Increase</p>
          </div>
          <div className="glass-effect p-6 rounded-lg">
            <Group className="text-purple-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">8 Years</h3>
            <p className="text-gray-400">Of Proven Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
