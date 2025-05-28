"use client"
import { motion } from "framer-motion"
import { Assignment, Speed, TrendingUp, Group } from "@mui/icons-material"

export default function AboutValues() {
  const values = [
    {
      icon: <Assignment className="text-5xl text-blue-400" />,
      title: "Accountability",
      description: "We take full ownership of results and deliver on our promises with complete transparency.",
    },
    {
      icon: <Speed className="text-5xl text-green-400" />,
      title: "Efficiency",
      description: "We maximize your resources and minimize waste through proven processes and strategies.",
    },
    {
      icon: <TrendingUp className="text-5xl text-purple-400" />,
      title: "Results-Driven",
      description: "Every action we take is measured against ROI and business impact metrics.",
    },
    {
      icon: <Group className="text-5xl text-pink-400" />,
      title: "Partnership",
      description: "We work as an extension of your team, not just another vendor or service provider.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Values</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">The principles that guide everything we do</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect p-6 rounded-lg text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
