"use client"
import { motion } from "framer-motion"
import { TrendingUp, Event, Group, Speed } from "@mui/icons-material"

export default function ProjectsStats() {
  const stats = [
    {
      icon: <TrendingUp className="text-4xl text-blue-400" />,
      number: "300%",
      label: "Average ROI Increase",
      description: "Our clients see significant returns on their marketing investment",
    },
    {
      icon: <Event className="text-4xl text-green-400" />,
      number: "5000+",
      label: "Qualified Appointments",
      description: "Sales-ready meetings generated for our clients",
    },
    {
      icon: <Group className="text-4xl text-purple-400" />,
      number: "100+",
      label: "Companies Served",
      description: "Businesses transformed across various industries",
    },
    {
      icon: <Speed className="text-4xl text-pink-400" />,
      number: "30 Days",
      label: "Time to Results",
      description: "Average time to see measurable improvements",
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
            <span className="gradient-text">Results That Speak</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers don't lie. Here's the impact we've made across our client portfolio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect p-8 rounded-lg text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold mb-2 gradient-text">{stat.number}</h3>
              <p className="text-lg font-semibold text-white mb-2">{stat.label}</p>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
