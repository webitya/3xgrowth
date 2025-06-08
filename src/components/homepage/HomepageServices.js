"use client"
import { motion } from "framer-motion"
import {
  GpsFixed,
  ConnectWithoutContact,
  EventNote,
  Campaign,
  Business,
  Analytics,
  CheckCircle,
} from "@mui/icons-material"
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
      capabilities: [
        "Verified Prospect Data",
        "High-Intent Buyer Signals",
        "Industry-Specific Targeting",
        "Decision-Maker Identification",
      ],
      metrics: { accuracy: 99, coverage: 95, quality: 98 },
      timeline: "48 Hours",
    },
    {
      icon: <ConnectWithoutContact className="text-5xl text-emerald-400" />,
      title: "Breakthrough",
      subtitle: "First connection is your first conversion",
      description:
        "We help you initiate real conversations with decision-makers—whether they're CXOs, mid-level managers, or SME founders. With Breakthrough, we get you that all-important first interaction with interested prospects.",
      output: "First contact with interested prospects",
      formerly: "Connect",
      capabilities: [
        "Multi-Channel Outreach",
        "Personalized Messaging",
        "Executive Targeting",
        "Intent-Based Engagement",
      ],
      metrics: { response: 500, engagement: 85, conversion: 75 },
      timeline: "72 Hours",
    },
    {
      icon: <EventNote className="text-5xl text-purple-400" />,
      title: "Pipeline",
      subtitle: "Generate real meetings, not just leads",
      description:
        "Through our ICP-led framework, client interaction systems, and proven messaging strategies, we help you consistently book qualified appointments with decision-makers.",
      output: "Sales-qualified appointments",
      formerly: "Generate",
      capabilities: ["ICP-Led Framework", "Proven Messaging", "Qualified Appointment Booking", "Sales-Ready Leads"],
      metrics: { meetings: 300, qualification: 90, conversion: 80 },
      timeline: "96 Hours",
    },
    {
      icon: <Campaign className="text-5xl text-pink-400" />,
      title: "Influence",
      subtitle: "Turn meetings into movements",
      description:
        "We create and deliver strategic communications that help your brand stay top-of-mind and influence decisions across the buying committee.",
      output: "Persuasive communication sent to stakeholders to accelerate decision-making",
      formerly: "",
      capabilities: [
        "Strategic Communications",
        "Stakeholder Engagement",
        "Decision Acceleration",
        "Brand Positioning",
      ],
      metrics: { influence: 250, acceleration: 70, impact: 95 },
      timeline: "120 Hours",
    },
  ]

  return (
    <section className="py-0 pb-10 px-4 bg-gradient-to-br from-white via-green-50 to-white relative overflow-hidden">
      {/* Corporate service grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px),
              linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px),
              radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.4) 0%, transparent 50%)
            `,
            backgroundSize: "120px 120px, 120px 120px, 30px 30px, 30px 30px, 100% 100%, 100% 100%",
          }}
          className="w-full h-full"
        />
      </div>

      {/* Corporate data streams */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
            style={{
              left: `${i * 8.33 + 4}%`,
              height: "100%",
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 7 + i * 0.3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
    

        <NeuralInterface className="mb-16 py-10">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-slate-500">Our Enterprise</span>
              <span
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent ml-3"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "serviceFlow 4s ease-in-out infinite",
                }}
              >
                Services
              </span>
            </h2>

            <div className="max-w-4xl mx-auto bg-white backdrop-blur-xl border border-blue-400/20 rounded-2xl p-8">
              <p className="text-xl text-slate-500 leading-relaxed mb-4">
                Comprehensive <span className="text-blue-500 font-semibold">B2B marketing solutions</span> designed to
                accelerate your business growth through proven strategies.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed">
                <span className="text-emerald-500 font-semibold">Expert execution</span> backed by 8+ years of
                enterprise experience and 100+ successful client transformations.
              </p>
            </div>
          </div>
        </NeuralInterface>

        {/* Corporate services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <HolographicPanel
                title={`SERVICE ${index + 1}: ENTERPRISE`}
                variant={index % 3 === 0 ? "primary" : index % 3 === 1 ? "secondary" : "accent"}
                level={5}
                className="h-full"
              >
                <div className="space-y-6">
                  {/* Corporate service header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <motion.div
                          className="transform transition-transform duration-300 hover:scale-110"
                          style={{
                            filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.6))",
                          }}
                        >
                          {service.icon}
                        </motion.div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                          <Business className="text-slate-900 text-xs" />
                        </div>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-600 text-white border border-blue-400/30">
                        ENTERPRISE
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-600">Delivery</div>
                      <div className="text-sm font-bold text-emerald-600">{service.timeline}</div>
                    </div>
                  </div>

                  {/* Corporate service definition */}
                  <div className="bg-slate-white rounded-lg p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-slate-600">{service.title}</h3>
                      {service.formerly && (
                        <span className="text-xs text-slate-600 bg-white px-2 py-1 rounded">
                          Formerly: {service.formerly}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-blue-600 font-medium mb-3">{service.subtitle}</p>
                    <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
                  </div>

                  {/* Corporate capabilities matrix */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-600 flex items-center">
                      <Analytics className="text-emerald-500 text-sm mr-2" />
                      Enterprise Capabilities:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-center space-x-2 bg-white rounded px-3 py-2">
                          <CheckCircle className="text-emerald-500 text-xs" />
                          <span className="text-xs text-slate-500">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Corporate performance metrics */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-500">Performance Metrics:</h4>
                    {Object.entries(service.metrics).map(([metric, value]) => (
                      <div key={metric} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-600 capitalize">{metric.replace(/([A-Z])/g, " $1")}</span>
                          <span className="text-emerald-600 font-bold">
                            {typeof value === "number" && value > 100 ? `+${value}%` : `${value}%`}
                          </span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1">
                          <div
                            className="h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${Math.min(value, 100)}%` }}
                            transition={{ duration: 1.5, delay: index * 0.2 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Corporate output delivery */}
                  <div className="pt-4 border-t border-slate-700 bg-emerald-900/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Business className="text-emerald-500 text-sm" />
                      <span className="text-xs text-slate-500 font-semibold">Enterprise Output:</span>
                    </div>
                    <div className="text-sm font-medium text-emerald-500">{service.output}</div>
                  </div>
                </div>
              </HolographicPanel>
            </div>
          ))}
        </div>

        {/* Corporate action center */}
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <HolographicPanel
            title="ENTERPRISE DEPLOYMENT CENTER"
            variant="primary"
            level={5}
            className="max-w-5xl mx-auto"
          >
            <div className="space-y-8">
              {/* Corporate deployment header */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Business className="text-blue-500 text-3xl" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-slate-500">Ready to Transform Your B2B Marketing?</h3>
                  <p className="text-sm text-blue-500">Enterprise-Grade Solutions Available Now</p>
                </div>
              </div>

              <p className="text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto">
                Let s discuss which services are right for your business and create a
                <span className="text-blue-500 font-semibold"> customized growth strategy</span> backed by our proven
                enterprise methodologies.
              </p>

              {/* Corporate action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <QuantumButton variant="primary" size="large" className="relative overflow-hidden">
                  <Link href="/services" className="block relative z-10">
                    <div className="flex items-center space-x-2">
                      <Analytics className="text-lg text-blue-500" />
                      <span className="text-zinc-500">Explore Enterprise Solutions</span>
                    </div>
                  </Link>
                </QuantumButton>

                <QuantumButton variant="secondary" size="large" className="relative overflow-hidden">
                  <Link href="/contact" className="block relative z-10">
                    <div className="flex items-center space-x-2">
                      <Business className="text-lg text-purple-500" />
                      <span className="text-zinc-500">Schedule Consultation</span>
                    </div>
                  </Link>
                </QuantumButton>
              </div>

              {/* Corporate metrics dashboard */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
                {[
                  { label: "Enterprise Clients", value: "100+", icon: "🏢" },
                  { label: "Years Experience", value: "8+", icon: "⭐" },
                  { label: "Growth Results", value: "3x", icon: "📈" },
                ].map((metric, index) => (
                  <div
                    key={index}
                    className="text-center bg-white rounded-lg p-4 border border-blue-400/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-2xl mb-2">{metric.icon}</div>
                    <div className="text-2xl font-bold text-emerald-500 mb-1">{metric.value}</div>
                    <div className="text-xs text-slate-600">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Corporate guarantee */}
              <div className="bg-white rounded-lg p-6 border border-blue-400/30">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Business className="text-blue-500" />
                  <span className="text-blue-500 font-bold">Enterprise Performance Guarantee</span>
                </div>
                <p className="text-sm text-slate-500">
                  Proven strategies, expert execution, and measurable results backed by 8+ years of enterprise success
                </p>
              </div>
            </div>
          </HolographicPanel>
        </div>
      </div>

      <style jsx>{`
        @keyframes serviceFlow {
          0%, 100% {
            background-position: 0% 50%;
            filter: hue-rotate(0deg) brightness(1) contrast(1.1);
          }
          25% {
            background-position: 100% 50%;
            filter: hue-rotate(90deg) brightness(1.1) contrast(1.2);
          }
          50% {
            background-position: 100% 100%;
            filter: hue-rotate(180deg) brightness(1.2) contrast(1.3);
          }
          75% {
            background-position: 0% 100%;
            filter: hue-rotate(90deg) brightness(1.1) contrast(1.2);
          }
        }
      `}</style>
    </section>
  )
}
