"use client"
import { motion } from "framer-motion"
import { Assignment, School, TrendingUp, Business, Analytics, Security } from "@mui/icons-material"
import HolographicPanel from "@/components/advanced/HolographicPanel"
import NeuralInterface from "@/components/advanced/NeuralInterface"

export default function HomepageDifferentiators() {
  const differentiators = [
    {
      icon: <Assignment className="text-5xl text-blue-400" />,
      title: "Output-Driven Accountability",
      subtitle: "Enterprise Performance Ownership",
      description:
        "We don't just offer support—we take complete ownership. From strategic planning to tactical execution, we deliver measurably better results than your in-house marketing team.",
      capabilities: [
        "Performance-Based Contracts",
        "Guaranteed Output Delivery",
        "Real-Time ROI Tracking",
        "Executive Reporting Dashboard",
      ],
      businessValue: "Better than in-house teams",
      metrics: { accountability: 100, delivery: 98, performance: 95 },
      badge: "GUARANTEED",
    },
    {
      icon: <School className="text-5xl text-purple-400" />,
      title: "Culture of Training & Process",
      subtitle: "Continuous Excellence Framework",
      description:
        "Our team undergoes rigorous training on the latest marketing trends, enterprise tools, and advanced communication strategies. We build a problem-solving, data-led mindset in everything we do.",
      capabilities: [
        "Weekly Training Programs",
        "Industry Certification Requirements",
        "Data-Driven Decision Making",
        "Continuous Process Optimization",
      ],
      businessValue: "Always ahead of the curve",
      metrics: { training: 97, innovation: 94, expertise: 99 },
      badge: "CERTIFIED",
    },
    {
      icon: <TrendingUp className="text-5xl text-emerald-400" />,
      title: "ROI-Obsessed Delivery",
      subtitle: "Metrics-Driven Performance Engine",
      description:
        "Whether it's lead generation, engagement optimization, or conversion acceleration, our work is driven by enterprise-grade metrics. We focus on delivering measurable ROI that directly impacts your bottom line.",
      capabilities: [
        "Advanced Analytics Integration",
        "Revenue Attribution Modeling",
        "Performance Optimization Algorithms",
        "Executive KPI Dashboards",
      ],
      businessValue: "Measurable business impact",
      metrics: { roi: 300, efficiency: 96, impact: 98 },
      badge: "PROVEN",
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-950/20 to-slate-900 relative overflow-hidden">
      {/* Corporate excellence grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px),
              linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px),
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.4) 0%, transparent 50%)
            `,
            backgroundSize: "100px 100px, 100px 100px, 25px 25px, 25px 25px, 100% 100%, 100% 100%",
          }}
          className="w-full h-full"
        />
      </div>

      {/* Corporate data visualization */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
            style={{
              left: `${i * 10 + 5}%`,
              height: "100%",
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 6 + i * 0.3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Corporate excellence header */}
       

        <NeuralInterface className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-4xl font-black mb-6">
              <span className="text-slate-200">What Sets Us</span>
              <span
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent ml-3"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "corporateExcellence 4s ease-in-out infinite",
                }}
              >
                Apart
              </span>
            </h2>

            <div className="max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-8">
              <p className="text-xl text-slate-300 leading-relaxed mb-4">
                Our <span className="text-blue-300 font-semibold">performance-driven approach</span> and commitment to
                enterprise excellence ensures we deliver results that exceed expectations.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Through{" "}
                <span className="text-emerald-300 font-semibold">proven methodologies and expert execution</span>, we
                provide unmatched value for enterprise clients.
              </p>
            </div>
          </motion.div>
        </NeuralInterface>

        {/* Corporate differentiators grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <HolographicPanel
                title={`ADVANTAGE ${index + 1}: ${item.badge}`}
                variant={index === 0 ? "primary" : index === 1 ? "secondary" : "accent"}
                level={5}
                className="h-full"
              >
                <div className="space-y-6">
                  {/* Corporate advantage header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <motion.div
                          className="transform transition-transform duration-300 hover:scale-110"
                          style={{
                            animation: `corporateFloat 6s ease-in-out infinite ${index * 0.5}s`,
                          }}
                        >
                          {item.icon}
                        </motion.div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center">
                          <Security className="text-slate-900 text-xs" />
                        </div>
                      </div>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          index === 0
                            ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                            : index === 1
                              ? "bg-purple-500/20 text-purple-300 border border-purple-400/30"
                              : "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Corporate value proposition */}
                  <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50">
                    <h3 className="text-2xl font-bold text-slate-200 mb-2">{item.title}</h3>
                    <p className="text-sm text-blue-300 font-medium mb-3">{item.subtitle}</p>
                    <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>
                  </div>

                  {/* Corporate capabilities matrix */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-300 flex items-center">
                      <Analytics className="text-emerald-400 text-sm mr-2" />
                      Enterprise Capabilities:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {item.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-center space-x-2 bg-slate-800/20 rounded px-3 py-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                          <span className="text-xs text-slate-400">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Corporate performance metrics */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-300">Performance Metrics:</h4>
                    {Object.entries(item.metrics).map(([metric, value]) => (
                      <div key={metric} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-500 capitalize">{metric}</span>
                          <span className="text-emerald-400 font-bold">{value}%</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1">
                          <motion.div
                            className="h-1 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${value}%` }}
                            transition={{ duration: 1.5, delay: index * 0.2 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Corporate business value */}
                  <div className="text-center pt-4 border-t border-slate-700 bg-emerald-900/10 rounded-lg p-3">
                    <Business className="text-emerald-400 text-lg mb-2" />
                    <span className="text-lg font-bold text-emerald-400">{item.businessValue}</span>
                  </div>
                </div>
              </HolographicPanel>
            </motion.div>
          ))}
        </div>

        {/* Corporate comparison matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <HolographicPanel
            title="ENTERPRISE COMPARISON MATRIX"
            variant="primary"
            level={5}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Traditional approach */}
              <div className="text-center space-y-4 bg-red-900/10 rounded-lg p-6 border border-red-400/20">
                <Business className="text-red-400 text-3xl mx-auto" />
                <h4 className="text-lg font-bold text-red-400">Traditional In-House</h4>
                <div className="space-y-2">
                  {["High Overhead Costs", "Limited Expertise", "Slow Adaptation", "Resource Constraints"].map(
                    (item, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-slate-500">
                        <div className="w-2 h-2 bg-red-400 rounded-full" />
                        <span>{item}</span>
                      </div>
                    ),
                  )}
                </div>
                <div className="bg-red-900/20 rounded-lg p-3 border border-red-400/30">
                  <div className="text-2xl font-bold text-red-400">-60%</div>
                  <div className="text-xs text-slate-500">Below Target ROI</div>
                </div>
              </div>

              {/* 3xGrowth advantage */}
              <div className="text-center space-y-4 bg-emerald-900/10 rounded-lg p-6 border border-emerald-400/20">
                <Analytics className="text-emerald-400 text-3xl mx-auto" />
                <h4 className="text-lg font-bold text-emerald-400">3xGrowth Enterprise</h4>
                <div className="space-y-2">
                  {["Performance Guarantee", "Expert Team", "Rapid Implementation", "Proven Results"].map(
                    (item, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-slate-300">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                        <span>{item}</span>
                      </div>
                    ),
                  )}
                </div>
                <div className="bg-emerald-900/20 rounded-lg p-3 border border-emerald-400/30">
                  <div className="text-2xl font-bold text-emerald-400">+300%</div>
                  <div className="text-xs text-slate-500">ROI Improvement</div>
                </div>
              </div>

              {/* Future potential */}
              <div className="text-center space-y-4 bg-blue-900/10 rounded-lg p-6 border border-blue-400/20">
                <Security className="text-blue-400 text-3xl mx-auto" />
                <h4 className="text-lg font-bold text-blue-400">Enterprise Future</h4>
                <div className="space-y-2">
                  {["Scalable Growth", "Market Leadership", "Competitive Advantage", "Sustainable Success"].map(
                    (item, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-slate-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        <span>{item}</span>
                      </div>
                    ),
                  )}
                </div>
                <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-400/30">
                  <div className="text-2xl font-bold text-blue-400">∞</div>
                  <div className="text-xs text-slate-500">Growth Potential</div>
                </div>
              </div>
            </div>
          </HolographicPanel>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes corporateExcellence {
          0%, 100% {
            background-position: 0% 50%;
            filter: hue-rotate(0deg) brightness(1) contrast(1.1);
          }
          25% {
            background-position: 100% 50%;
            filter: hue-rotate(60deg) brightness(1.1) contrast(1.2);
          }
          50% {
            background-position: 100% 100%;
            filter: hue-rotate(120deg) brightness(1.2) contrast(1.3);
          }
          75% {
            background-position: 0% 100%;
            filter: hue-rotate(60deg) brightness(1.1) contrast(1.2);
          }
        }

        @keyframes corporateFloat {
          0%, 100% {
            transform: translateY(0px) rotateY(0deg);
          }
          50% {
            transform: translateY(-15px) rotateY(5deg);
          }
        }
      `}</style>
    </section>
  )
}
