"use client"
import { motion } from "framer-motion"
import { Business, TrendingUp, Group } from "@mui/icons-material"

export default function AboutHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-blue-500">About 3xGrowth</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
            We exist with one mission: To help organizations reduce mistakes in marketing and sales, maximize
            efficiency, and get faster results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="glass-effect p-6 rounded-lg">
            <Business className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl text-zinc-800 font-semibold mb-2">8+ Years</h3>
            <p className="text-gray-700">Of B2B marketing expertise</p>
          </div>
          <div className="glass-effect p-6 rounded-lg">
            <Group className="text-purple-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl text-zinc-800 font-semibold mb-2">100+ Companies</h3>
            <p className="text-gray-700">Successfully transformed</p>
          </div>
          <div className="glass-effect p-6 rounded-lg">
            <TrendingUp className="text-green-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl text-zinc-800 font-semibold mb-2">300% ROI</h3>
            <p className="text-gray-700">Average improvement</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
