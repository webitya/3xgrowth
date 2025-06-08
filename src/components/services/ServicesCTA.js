"use client"
import { motion } from "framer-motion"
import { RocketLaunch, Schedule } from "@mui/icons-material"
import Link from "next/link"

export default function ServicesCTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <RocketLaunch className="text-6xl text-blue-500 mb-6 mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-green-400">Ready to Transform Your B2B Marketing?</span>
          </h2>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            Let s discuss which services are right for your business and create a customized growth strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 neon-glow"
            >
              Get Started Today
            </Link>
            <Link
              href="/projects"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 neon-glow"
            >
              View Case Studies
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="glass-effect p-6 rounded-lg">
              <Schedule className="text-blue-400 text-3xl mb-2 mx-auto" />
              <p className="text-lg font-semibold text-zinc-500">Free Consultation</p>
              <p className="text-gray-500">30-minute strategy session</p>
            </div>
            <div className="glass-effect p-6 rounded-lg">
              <RocketLaunch className="text-green-500 text-3xl mb-2 mx-auto" />
              <p className="text-lg font-semibold text-zinc-500">Quick Results</p>
              <p className="text-gray-500">See impact within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
