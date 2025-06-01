"use client"
import { motion } from "framer-motion"
import { Build, TrendingUp, CenterFocusStrong} from "@mui/icons-material"

export default function ServicesHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-purple-400">Our Services</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-4xl mx-auto">
            Comprehensive B2B marketing solutions designed to accelerate your growth through precision targeting and
            proven strategies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="glass-effect p-6 rounded-lg">
            <Build className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-zinc-600">Build</h3>
            <p className="text-gray-600">Precise targeting and data building</p>
          </div>
          <div className="glass-effect p-6 rounded-lg">
            <CenterFocusStrong className="text-purple-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-zinc-600">Connect</h3>
            <p className="text-gray-600">First contact with prospects</p>
          </div>
          <div className="glass-effect p-6 rounded-lg">
            <TrendingUp className="text-green-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-zinc-600">Convert</h3>
            <p className="text-gray-600">Generate qualified appointments</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
