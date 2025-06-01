"use client"
import { motion } from "framer-motion"
import { RocketLaunch, TrendingUp, Speed, Business, Analytics, Security } from "@mui/icons-material"
import Link from "next/link"
import HolographicPanel from "@/components/advanced/HolographicPanel"
import NeuralInterface from "@/components/advanced/NeuralInterface"
import QuantumButton from "@/components/advanced/QuantumButton"

export default function HomepageCTA() {
  return (
    <section className="py-0 pb-10 px-4 bg-gradient-to-br from-white via-purple-50 to-emerald-50 relative overflow-hidden">
      {/* Corporate CTA grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(rgba(147, 51, 234, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.4) 1px, transparent 1px),
              radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.5) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(147, 51, 234, 0.5) 0%, transparent 50%),
              radial-gradient(circle at 50% 90%, rgba(16, 185, 129, 0.4) 0%, transparent 60%)
            `,
            backgroundSize: "150px 150px, 150px 150px, 40px 40px, 40px 40px, 100% 100%, 100% 100%, 100% 100%",
          }}
          className="w-full h-full"
        />
      </div>

      {/* Corporate success indicators */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent"
            style={{
              left: `${i * 6.67 + 3}%`,
              height: "100%",
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scaleY: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 8 + i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
  

        <NeuralInterface className="mb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* Corporate CTA header */}
       

            <h2 className="text-5xl md:text-6xl font-black mb-6 py-5">
              <span className="text-slate-600">Ready to</span>
              <span
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent ml-3"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "corporatePulse 4s ease-in-out infinite",
                }}
              >
                3x Your Growth?
              </span>
            </h2>

            <div className="max-w-4xl mx-auto bg-white backdrop-blur-xl border border-blue-400/20 rounded-2xl p-8">
              <p className="text-xl text-slate-600 mb-4 leading-relaxed">
                Join <span className="text-blue-600 font-semibold">100+ enterprise companies</span> that have
                transformed their B2B marketing and sales operations with our proven strategies.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                <span className="text-emerald-600 font-semibold">Expert execution</span> and measurable results backed
                by 8+ years of enterprise success.
              </p>
            </div>
          </motion.div>
        </NeuralInterface>

        {/* Corporate action matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Primary deployment */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HolographicPanel title="PRIMARY DEPLOYMENT" variant="primary" level={5}>
              <div className="space-y-6">
                <div className="text-center">
                  <Business className="text-blue-4600 text-4xl mb-4" />
                  <h3 className="text-2xl font-bold text-slate-600 mb-3">Start Talking to Your Prospects Today</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Begin your enterprise growth journey with our proven B2B marketing strategies and see measurable
                    results within weeks of implementation.
                  </p>
                </div>

                <div className="space-y-4">
                  <QuantumButton variant="primary" size="large" className="w-full">
                    <Link href="/contact" className="block">
                      <div className="flex items-center justify-center space-x-2">
                        <RocketLaunch className="text-lg text-blue-600" />
                        <span className="text-zinc-600">Start Your Growth Journey</span>
                      </div>
                    </Link>
                  </QuantumButton>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white rounded-lg p-3 border border-emerald-400/20">
                      <div className="text-lg font-bold text-emerald-600">Free</div>
                      <div className="text-xs text-slate-600">Enterprise Consultation</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-blue-400/20">
                      <div className="text-lg font-bold text-blue-600">48h</div>
                      <div className="text-xs text-slate-600">Implementation Start</div>
                    </div>
                  </div>
                </div>
              </div>
            </HolographicPanel>
          </motion.div>

          {/* Service exploration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HolographicPanel title="SOLUTION EXPLORATION" variant="secondary" level={4}>
              <div className="space-y-6">
                <div className="text-center">
                  <Analytics className="text-purple-600 text-4xl mb-4" />
                  <h3 className="text-2xl font-bold text-slate-600 mb-3">Discover Enterprise Solutions</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Explore our comprehensive service portfolio and see how we can help transform your business with
                    proven enterprise methodologies.
                  </p>
                </div>

                <div className="space-y-4">
                  <QuantumButton variant="secondary" size="large" className="w-full">
                    <Link href="/services" className="block">
                      <div className="flex items-center justify-center space-x-2">
                        <Analytics className="text-lg text-blue-500" />
                        <span className="text-zinc-600">View Enterprise Services</span>
                      </div>
                    </Link>
                  </QuantumButton>

                  <QuantumButton variant="accent" size="medium" className="w-full">
                    <Link href="/projects" className="block">
                      <div className="flex items-center justify-center space-x-2">
                        <TrendingUp className="text-lg text-purple-500" />
                        <span className="text-zinc-600">See Success Stories</span>
                      </div>
                    </Link>
                  </QuantumButton>
                </div>
              </div>
            </HolographicPanel>
          </motion.div>
        </div>

        {/* Corporate performance dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <HolographicPanel
            title="ENTERPRISE PERFORMANCE MATRIX"
            variant="accent"
            level={5}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: <TrendingUp className="text-3xl text-emerald-500" />,
                  metric: "3x",
                  label: "Growth Acceleration",
                  description: "Average business growth",
                  badge: "PROVEN",
                },
                {
                  icon: <Speed className="text-3xl text-blue-500" />,
                  metric: "8+",
                  label: "Years Experience",
                  description: "Enterprise track record",
                  badge: "EXPERT",
                },
                {
                  icon: <Business className="text-3xl text-purple-500" />,
                  metric: "100+",
                  label: "Enterprise Clients",
                  description: "Successful transformations",
                  badge: "TRUSTED",
                },
                {
                  icon: <Security className="text-3xl text-pink-500" />,
                  metric: "300%",
                  label: "ROI Improvement",
                  description: "Average performance gain",
                  badge: "GUARANTEED",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center space-y-3 bg-white rounded-lg p-6 border border-slate-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative">
                    <div className="flex justify-center">{item.icon}</div>
                    <div className="absolute -top-2 -right-2 text-xs font-bold px-2 py-1 bg-emerald-500 text-white rounded-full border border-emerald-400/30">
                      {item.badge}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-600">{item.metric}</div>
                  <div className="text-sm font-medium text-slate-500">{item.label}</div>
                  <div className="text-xs text-slate-500">{item.description}</div>
                </motion.div>
              ))}
            </div>

            {/* Corporate guarantee */}
            <div className="mt-8 pt-8 border-t border-slate-700 text-center">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-50 rounded-lg border border-emerald-400/30">
                <Security className="text-emerald-500 text-lg" />
                <span className="text-emerald-500 font-semibold">Enterprise Performance Guarantee</span>
              </div>
              <p className="text-sm text-slate-600 mt-3 max-w-2xl mx-auto">
                Accountability, accuracy, and action - backed by proven enterprise methodologies and 8+ years of
                measurable success across 100+ client transformations
              </p>
            </div>
          </HolographicPanel>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes corporateFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          50% {
            transform: translateY(-20px) rotate(5deg) scale(1.05);
          }
        }

        @keyframes corporatePulse {
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
            filter: hue-rotate(270deg) brightness(1.1) contrast(1.2);
          }
        }
      `}</style>
    </section>
  )
}
