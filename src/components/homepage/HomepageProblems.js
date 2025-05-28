"use client"
import { motion } from "framer-motion"
import { Group, TrendingDown, Schedule, Warning, ErrorOutline, Business } from "@mui/icons-material"
import HolographicPanel from "@/components/advanced/HolographicPanel"
import NeuralInterface from "@/components/advanced/NeuralInterface"

export default function HomepageProblems() {
  const businessChallenges = [
    {
      icon: <Group className="text-4xl text-red-400" />,
      title: "You don't have a marketing team",
      subtitle: "Resource Gap Analysis",
      description:
        "Building an in-house marketing team is expensive, time-consuming, and requires specialized expertise that's hard to find and retain in today's competitive market.",
      impact: "No lead generation, missed opportunities, stagnant growth",
      metrics: { cost: "85% Higher", time: "6+ Months", risk: "High Turnover" },
      severity: "Critical",
    },
    {
      icon: <TrendingDown className="text-4xl text-orange-400" />,
      title: "Your current team isn't performing",
      subtitle: "Performance Optimization Required",
      description:
        "Your marketing efforts aren't generating the quality leads and ROI you expected, despite significant investment in resources, tools, and training programs.",
      impact: "Wasted budget, poor ROI, frustrated sales team",
      metrics: { roi: "-60% Below Target", efficiency: "Low Output", quality: "Poor Leads" },
      severity: "High",
    },
    {
      icon: <Schedule className="text-4xl text-yellow-400" />,
      title: "Your team is working, but sales remain low and slow",
      subtitle: "Conversion Acceleration Needed",
      description:
        "Despite marketing activities and lead generation efforts, your sales pipeline isn't converting at the rate needed for sustainable business growth and market expansion.",
      impact: "Long sales cycles, low conversion rates, revenue stagnation",
      metrics: { cycles: "3x Longer", conversion: "Low Rate", velocity: "Slow Pipeline" },
      severity: "Medium",
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-950 via-red-950/10 to-slate-950 relative overflow-hidden">
      {/* Corporate warning grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.4) 1px, transparent 1px),
              radial-gradient(circle at 30% 30%, rgba(239, 68, 68, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(251, 146, 60, 0.3) 0%, transparent 50%)
            `,
            backgroundSize: "50px 50px, 50px 50px, 100% 100%, 100% 100%",
          }}
          className="w-full h-full"
        />
      </div>

      {/* Corporate data streams */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-red-400/20 to-transparent"
            style={{
              left: `${i * 12.5 + 6}%`,
              height: "100%",
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scaleY: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
     

        <NeuralInterface className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-4xl font-black mb-6">
              <span
                className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "warningPulse 3s ease infinite",
                }}
              >
                What s Stopping You
              </span>
              <br />
              <span className="text-slate-200">From Achieving Wonders?</span>
            </h2>

            <div className="max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-xl border border-red-400/20 rounded-2xl p-8">
              <p className="text-xl text-slate-300 leading-relaxed mb-4">
                We understand the <span className="text-red-300 font-semibold">critical challenges</span> that prevent
                enterprises from achieving their growth potential.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Let s solve it with{" "}
                <span className="text-emerald-300 font-semibold">accountability, accuracy, and action</span>.
              </p>
            </div>
          </motion.div>
        </NeuralInterface>

        {/* Corporate challenge analysis grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {businessChallenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <HolographicPanel
                title={`RISK FACTOR ${index + 1}: ${challenge.severity.toUpperCase()}`}
                variant={index === 0 ? "primary" : index === 1 ? "secondary" : "accent"}
                level={4}
                className="h-full"
              >
                <div className="space-y-6">
                  {/* Corporate challenge header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        {challenge.icon}
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                          <ErrorOutline className="text-white text-xs" />
                        </div>
                      </div>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          challenge.severity === "Critical"
                            ? "bg-red-500/20 text-red-300 border border-red-400/30"
                            : challenge.severity === "High"
                              ? "bg-orange-500/20 text-orange-300 border border-orange-400/30"
                              : "bg-yellow-500/20 text-yellow-300 border border-yellow-400/30"
                        }`}
                      >
                        {challenge.severity.toUpperCase()} RISK
                      </span>
                    </div>
                  </div>

                  {/* Corporate problem definition */}
                  <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50">
                    <h3 className="text-xl font-bold text-slate-200 mb-2">{challenge.title}</h3>
                    <p className="text-sm text-blue-300 font-medium mb-3">{challenge.subtitle}</p>
                    <p className="text-slate-400 leading-relaxed text-sm">{challenge.description}</p>
                  </div>

                  {/* Corporate impact metrics */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-300 flex items-center">
                      <Business className="text-red-400 text-sm mr-2" />
                      Business Impact Metrics:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {Object.entries(challenge.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center bg-slate-800/20 rounded px-3 py-2">
                          <span className="text-xs text-slate-500 capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                          <span className="text-xs font-bold text-red-400">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Corporate consequence analysis */}
                  <div className="pt-4 border-t border-slate-700">
                    <h4 className="text-sm font-semibold text-red-300 mb-2">Operational Consequences:</h4>
                    <p className="text-xs text-slate-500 bg-red-900/10 rounded p-2 border border-red-400/20">
                      {challenge.impact}
                    </p>
                  </div>

                  {/* Corporate risk indicator */}
                  <div className="flex items-center justify-between text-xs pt-2">
                    <span className="text-slate-500">Risk Level</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-slate-800 rounded-full h-1">
                        <motion.div
                          className={`h-1 rounded-full ${
                            challenge.severity === "Critical"
                              ? "bg-red-500"
                              : challenge.severity === "High"
                                ? "bg-orange-500"
                                : "bg-yellow-500"
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{
                            width:
                              challenge.severity === "Critical"
                                ? "100%"
                                : challenge.severity === "High"
                                  ? "75%"
                                  : "50%",
                          }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                        />
                      </div>
                      <span className="text-red-400 font-bold">
                        {challenge.severity === "Critical" ? "100%" : challenge.severity === "High" ? "75%" : "50%"}
                      </span>
                    </div>
                  </div>
                </div>
              </HolographicPanel>
            </motion.div>
          ))}
        </div>

        {/* Corporate solution preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <HolographicPanel
            title="ENTERPRISE SOLUTION MATRIX"
            variant="primary"
            level={5}
            className="max-w-5xl mx-auto"
          >
            <div className="space-y-8">
              {/* Corporate solution header */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Business className="text-emerald-400 text-3xl" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-slate-200">3xGrowth Enterprise Solution</h3>
                  <p className="text-sm text-emerald-300">Risk Mitigation & Growth Acceleration Protocol</p>
                </div>
              </div>

              <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
                Our <span className="text-blue-300 font-semibold">performance-driven approach</span> eliminates these
                enterprise challenges through proven B2B marketing strategies, expert execution, and
                <span className="text-emerald-300 font-semibold"> measurable results</span>.
              </p>

              {/* Corporate success metrics */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { label: "Risk Reduction", value: "-85%", icon: "🛡️" },
                  { label: "ROI Improvement", value: "+300%", icon: "📈" },
                  { label: "Implementation Speed", value: "48h", icon: "⚡" },
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    className="bg-slate-800/30 rounded-lg p-4 border border-emerald-400/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-2xl mb-2">{metric.icon}</div>
                    <div className="text-2xl font-bold text-emerald-400">{metric.value}</div>
                    <div className="text-xs text-slate-500">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Corporate guarantee */}
              <div className="bg-emerald-900/20 rounded-lg p-6 border border-emerald-400/30">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Business className="text-emerald-400" />
                  <span className="text-emerald-300 font-bold">Enterprise Performance Guarantee</span>
                </div>
                <p className="text-sm text-slate-400">
                  Accountability, accuracy, and action - backed by 8+ years of proven enterprise success
                </p>
              </div>
            </div>
          </HolographicPanel>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes warningPulse {
          0%, 100% { 
            background-position: 0% 50%; 
            filter: brightness(1) contrast(1.1);
          }
          50% { 
            background-position: 100% 50%; 
            filter: brightness(1.2) contrast(1.3);
          }
        }
      `}</style>
    </section>
  )
}
