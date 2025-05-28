"use client"
import { motion } from "framer-motion"
import { School, Business } from "@mui/icons-material"

export default function AboutStory() {
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
            <span className="gradient-text">Our Story</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect p-8 rounded-lg"
          >
            <School className="text-5xl text-blue-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-white">Sister Company of Sales Syllabus</h3>
            <p className="text-gray-300 leading-relaxed">
              3xGrowth Consulting is a sister company of Sales Syllabus — India s largest leadership learning platform
              for sales and marketing teams. This connection gives us unique insights into what works in B2B sales and
              marketing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-effect p-8 rounded-lg"
          >
            <Business className="text-5xl text-purple-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-white">8 Years of Excellence</h3>
            <p className="text-gray-300 leading-relaxed">
              With over 8 years of experience, we ve worked with 100+ companies to understand what works—and what
              doesn t—in B2B sales and marketing. Our deep operational understanding and strong talent network ensure
              success.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass-effect p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Our Mission</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              To help organizations reduce mistakes in marketing and sales, maximize efficiency, and get faster results.
              Our performance-based approach ensures that your sales strategy is always headed in the right direction.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
