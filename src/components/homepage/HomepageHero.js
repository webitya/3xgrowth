"use client"
import { motion } from "framer-motion"
// import { TrendingUp, Speed, Target } from "@mui/icons-material"
import { TrendingUp, Speed, CenterFocusStrong } from "@mui/icons-material";

import Link from "next/link"

export default function HomepageHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">We help you reach,</span>
            <br />
            <span className="text-white">connect, and convert</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Market is big and the sky is the limit. At 3xGrowth, we help you identify, engage, and influence the buying
            decisions of your most valuable prospects.
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            We're a performance-driven B2B marketing company focused on lead generation and brand building through
            Account-Based Marketing and precision targeting strategies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link
            href="/contact"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 neon-glow"
          >
            Start Your Growth Journey
          </Link>
          <Link
            href="/services"
            className="glass-effect hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            Explore Our Services
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="glass-effect p-6 rounded-lg">
            <TrendingUp className="text-blue-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Growth Focused</h3>
            <p className="text-gray-400">Scalable strategies that grow with your business</p>
          </div>
          <div className="glass-effect p-6 rounded-lg">
            <Speed className="text-purple-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Fast Results</h3>
            <p className="text-gray-400">Quick implementation and rapid ROI delivery</p>
          </div>
          <div className="glass-effect p-6 rounded-lg">
            <CenterFocusStrong  className="text-pink-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Precision Targeting</h3>
            <p className="text-gray-400">Account-based marketing for qualified leads</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
