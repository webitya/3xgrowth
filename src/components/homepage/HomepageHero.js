"use client"
import { motion } from "framer-motion"
import { TrendingUp, Speed, CenterFocusStrong, Business, Analytics, Security } from "@mui/icons-material"
import Link from "next/link"
import QuantumButton from "@/components/advanced/QuantumButton"
import NeuralInterface from "@/components/advanced/NeuralInterface"
import EnterpriseContactForm from "@/components/forms/EnterpriseContactForm"

export default function HomepageHero() {
  return (
    <section className="min-h-[100vh] flex items-center justify-center px-4 pt-24 pb-6 relative overflow-hidden">
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
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
              style={{
                left: `${i * 12.5 + 2}%`,
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
          {[...Array(6)].map((_, i) => (
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

      <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Main hero content - Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Hero content */}
          <div className="space-y-4">
            <NeuralInterface>
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                {/* Corporate badge */}
                <div className="inline-flex items-center space-x-2 px-2.5 py-1 bg-slate-800/50 border border-blue-400/30 rounded-lg mb-3">
                  <Security className="text-blue-400 text-xs" />
                  <span className="text-blue-300 text-xs font-bold tracking-wider">ENTERPRISE B2B SOLUTIONS</span>
                </div>

                {/* Compact hero title */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 relative leading-tight">
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
                </h1>

                {/* Compact value proposition */}
                <div className="bg-slate-900/60 backdrop-blur-xl border border-blue-400/20 rounded-xl p-3 mb-4">
                  <p className="text-sm md:text-base text-slate-300 mb-1.5 leading-relaxed">
                    At <span className="text-blue-300 font-semibold">3xGrowth</span>, we help you{" "}
                    <span className="text-emerald-300 font-semibold">identify, engage, and influence</span> the buying
                    decisions of your most valuable prospects.
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Performance-driven <span className="text-blue-300 font-medium">B2B marketing company</span> focused
                    on lead generation through{" "}
                    <span className="text-emerald-300 font-medium">Account-Based Marketing</span>.
                  </p>
                </div>

                {/* Compact action buttons */}
                <div className="flex flex-col sm:flex-row gap-2 mb-4">
                  <QuantumButton variant="primary" size="small" className="flex-1">
                    <Link href="/contact" className="block">
                      <div className="flex items-center justify-center space-x-2">
                        <Business className="text-sm" />
                        <span>Start Growing Today</span>
                      </div>
                    </Link>
                  </QuantumButton>

                  <QuantumButton variant="secondary" size="small" className="flex-1">
                    <Link href="/services" className="block">
                      <div className="flex items-center justify-center space-x-2">
                        <Analytics className="text-sm" />
                        <span>View Services</span>
                      </div>
                    </Link>
                  </QuantumButton>
                </div>
              </motion.div>
            </NeuralInterface>

            {/* Compact capability highlights */}
            <div className="grid grid-cols-3 gap-2">
              {[
                {
                  icon: <TrendingUp className="text-blue-400 text-lg" />,
                  title: "REACH",
                  metric: "99.7%",
                  label: "Accuracy",
                },
                {
                  icon: <Speed className="text-purple-400 text-lg" />,
                  title: "CONNECT",
                  metric: "500%",
                  label: "Response Rate",
                },
                {
                  icon: <CenterFocusStrong className="text-emerald-400 text-lg" />,
                  title: "CONVERT",
                  metric: "300%",
                  label: "ROI Increase",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 + index * 0.2 }}
                  className="text-center"
                >
                  <div className="bg-slate-900/60 backdrop-blur-xl border border-blue-400/20 rounded-lg p-2 hover:bg-white/10 transition-all duration-300">
                    <div className="mb-1">{item.icon}</div>
                    <h3 className="text-xs font-bold text-slate-200 mb-0.5">{item.title}</h3>
                    <div className="text-sm font-bold text-emerald-400">{item.metric}</div>
                    <div className="text-xs text-slate-500">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Enterprise contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:pl-6 flex justify-end"
          >
            <EnterpriseContactForm />
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
