"use client"
import { motion } from "framer-motion"
import { GpsFixed, ConnectWithoutContact, EventNote, Campaign } from "@mui/icons-material"
import Link from "next/link"

export default function HomepageServices() {
  const services = [
    {
      icon: <GpsFixed className="text-5xl text-blue-400" />,
      title: "Pinpoint",
      subtitle: "Define your ideal customer with precision",
      description:
        "We build customized datasets based on verified, high-intent buyer signals—pain points, decision roles, and industry relevance—ensuring that your sales effort starts with qualified leads.",
      output: "Ready-to-use target account list",
      formerly: "Enrich",
    },
    {
      icon: <ConnectWithoutContact className="text-5xl text-green-400" />,
      title: "Breakthrough",
      subtitle: "First connection is your first conversion",
      description:
        "We help you initiate real conversations with decision-makers—whether they're CXOs, mid-level managers, or SME founders. With Breakthrough, we get you that all-important first interaction with interested prospects.",
      output: "First contact with interested prospects",
      formerly: "Connect",
    },
    {
      icon: <EventNote className="text-5xl text-purple-400" />,
      title: "Pipeline",
      subtitle: "Generate real meetings, not just leads",
      description:
        "Through our ICP-led framework, client interaction systems, and proven messaging strategies, we help you consistently book qualified appointments with decision-makers.",
      output: "Sales-qualified appointments",
      formerly: "Generate",
    },
    {
      icon: <Campaign className="text-5xl text-pink-400" />,
      title: "Influence",
      subtitle: "Turn meetings into movements",
      description:
        "We create and deliver strategic communications that help your brand stay top-of-mind and influence decisions across the buying committee.",
      output: "Persuasive communication sent to stakeholders to accelerate decision-making",
      formerly: "",
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
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive B2B marketing solutions designed to accelerate your growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect p-8 rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-lg text-blue-300 mb-4">{service.subtitle}</p>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

              <div className="border-t border-gray-700 pt-4">
                <p className="text-sm text-gray-400 mb-2">
                  <span className="font-semibold text-green-400">Output:</span> {service.output}
                </p>
                {service.formerly && <p className="text-sm text-gray-500">Formerly Known As: {service.formerly}</p>}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 neon-glow inline-block"
          >
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
