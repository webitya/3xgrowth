"use client"
import { motion } from "framer-motion"
// import { Search, Event, Influence } from "@mui/icons-material"
import { Search, Event, Link, Stars } from '@mui/icons-material';


export default function ServicesProcess() {
  const steps = [
    {
      icon: <Search className="text-4xl text-blue-500" />,
      title: "Pinpoint",
      description: "Identify and build your ideal customer database",
    },
    {
      icon: <Link className="text-4xl text-green-500" />,
      title: "Breakthrough",
      description: "Make first contact with qualified prospects",
    },
    {
      icon: <Event className="text-4xl text-purple-500" />,
      title: "Pipeline",
      description: "Convert contacts into sales appointments",
    },
    {
      icon: <Stars className="text-4xl text-pink-500" />,
      title: "Influence",
      description: "Nurture and accelerate decision-making",
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
            <span className="gradient-text">Our Process</span>
          </h2>
          <p className="text-xl text-gray-50 max-w-3xl mx-auto">
            A systematic approach to B2B marketing that delivers consistent results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="glass-effect p-6 rounded-lg text-center hover:bg-white/20 transition-all duration-300">
                <div className="mb-4">{step.icon}</div>
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-50">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
