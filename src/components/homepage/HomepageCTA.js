"use client"
import { motion } from "framer-motion"
import { RocketLaunch, TrendingUp, Speed, Business } from "@mui/icons-material"
import Link from "next/link"
import HolographicPanel from "@/components/advanced/HolographicPanel"
import NeuralInterface from "@/components/advanced/NeuralInterface"
import QuantumButton from "@/components/advanced/QuantumButton"

export default function HomepageCTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-950/30 via-purple-950/30 to-emerald-950/30 relative overflow-hidden">
      {/* Background field */}
      <div className="absolute inset-0 opacity-10">
        <div
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.5) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(147, 51, 234, 0.5) 0%, transparent 50%),
              radial-gradient(circle at 50% 90%, rgba(16, 185, 129, 0.4) 0%, transparent 60%),
              linear-gradient(45deg, transparent 24%, rgba(59, 130, 246, 0.2) 25%, rgba(59, 130, 246, 0.2) 26%, transparent 27%)
            `,
            backgroundSize: "100% 100%, 100% 100%, 100% 100%, 120px 120px",
          }}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <NeuralInterface className="mb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* CTA header */}
            <div className="flex items-center justify-center mb-8">
              <RocketLaunch
                className="text-6xl text-blue-400 mr-4"
                style={{
                  animation: "quantumFloat 6s ease-in-out infinite",
                  filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))",
                }}
              />
              <div className="text-left">
                <div className="text-blue-400 text-sm font-semibold tracking-wider">READY TO START</div>
                <div className="text-slate-300 text-xs">Performance-Driven Results</div>
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-slate-200">Ready to</span>
              <span
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent ml-3"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "enterprisePulse 4s ease-in-out infinite",
                }}
              >
                3x Your Growth?
              </span>
            </h2>

            <p className="text-xl text-slate-400 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join <span className="text-blue-300 font-medium">100+ companies</span> that have transformed their B2B
              marketing and sales operations with our{" "}
              <span className="text-emerald-300 font-medium">proven strategies</span>
              and expert execution.
            </p>
          </motion.div>
        </NeuralInterface>

        {/* Action matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Primary action */}
          <HolographicPanel title="GET STARTED" variant="primary" level={5}>
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-200 mb-3">Start Talking to Your Prospects Today</h3>
                <p className="text-slate-400 leading-relaxed">
                  Begin your growth journey with our proven B2B marketing strategies and see results within weeks.
                </p>
              </div>

              <div className="space-y-4">
                <QuantumButton variant="primary" size="large" className="w-full">
                  <Link href="/contact" className="block">
                    Start Your Growth Journey
                  </Link>
                </QuantumButton>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-emerald-400">Free</div>
                    <div className="text-xs text-slate-500">Consultation</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-400">Fast</div>
                    <div className="text-xs text-slate-500">Results</div>
                  </div>
                </div>
              </div>
            </div>
          </HolographicPanel>

          {/* Service exploration */}
          <HolographicPanel title="EXPLORE SERVICES" variant="secondary" level={4}>
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-200 mb-3">Discover Our Solutions</h3>
                <p className="text-slate-400 leading-relaxed">
                  Explore our comprehensive service portfolio and see how we can help transform your business.
                </p>
              </div>

              <div className="space-y-4">
                <QuantumButton variant="secondary" size="large" className="w-full">
                  <Link href="/services" className="block">
                    View All Services
                  </Link>
                </QuantumButton>

                <QuantumButton variant="accent" size="medium" className="w-full">
                  <Link href="/projects" className="block">
                    See Success Stories
                  </Link>
                </QuantumButton>
              </div>
            </div>
          </HolographicPanel>
        </div>

        {/* Performance metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <HolographicPanel title="PROVEN PERFORMANCE" variant="accent" level={5} className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: <TrendingUp className="text-3xl text-emerald-400" />,
                  metric: "3x",
                  label: "Growth Acceleration",
                  description: "Average business growth",
                },
                {
                  icon: <Speed className="text-3xl text-blue-400" />,
                  metric: "8+",
                  label: "Years Experience",
                  description: "Proven track record",
                },
                {
                  icon: <Business className="text-3xl text-purple-400" />,
                  metric: "100+",
                  label: "Companies Served",
                  description: "Successful transformations",
                },
                {
                  icon: <RocketLaunch className="text-3xl text-pink-400" />,
                  metric: "ROI",
                  label: "Focused Delivery",
                  description: "Measurable results",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex justify-center">{item.icon}</div>
                  <div className="text-2xl font-bold text-slate-200">{item.metric}</div>
                  <div className="text-sm font-medium text-slate-300">{item.label}</div>
                  <div className="text-xs text-slate-500">{item.description}</div>
                </motion.div>
              ))}
            </div>

            {/* Guarantee */}
            <div className="mt-8 pt-8 border-t border-slate-700 text-center">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-500/20 rounded-lg border border-emerald-400/30">
                <Business className="text-emerald-400 text-lg" />
                <span className="text-emerald-300 font-semibold">Performance-Driven Results Guaranteed</span>
              </div>
              <p className="text-sm text-slate-400 mt-3">
                Accountability, accuracy, and action - that's our commitment to your success
              </p>
            </div>
          </HolographicPanel>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes quantumFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes enterprisePulse {
          0%, 100% {
            background-position: 0% 50%;
            filter: hue-rotate(0deg) brightness(1);
          }
          25% {
            background-position: 100% 50%;
            filter: hue-rotate(90deg) brightness(1.1);
          }
          50% {
            background-position: 100% 100%;
            filter: hue-rotate(180deg) brightness(1.2);
          }
          75% {
            background-position: 0% 100%;
            filter: hue-rotate(270deg) brightness(1.1);
          }
        }
      `}</style>
    </section>
  )
}
