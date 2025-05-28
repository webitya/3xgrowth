"use client"
import { motion } from "framer-motion"
import { Schedule, TrendingUp, Group, Speed } from "@mui/icons-material"

export default function ContactInfo() {
  const benefits = [
    {
      icon: <Schedule className="text-3xl text-blue-400" />,
      title: "Quick Response",
      description: "We respond to all inquiries within 24 hours",
    },
    {
      icon: <TrendingUp className="text-3xl text-green-400" />,
      title: "Free Consultation",
      description: "Get a complimentary strategy session to discuss your needs",
    },
    {
      icon: <Group className="text-3xl text-purple-400" />,
      title: "Expert Team",
      description: "Work directly with our experienced marketing professionals",
    },
    {
      icon: <Speed className="text-3xl text-pink-400" />,
      title: "Fast Implementation",
      description: "Start seeing results within the first 30 days",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div className="glass-effect p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 gradient-text">Why Choose 3xGrowth?</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          We're not just another marketing agency. We're your growth partners, committed to delivering measurable
          results that impact your bottom line.
        </p>

        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0">{benefit.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="glass-effect p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Get Started?</h3>
        <p className="text-gray-300 mb-6">
          Book a free 30-minute consultation to discuss your B2B marketing challenges and discover how we can help you
          achieve 3x growth.
        </p>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-gray-300">Analyze your current marketing strategy</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-gray-300">Identify growth opportunities</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-gray-300">Create a customized action plan</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
