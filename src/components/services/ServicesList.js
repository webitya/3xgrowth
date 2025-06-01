"use client"
import { motion } from "framer-motion"
import { GpsFixed, ConnectWithoutContact, EventNote, Campaign, CheckCircle } from "@mui/icons-material"

export default function ServicesList() {
  const services = [
    {
      icon: <GpsFixed className="text-6xl text-blue-600" />,
      title: "Pinpoint",
      subtitle: "Define your ideal customer with precision",
      description:
        "We build customized datasets based on verified, high-intent buyer signals—pain points, decision roles, and industry relevance—ensuring that your sales effort starts with qualified leads.",
      features: [
        "Verified prospect data",
        "High-intent buyer signals",
        "Industry-specific targeting",
        "Decision-maker identification",
      ],
      output: "Ready-to-use target account list",
      formerly: "Enrich",
    },
    {
      icon: <ConnectWithoutContact className="text-6xl text-green-600" />,
      title: "Breakthrough",
      subtitle: "First connection is your first conversion",
      description:
        "We help you initiate real conversations with decision-makers—whether they're CXOs, mid-level managers, or SME founders. With Breakthrough, we get you that all-important first interaction with interested prospects.",
      features: [
        "Multi-channel outreach",
        "Personalized messaging",
        "Decision-maker targeting",
        "Intent-based engagement",
      ],
      output: "First contact with interested prospects",
      formerly: "Connect",
    },
    {
      icon: <EventNote className="text-6xl text-purple-600" />,
      title: "Pipeline",
      subtitle: "Generate real meetings, not just leads",
      description:
        "Through our ICP-led framework, client interaction systems, and proven messaging strategies, we help you consistently book qualified appointments with decision-makers.",
      features: [
        "ICP-led framework",
        "Proven messaging strategies",
        "Qualified appointment booking",
        "Sales-ready leads",
      ],
      output: "Sales-qualified appointments",
      formerly: "Generate",
    },
    {
      icon: <Campaign className="text-6xl text-pink-600" />,
      title: "Influence",
      subtitle: "Turn meetings into movements",
      description:
        "We create and deliver strategic communications that help your brand stay top-of-mind and influence decisions across the buying committee.",
      features: ["Strategic communications", "Stakeholder engagement", "Decision acceleration", "Brand positioning"],
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
            <span className="text-purple-400">Complete Service Portfolio</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            From identifying prospects to closing deals, we cover every aspect of your B2B marketing journey
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-3xl font-bold mb-2 text-zinc-600">{service.title}</h3>
                <p className="text-xl text-blue-500 mb-6">{service.subtitle}</p>
                <p className="text-gray-500 mb-8 leading-relaxed text-lg">{service.description}</p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-500 text-xl" />
                      <span className="text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="glass-effect p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-2">
                    <span className="font-semibold text-green-500">Output:</span> {service.output}
                  </p>
                  {service.formerly && <p className="text-sm text-gray-500">Formerly Known As: {service.formerly}</p>}
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="glass-effect p-8 rounded-lg h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4 opacity-20">{service.icon}</div>
                    <h4 className="text-2xl font-bold gradient-text">{service.title}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
