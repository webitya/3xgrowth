"use client"
import { motion } from "framer-motion"
import { Group, TrendingDown, Schedule } from "@mui/icons-material"

export default function HomepageProblems() {
  const problems = [
    {
      icon: <Group className="text-4xl text-red-400" />,
      title: "You don't have a marketing team",
      description: "Building an in-house marketing team is expensive and time-consuming",
    },
    {
      icon: <TrendingDown className="text-4xl text-orange-400" />,
      title: "Your current team isn't performing",
      description: "Your marketing efforts aren't generating the results you expected",
    },
    {
      icon: <Schedule className="text-4xl text-yellow-400" />,
      title: "Your team is working, but sales remain low and slow",
      description: "Despite marketing activities, your sales pipeline isn't converting",
    },
  ]

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
            <span className="gradient-text">What's Stopping You</span>
            <br />
            <span className="text-white">From Achieving Wonders?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect p-8 rounded-lg text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">{problem.title}</h3>
              <p className="text-gray-400">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
            Let's solve it with accountability, accuracy, and action.
          </h3>
        </motion.div>
      </div>
    </section>
  )
}
