"use client"
import { motion } from "framer-motion"
import { Assignment, School, TrendingUp } from "@mui/icons-material"
import HolographicPanel from "@/components/advanced/HolographicPanel"
import NeuralInterface from "@/components/advanced/NeuralInterface"

export default function HomepageDifferentiators() {
  const differentiators = [
    {
      icon: <Assignment className="text-5xl text-blue-400" />,
      title: "Output-Driven Accountability",
      subtitle: "We take ownership of results",
      description:
        "We don't just offer support—we take ownership. From planning to execution, we deliver better results than your in-house marketing team.",
      capabilities: ["Clear Output Commitments", "Performance Guarantees", "Results-Based Approach", "Full Ownership"],
      businessValue: "Better than in-house teams",
    },
    {
      icon: <School className="text-5xl text-purple-400" />,
      title: "Culture of Training & Process",
      subtitle: "Continuous learning and improvement",
      description:
        "Our team is trained regularly on the latest marketing trends, tools, and communication strategies. We build a problem-solving, data-led mindset in everything we do.",
      capabilities: [
        "Regular Training Programs",
        "Latest Marketing Trends",
        "Data-Led Mindset",
        "Problem-Solving Culture",
      ],
      businessValue: "Always ahead of the curve",
    },
    {
      icon: <TrendingUp className="text-5xl text-emerald-400" />,
      title: "ROI-Obsessed Delivery",
      subtitle: "Metrics-driven performance",
      description:
        "Whether it's leads, engagement, or conversions, our work is driven by metrics. We focus on delivering real ROI that moves the needle for your sales team.",
      capabilities: ["Metrics-Driven Approach", "ROI Optimization", "Sales Team Support", "Performance Tracking"],
      businessValue: "Measurable business impact",
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-950/20 to-slate-900 relative overflow-hidden">
      {/* Advanced neural field */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 70%),
              linear-gradient(45deg, transparent 24%, rgba(59, 130, 246, 0.1) 25%, rgba(59, 130, 246, 0.1) 26%, transparent 27%)
            `,
            backgroundSize: "100% 100%, 100% 100%, 100% 100%, 80px 80px",
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
              <span className="text-slate-200">What Sets Us</span>
              <span
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent ml-3"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "neuralPulse 4s ease-in-out infinite",
                }}
              >
                Apart
              </span>
            </h2>

            <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Our <span className="text-blue-300 font-medium">performance-driven approach</span> and commitment to
              excellence ensures we deliver results that exceed your expectations through
              <span className="text-emerald-300 font-medium"> proven methodologies and expert execution</span>.
            </p>
          </motion.div>
        </NeuralInterface>

        {/* Differentiators grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <HolographicPanel
              key={index}
              title={`ADVANTAGE ${index + 1}`}
              variant={index === 0 ? "primary" : index === 1 ? "secondary" : "accent"}
              level={5}
              className="h-full"
            >
              <div className="space-y-6">
                {/* Icon and title */}
                <div className="text-center">
                  <motion.div
                    className="mb-4 transform transition-transform duration-300 hover:scale-110"
                    style={{
                      animation: `float 6s ease-in-out infinite ${index * 0.5}s`,
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-200 mb-2">{item.title}</h3>
                  <p className="text-sm text-blue-300 font-medium mb-3">{item.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>

                {/* Capabilities */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-slate-300">Key Capabilities:</h4>
                  {item.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                      <span className="text-xs text-slate-400">{capability}</span>
                    </div>
                  ))}
                </div>

                {/* Business value */}
                <div className="text-center pt-4 border-t border-slate-700">
                  <span className="text-lg font-bold text-emerald-400">{item.businessValue}</span>
                </div>
              </div>
            </HolographicPanel>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes neuralPulse {
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  )
}
