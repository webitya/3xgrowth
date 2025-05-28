"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Email, Phone, LocationOn, LinkedIn, Twitter, Analytics, Memory, Security } from "@mui/icons-material"
import HolographicPanel from "@/components/advanced/HolographicPanel"
import NeuralInterface from "@/components/advanced/NeuralInterface"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Advanced neural field */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
              linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.2) 25%, rgba(59, 130, 246, 0.2) 26%, transparent 27%),
              linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.2) 25%, rgba(59, 130, 246, 0.2) 26%, transparent 27%)
            `,
            backgroundSize: "100% 100%, 100% 100%, 80px 80px, 80px 80px",
          }}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <NeuralInterface className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Enterprise brand section */}
            <div className="lg:col-span-2">
              <HolographicPanel title="NEURAL INTELLIGENCE HQ" variant="primary" level={5}>
                <div className="space-y-6">
                  {/* Advanced logo */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <motion.div
                        className="w-12 h-12 border-2 border-blue-400/30 rounded-lg flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <Analytics className="text-blue-400 text-2xl" />
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-200">3xGrowth</h3>
                      <p className="text-xs text-blue-400 tracking-wider">NEURAL INTELLIGENCE SYSTEMS</p>
                    </div>
                  </div>

                  <p className="text-slate-400 leading-relaxed">
                    Enterprise-grade <span className="text-blue-300 font-medium">quantum marketing intelligence</span>
                    focused on neural-powered lead generation and advanced brand acceleration through
                    <span className="text-emerald-300 font-medium"> Account-Based Marketing systems</span>.
                  </p>

                  {/* Enterprise metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700">
                    {[
                      { icon: <Memory className="text-blue-400" />, label: "AI Systems", value: "Active" },
                      { icon: <Security className="text-emerald-400" />, label: "Enterprise", value: "Grade" },
                      { icon: <Analytics className="text-purple-400" />, label: "Neural", value: "Online" },
                    ].map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="flex justify-center mb-1">{metric.icon}</div>
                        <div className="text-xs text-slate-500">{metric.label}</div>
                        <div className="text-sm font-bold text-slate-300">{metric.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Social neural network */}
                  <div className="flex space-x-4 pt-4 border-t border-slate-700">
                    <motion.a
                      href="#"
                      className="p-3 bg-slate-800/50 rounded-lg border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      style={{
                        boxShadow: "0 0 15px rgba(59, 130, 246, 0.2)",
                      }}
                    >
                      <LinkedIn className="text-blue-400" />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="p-3 bg-slate-800/50 rounded-lg border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      style={{
                        boxShadow: "0 0 15px rgba(59, 130, 246, 0.2)",
                      }}
                    >
                      <Twitter className="text-blue-400" />
                    </motion.a>
                  </div>
                </div>
              </HolographicPanel>
            </div>

            {/* Neural navigation */}
            <div>
              <HolographicPanel title="NEURAL NAVIGATION" variant="secondary" level={3}>
                <div className="space-y-4">
                  {[
                    { name: "Neural Hub", href: "/" },
                    { name: "Intelligence", href: "/about" },
                    { name: "Quantum Systems", href: "/services" },
                    { name: "Success Matrix", href: "/projects" },
                    { name: "Neural Link", href: "/contact" },
                  ].map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center space-x-2 text-slate-400 hover:text-blue-400 transition-colors group"
                      >
                        <motion.div
                          className="w-1 h-1 bg-blue-400 rounded-full"
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1.2, 0.8],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.2,
                          }}
                        />
                        <span className="text-sm">{link.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </HolographicPanel>
            </div>

            {/* Enterprise contact matrix */}
            <div>
              <HolographicPanel title="CONTACT MATRIX" variant="accent" level={4}>
                <div className="space-y-4">
                  {[
                    { icon: <Email className="text-emerald-400" />, label: "Neural Link", value: "hello@3xgrowth.in" },
                    { icon: <Phone className="text-blue-400" />, label: "Quantum Line", value: "+91 XXX XXX XXXX" },
                    { icon: <LocationOn className="text-purple-400" />, label: "Base Station", value: "India" },
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/50"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0">{contact.icon}</div>
                      <div>
                        <div className="text-xs text-slate-500">{contact.label}</div>
                        <div className="text-sm text-slate-300">{contact.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </HolographicPanel>
            </div>
          </div>
        </NeuralInterface>

        {/* Enterprise footer bottom */}
        <motion.div
          className="border-t border-slate-700 pt-8 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-sm">
                &copy; 2024 3xGrowth Neural Intelligence Systems. All quantum rights reserved.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Powered by Advanced AI • Enterprise-Grade Security • Quantum Precision
              </p>
            </div>

            {/* System status */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 px-3 py-1 bg-emerald-500/20 rounded-lg border border-emerald-400/30">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-xs text-emerald-300 font-medium">Neural Systems Online</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1 bg-blue-500/20 rounded-lg border border-blue-400/30">
                <Analytics className="text-blue-400 text-sm" />
                <span className="text-xs text-blue-300 font-medium">Quantum Active</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
