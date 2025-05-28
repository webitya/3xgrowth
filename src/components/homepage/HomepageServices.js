"use client"
import { motion } from "framer-motion"
import { GpsFixed, ConnectWithoutContact, EventNote, Campaign } from "@mui/icons-material"
import Link from "next/link"
import HolographicPanel from "@/components/advanced/HolographicPanel"
import NeuralInterface from "@/components/advanced/NeuralInterface"
import QuantumButton from "@/components/advanced/QuantumButton"

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
      icon: <ConnectWithoutContact className="text-5xl text-emerald-400" />,
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
    <section className="py-24 px-4 bg-gradient-to-br from-slate-950 via-blue-950/10 to-slate-950 relative overflow-hidden">
      {/* Service field background */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 70%),
              linear-gradient(45deg, transparent 24%, rgba(59, 130, 246, 0.1) 25%, rgba(59, 130, 246, 0.1) 26%, transparent 27%)
            `,
            backgroundSize: "100% 100%, 100% 100%, 100% 100%, 100px 100px",
          }}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <NeuralInterface className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-slate-200">Our</span>
              <span
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent ml-3"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "quantumFlow 4s ease-in-out infinite",
                }}
              >
                Services
              </span>
            </h2>

            <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Comprehensive <span className="text-blue-300 font-medium">B2B marketing solutions</span> designed to
              accelerate your business growth through proven strategies and
              <span className="text-emerald-300 font-medium"> expert execution</span>.
            </p>
          </motion.div>
        </NeuralInterface>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <HolographicPanel
              key={index}
              title={`SERVICE ${index + 1}`}
              variant={index % 3 === 0 ? "primary" : index % 3 === 1 ? "secondary" : "accent"}
              level={5}
              className="h-full"
            >
              <div className="space-y-6">
                {/* Service header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className="transform transition-transform duration-300 hover:scale-110"
                      style={{
                        filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.6))",
                      }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                  {service.formerly && (
                    <div className="text-right">
                      <div className="text-xs text-slate-500">Formerly</div>
                      <div className="text-sm font-bold text-slate-400">{service.formerly}</div>
                    </div>
                  )}
                </div>

                {/* Service definition */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-200 mb-2">{service.title}</h3>
                  <p className="text-sm text-blue-300 font-medium mb-3">{service.subtitle}</p>
                  <p className="text-slate-400 leading-relaxed text-sm">{service.description}</p>
                </div>

                {/* Output */}
                <div className="pt-4 border-t border-slate-700">
                  <div className="text-xs text-slate-500 mb-1">Output Delivery:</div>
                  <div className="text-sm font-medium text-emerald-400">{service.output}</div>
                </div>
              </div>
            </HolographicPanel>
          ))}
        </div>

        {/* Action center */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <HolographicPanel title="GET STARTED TODAY" variant="primary" level={5} className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-200 mb-4">Ready to Transform Your B2B Marketing?</h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Let's discuss which services are right for your business and create a
                  <span className="text-blue-300 font-medium"> customized growth strategy</span>.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <QuantumButton variant="primary" size="large">
                  <Link href="/services" className="block">
                    Explore All Services
                  </Link>
                </QuantumButton>

                <QuantumButton variant="secondary" size="large">
                  <Link href="/contact" className="block">
                    Get Started Today
                  </Link>
                </QuantumButton>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
                {[
                  { label: "Companies Served", value: "100+" },
                  { label: "Years Experience", value: "8+" },
                  { label: "Proven Results", value: "3x Growth" },
                ].map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">{metric.value}</div>
                    <div className="text-xs text-slate-500">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </HolographicPanel>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes quantumFlow {
          0%, 100% {
            background-position: 0% 50%;
            filter: hue-rotate(0deg);
          }
          25% {
            background-position: 100% 50%;
            filter: hue-rotate(90deg);
          }
          50% {
            background-position: 100% 100%;
            filter: hue-rotate(180deg);
          }
          75% {
            background-position: 0% 100%;
            filter: hue-rotate(270deg);
          }
        }
      `}</style>
    </section>
  )
}
