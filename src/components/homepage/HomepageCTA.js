"use client"
import { motion } from "framer-motion"
import { RocketLaunch, TrendingUp } from "@mui/icons-material"
import Link from "next/link"

export default function HomepageCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <RocketLaunch className="text-6xl text-blue-400 mb-6 mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Ready to 3x Your Growth?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 100+ companies that have transformed their B2B marketing and sales operations with our proven
            strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 neon-glow"
            >
              Start Your Journey Today
            </Link>
            <Link
              href="/projects"
              className="glass-effect hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>

          <div className="glass-effect p-6 rounded-lg inline-block">
            <TrendingUp className="text-green-400 text-3xl mb-2" />
            <p className="text-lg font-semibold text-white">Average ROI Increase</p>
            <p className="text-3xl font-bold gradient-text">300%+</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
