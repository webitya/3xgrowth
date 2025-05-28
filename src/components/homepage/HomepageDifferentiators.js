"use client"
import { motion } from "framer-motion"
import { Assignment, School, TrendingUp } from "@mui/icons-material"

export default function HomepageDifferentiators() {
  const differentiators = [
    {
      icon: <Assignment className="text-5xl text-blue-400" />,
      title: "Output-Driven Accountability",
      description:
        "We don't just offer support—we take ownership. From planning to execution, we deliver better results than your in-house marketing team.",
    },
    {
      icon: <School className="text-5xl text-purple-400" />,
      title: "Culture of Training & Process",
      description:
        "Our team is trained regularly on the latest marketing trends, tools, and communication strategies. We build a problem-solving, data-led mindset in everything we do.",
    },
    {
      icon: <TrendingUp className="text-5xl text-green-400" />,
      title: "ROI-Obsessed Delivery",
      description:
        "Whether it's leads, engagement, or conversions, our work is driven by metrics. We focus on delivering real ROI that moves the needle for your sales team.",
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
            <span className="gradient-text">What Sets Us Apart</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect p-8 rounded-lg hover:bg-white/20 transition-all duration-300 floating-animation"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
