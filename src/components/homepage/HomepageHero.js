"use client"
import { motion } from "framer-motion"
import { TrendingUp, Speed, CenterFocusStrong } from "@mui/icons-material"
import Link from "next/link"
import QuantumButton from "@/components/advanced/QuantumButton"
import HolographicPanel from "@/components/advanced/HolographicPanel"
import NeuralInterface from "@/components/advanced/NeuralInterface"

export default function HomepageHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Advanced background patterns */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
            linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.1) 25%, rgba(59, 130, 246, 0.1) 26%, transparent 27%),
            linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.1) 25%, rgba(59, 130, 246, 0.1) 26%, transparent 27%)
          `,
          backgroundSize: "100% 100%, 100% 100%, 80px 80px, 80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <NeuralInterface className="mb-12">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* Main tagline */}
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h1 className="text-6xl md:text-8xl font-black mb-6 relative">
                <span className="text-slate-100">We help you</span>
                <br />
                <span
                  className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent"
                  style={{
                    backgroundSize: "200% 200%",
                    animation: "quantumShift 4s ease-in-out infinite",
                    textShadow: "0 0 40px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  reach, connect & convert
                </span>

                {/* Quantum field around title */}
                <div className="absolute inset-0 -z-10">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0.5, 1.5, 0.5],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-slate-400 mb-8 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Market is big and the sky is the limit. At <span className="text-blue-300 font-medium">3xGrowth</span>, we
              help you
              <span className="text-emerald-300 font-medium"> identify, engage, and influence</span> the buying
              decisions of your most valuable prospects.
            </motion.p>

            <motion.p
              className="text-lg text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              We're a <span className="text-blue-300 font-medium">performance-driven B2B marketing company</span>{" "}
              focused on lead generation and brand building through
              <span className="text-emerald-300 font-medium"> Account-Based Marketing</span> and precision targeting
              strategies.
            </motion.p>
          </motion.div>
        </NeuralInterface>

        {/* Advanced action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <QuantumButton variant="primary" size="large">
            <Link href="/contact" className="block">
              Start Talking to Your Prospects Today
            </Link>
          </QuantumButton>

          <QuantumButton variant="secondary" size="large">
            <Link href="/services" className="block">
              Explore Our Services
            </Link>
          </QuantumButton>
        </motion.div>

        {/* Advanced capability panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <HolographicPanel title="REACH" variant="primary" level={3}>
            <TrendingUp
              className="text-blue-400 text-4xl mb-4 mx-auto"
              style={{
                filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.6))",
              }}
            />
            <h3 className="text-xl font-semibold mb-3 text-slate-200">Precision Targeting</h3>
            <p className="text-slate-400 leading-relaxed">
              Identify and reach your most valuable prospects with data-driven precision and verified buyer signals.
            </p>
          </HolographicPanel>

          <HolographicPanel title="CONNECT" variant="secondary" level={4}>
            <Speed
              className="text-purple-400 text-4xl mb-4 mx-auto"
              style={{
                filter: "drop-shadow(0 0 15px rgba(147, 51, 234, 0.6))",
              }}
            />
            <h3 className="text-xl font-semibold mb-3 text-slate-200">First Contact Success</h3>
            <p className="text-slate-400 leading-relaxed">
              Initiate meaningful conversations with decision-makers through proven engagement strategies.
            </p>
          </HolographicPanel>

          <HolographicPanel title="CONVERT" variant="accent" level={5}>
            <CenterFocusStrong
              className="text-emerald-400 text-4xl mb-4 mx-auto"
              style={{
                filter: "drop-shadow(0 0 15px rgba(16, 185, 129, 0.6))",
              }}
            />
            <h3 className="text-xl font-semibold mb-3 text-slate-200">Sales Acceleration</h3>
            <p className="text-slate-400 leading-relaxed">
              Transform prospects into qualified opportunities through strategic influence and proven frameworks.
            </p>
          </HolographicPanel>
        </div>
      </div>

      <style jsx>{`
        @keyframes quantumShift {
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
