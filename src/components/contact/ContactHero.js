"use client"
import { motion } from "framer-motion"
import { Email, Phone, LocationOn } from "@mui/icons-material"

export default function ContactHero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 pt-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-blue-400">Get In Touch</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto">
            Ready to 3x your growth? Let s discuss how we can transform your B2B marketing and sales operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="glass-effect p-6 rounded-lg">
            <Email className="text-blue-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2 text-zinc-500">Email Us</h3>
            <p className="text-gray-400">contact@3xgrowth.in</p>
          </div>
          <div className="glass-effect p-6 rounded-lg">
            <Phone className="text-green-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2 text-zinc-500">Call Us</h3>
            <p className="text-gray-500">+91 6200207379</p>
          </div>
          <div className="glass-effect p-6 rounded-lg">
            <LocationOn className="text-purple-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-zinc-500 mb-2">Location</h3>
            <p className="text-gray-500">D Block, Jayshree Green City, Argora, Ranchi, Jharkhand, India</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
