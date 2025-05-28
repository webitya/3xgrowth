"use client"
import { motion } from "framer-motion"
import { TrendingUp, Speed, CenterFocusStrong, Business, Analytics, Security } from "@mui/icons-material"
import Link from "next/link"
import QuantumButton from "@/components/advanced/QuantumButton"
import HolographicPanel from "@/components/advanced/HolographicPanel"
import NeuralInterface from "@/components/advanced/NeuralInterface"

export default function HomepageHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Corporate futuristic background */}
      <div className="absolute inset-0">
        {/* Corporate grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(rgba(147, 51, 234, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
          }}
        />

        {/* Corporate data streams */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
              style={{
                left: `${i * 8.33 + 2}%`,
                height: "100%",
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scaleY: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Floating corporate elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 border border-blue-400/20 bg-slate-900/50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)",
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Corporate status bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center space-x-6 px-8 py-4 bg-slate-900/80 backdrop-blur-xl border border-blue-400/20 rounded-xl">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-emerald-300 tracking-wider">ENTERPRISE ACTIVE</span>
            </div>
            <div className="w-px h-4 bg-slate-600" />
            <div className="flex items-center space-x-2">
              <Business className="text-blue-400 text-sm" />
              <span className="text-xs font-semibold text-blue-300">B2B SYSTEMS ONLINE</span>
            </div>
            <div className="w-px h-4 bg-slate-600" />
            <div className="flex items-center space-x-2">
              <Analytics className="text-purple-400 text-sm" />
              <span className="text-xs font-semibold text-purple-300">100+ CLIENTS</span>
            </div>
          </div>
        </motion.div>

        <NeuralInterface className="mb-12">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* Corporate hero title */}
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Corporate badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800/50 border border-blue-400/30 rounded-lg mb-6">
                <Security className="text-blue-400 text-sm" />
                <span className="text-blue-300 text-xs font-bold tracking-wider">ENTERPRISE B2B SOLUTIONS</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black mb-6 relative">
                <span className="text-slate-100">We help you</span>
                <br />
                <span
                  className="bg-gradient-to-r from-blue-400 via-slate-200 to-emerald-400 bg-clip-text text-transparent"
                  style={{
                    backgroundSize: "200% 200%",
                    animation: "corporateShift 4s ease-in-out infinite",
                    textShadow: "0 0 40px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  reach, connect & convert
                </span>

                {/* Corporate data points */}
                <div className="absolute inset-0 -z-10">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${30 + i * 10}%`,
                      }}
                      animate={{
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-8 h-8 border-2 border-blue-400/30 bg-slate-900/50 transform rotate-45">
                        <div className="w-full h-full border border-blue-400/20 transform -rotate-45 flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </h1>
            </motion.div>

            {/* Corporate value proposition */}
            <motion.div
              className="max-w-5xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="bg-slate-900/60 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-8">
                <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed font-light">
                  Market is big and the sky is the limit. At{" "}
                  <span className="text-blue-300 font-semibold">3xGrowth</span>, we help you{" "}
                  <span className="text-emerald-300 font-semibold">identify, engage, and influence</span> the buying
                  decisions of your most valuable prospects.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  We re a <span className="text-blue-300 font-medium">performance-driven B2B marketing company</span>{" "}
                  focused on lead generation and brand building through
                  <span className="text-emerald-300 font-medium"> Account-Based Marketing</span> and precision targeting
                  strategies.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </NeuralInterface>

        {/* Corporate action center */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <QuantumButton variant="primary" size="large" className="relative overflow-hidden">
            <Link href="/contact" className="block relative z-10">
              <div className="flex items-center space-x-2">
                <Business className="text-lg" />
                <span>Start Talking to Your Prospects Today</span>
              </div>
            </Link>
          </QuantumButton>

          <QuantumButton variant="secondary" size="large" className="relative overflow-hidden">
            <Link href="/services" className="block relative z-10">
              <div className="flex items-center space-x-2">
                <Analytics className="text-lg" />
                <span>Explore Enterprise Solutions</span>
              </div>
            </Link>
          </QuantumButton>
        </motion.div>

        {/* Corporate capability matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <HolographicPanel title="PRECISION TARGETING" variant="primary" level={5} className="h-full">
              <div className="text-center space-y-4">
                <div className="relative">
                  <TrendingUp
                    className="text-blue-400 text-5xl mx-auto"
                    style={{
                      filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))",
                    }}
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-900">AI</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-200">REACH</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Enterprise-grade prospect identification with data-driven precision and verified buyer signals for
                  maximum targeting accuracy.
                </p>
                <div className="flex justify-center space-x-4 pt-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-emerald-400">99.7%</div>
                    <div className="text-xs text-slate-500">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">10x</div>
                    <div className="text-xs text-slate-500">Faster</div>
                  </div>
                </div>
              </div>
            </HolographicPanel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <HolographicPanel title="EXECUTIVE ENGAGEMENT" variant="secondary" level={5} className="h-full">
              <div className="text-center space-y-4">
                <div className="relative">
                  <Speed
                    className="text-purple-400 text-5xl mx-auto"
                    style={{
                      filter: "drop-shadow(0 0 20px rgba(147, 51, 234, 0.6))",
                    }}
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-900">C+</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-200">CONNECT</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Strategic first-contact protocols designed to initiate meaningful conversations with C-suite
                  decision-makers and key stakeholders.
                </p>
                <div className="flex justify-center space-x-4 pt-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-400">500%</div>
                    <div className="text-xs text-slate-500">Response Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-emerald-400">48h</div>
                    <div className="text-xs text-slate-500">First Contact</div>
                  </div>
                </div>
              </div>
            </HolographicPanel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            <HolographicPanel title="REVENUE ACCELERATION" variant="accent" level={5} className="h-full">
              <div className="text-center space-y-4">
                <div className="relative">
                  <CenterFocusStrong
                    className="text-emerald-400 text-5xl mx-auto"
                    style={{
                      filter: "drop-shadow(0 0 20px rgba(16, 185, 129, 0.6))",
                    }}
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-900">ROI</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-200">CONVERT</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Advanced conversion optimization through strategic influence campaigns and proven sales acceleration
                  frameworks.
                </p>
                <div className="flex justify-center space-x-4 pt-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-emerald-400">300%</div>
                    <div className="text-xs text-slate-500">ROI Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">3x</div>
                    <div className="text-xs text-slate-500">Growth</div>
                  </div>
                </div>
              </div>
            </HolographicPanel>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes corporateShift {
          0%, 100% { 
            background-position: 0% 50%; 
            filter: hue-rotate(0deg) brightness(1) contrast(1.1);
          }
          25% { 
            background-position: 100% 50%; 
            filter: hue-rotate(45deg) brightness(1.1) contrast(1.2);
          }
          50% { 
            background-position: 100% 100%; 
            filter: hue-rotate(90deg) brightness(1.2) contrast(1.3);
          }
          75% { 
            background-position: 0% 100%; 
            filter: hue-rotate(45deg) brightness(1.1) contrast(1.2);
          }
        }
      `}</style>
    </section>
  )
}
