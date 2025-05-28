"use client"
import { motion } from "framer-motion"
import { School, TrendingUp, Group } from "@mui/icons-material"

export default function AboutTeam() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect p-8 rounded-lg text-center"
          >
            <School className="text-5xl text-blue-400 mb-6 mx-auto" />
            <h3 className="text-2xl font-bold mb-4 text-white">Continuous Learning</h3>
            <p className="text-gray-300">
              Our team is trained regularly on the latest marketing trends, tools, and communication strategies to stay
              ahead of the curve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-effect p-8 rounded-lg text-center"
          >
            <TrendingUp className="text-5xl text-green-400 mb-6 mx-auto" />
            <h3 className="text-2xl font-bold mb-4 text-white">Data-Driven Approach</h3>
            <p className="text-gray-300">
              We build a problem-solving, data-led mindset in everything we do, ensuring decisions are backed by solid
              metrics and insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-effect p-8 rounded-lg text-center"
          >
            <Group className="text-5xl text-purple-400 mb-6 mx-auto" />
            <h3 className="text-2xl font-bold mb-4 text-white">Strong Network</h3>
            <p className="text-gray-300">
              Our strong talent network and performance-based approach ensure that your sales strategy is always headed
              in the right direction.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
