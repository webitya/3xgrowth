"use client"
import { motion } from "framer-motion"
import { Group, TrendingDown, Schedule, Warning } from "@mui/icons-material"
import HolographicPanel from "@/components/advanced/HolographicPanel"
import NeuralInterface from "@/components/advanced/NeuralInterface"

export default function HomepageProblems() {
  const businessChallenges = [
    {
      icon: <Group className="text-4xl text-red-400" />,
      title: "You don't have a marketing team",
      description:
        "Building an in-house marketing team is expensive, time-consuming, and requires specialized expertise that's hard to find and retain.",
      impact: "No lead generation, missed opportunities, stagnant growth",
    },
    {
      icon: <TrendingDown className="text-4xl text-orange-400" />,
      title: "Your current team isn't performing",
      description:
        "Your marketing efforts aren't generating the quality leads and ROI you expected, despite significant investment in resources and tools.",
      impact: "Wasted budget, poor ROI, frustrated sales team",
    },
    {
      icon: <Schedule className="text-4xl text-yellow-400" />,
      title: "Your team is working, but sales remain low and slow",
      description:
        "Despite marketing activities and lead generation efforts, your sales pipeline isn't converting at the rate needed for sustainable growth.",
      impact: "Long sales cycles, low conversion rates, revenue stagnation",
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-950 via-red-950/10 to-slate-950 relative overflow-hidden">
      {/* Advanced warning field */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, rgba(239, 68, 68, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(251, 146, 60, 0.3) 0%, transparent 50%),
              linear-gradient(45deg, transparent 24%, rgba(239, 68, 68, 0.1) 25%, rgba(239, 68, 68, 0.1) 26%, transparent 27%)
            `,
            backgroundSize: "100% 100%, 100% 100%, 60px 60px",
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
            {/* Business intelligence header */}
            <div className="flex items-center justify-center mb-6">
              <Warning className="text-red-400 text-3xl mr-3" />
              <span className="text-red-400 text-sm font-semibold tracking-wider">BUSINESS CHALLENGES</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span
                className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "warningPulse 3s ease infinite",
                }}
              >
                What's Stopping You
              </span>
              <br />
              <span className="text-slate-200">From Achieving Wonders?</span>
            </h2>

            <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              We understand the <span className="text-blue-300 font-medium">common challenges</span> that prevent
              businesses from achieving their growth potential. Let's solve it with{" "}
              <span className="text-emerald-300 font-medium">accountability, accuracy, and action</span>.
            </p>
          </motion.div>
        </NeuralInterface>

        {/* Advanced problem analysis grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {businessChallenges.map((challenge, index) => (
            <HolographicPanel
              key={index}
              title={`CHALLENGE ${index + 1}`}
              variant={index === 0 ? "primary" : index === 1 ? "secondary" : "accent"}
              level={3}
              className="h-full"
            >
              <div className="space-y-6">
                {/* Challenge icon and title */}
                <div className="text-center">
                  <div className="mb-4">{challenge.icon}</div>
                  <h3 className="text-xl font-bold text-slate-200 mb-4">{challenge.title}</h3>
                </div>

                {/* Problem description */}
                <div>
                  <p className="text-slate-400 leading-relaxed text-sm mb-4">{challenge.description}</p>
                </div>

                {/* Business impact */}
                <div className="pt-4 border-t border-slate-700">
                  <h4 className="text-sm font-semibold text-red-300 mb-2">Business Impact:</h4>
                  <p className="text-xs text-slate-500">{challenge.impact}</p>
                </div>
              </div>
            </HolographicPanel>
          ))}
        </div>

        {/* Solution preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <HolographicPanel title="THE 3XGROWTH SOLUTION" variant="primary" level={5} className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-200">
                Let's solve it with accountability, accuracy, and action
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                Our <span className="text-blue-300 font-medium">performance-driven approach</span> eliminates these
                challenges through proven B2B marketing strategies, expert execution, and{" "}
                <span className="text-emerald-300 font-medium">measurable results</span>.
              </p>

              {/* Success metrics preview */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { label: "Faster Results", value: "3x" },
                  { label: "Better ROI", value: "300%" },
                  { label: "Proven Success", value: "100+" },
                ].map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">{metric.value}</div>
                    <div className="text-xs text-slate-500">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </HolographicPanel>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes warningPulse {
          0%, 100% { 
            background-position: 0% 50%; 
            filter: brightness(1);
          }
          50% { 
            background-position: 100% 50%; 
            filter: brightness(1.2);
          }
        }
      `}</style>
    </section>
  )
}
