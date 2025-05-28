"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  Twitter,
  Analytics,
  Business,
  Security,
  TrendingUp,
  Speed,
  School,
  GpsFixed,
  ConnectWithoutContact,
  EventNote,
  Campaign,
  CheckCircle,
  RocketLaunch,
} from "@mui/icons-material"
import HolographicPanel from "@/components/advanced/HolographicPanel"
import NeuralInterface from "@/components/advanced/NeuralInterface"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    {
      name: "Pinpoint",
      href: "/services#pinpoint",
      icon: <GpsFixed className="text-xs" />,
      description: "Target Account Building",
    },
    {
      name: "Breakthrough",
      href: "/services#breakthrough",
      icon: <ConnectWithoutContact className="text-xs" />,
      description: "First Connections",
    },
    {
      name: "Pipeline",
      href: "/services#pipeline",
      icon: <EventNote className="text-xs" />,
      description: "Lead Generation",
    },
    {
      name: "Influence",
      href: "/services#influence",
      icon: <Campaign className="text-xs" />,
      description: "Strategic Communications",
    },
  ]

  const companyLinks = [
    { name: "About 3xGrowth", href: "/about", description: "Our Story & Mission" },
    { name: "Success Stories", href: "/projects", description: "Client Case Studies" },
    { name: "Enterprise Solutions", href: "/services", description: "B2B Marketing Services" },
    { name: "Contact Us", href: "/contact", description: "Get In Touch" },
  ]

  const industries = [
    { name: "SaaS & Technology", growth: "+400%" },
    { name: "Manufacturing", growth: "+350%" },
    { name: "Financial Services", growth: "+300%" },
    { name: "Professional Services", growth: "+250%" },
  ]

  const achievements = [
    { metric: "100+", label: "Enterprise Clients", icon: <Business className="text-blue-400" /> },
    { metric: "8+", label: "Years Experience", icon: <School className="text-purple-400" /> },
    { metric: "300%", label: "Average ROI", icon: <TrendingUp className="text-emerald-400" /> },
    { metric: "48h", label: "Implementation", icon: <Speed className="text-pink-400" /> },
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Corporate neural field background */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px),
              linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px),
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)
            `,
            backgroundSize: "100px 100px, 100px 100px, 25px 25px, 25px 25px, 100% 100%, 100% 100%",
          }}
          className="w-full h-full"
        />
      </div>

      {/* Corporate data streams */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
            style={{
              left: `${i * 8.33 + 4}%`,
              height: "100%",
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scaleY: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Corporate footer header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Business className="text-blue-400 text-3xl" />
            <div className="text-left">
              <h2 className="text-2xl font-bold text-slate-200">3xGrowth Enterprise Network</h2>
              <p className="text-sm text-blue-300">B2B Marketing Intelligence Systems</p>
            </div>
          </div>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Connecting enterprises with{" "}
            <span className="text-blue-300 font-semibold">proven B2B marketing solutions</span>
            and <span className="text-emerald-300 font-semibold">measurable growth results</span> since 2016.
          </p>
        </motion.div>

        <NeuralInterface className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Enterprise brand section */}
            <div className="lg:col-span-1">
              <HolographicPanel title="CORPORATE HQ" variant="primary" level={5}>
                <div className="space-y-6">
                  {/* Advanced corporate logo */}
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <motion.div
                        className="w-12 h-12 border-2 border-blue-400/30 rounded-lg flex items-center justify-center bg-slate-800/50"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <TrendingUp className="text-blue-400 text-2xl" />
                      </motion.div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full flex items-center justify-center">
                        <CheckCircle className="text-slate-900 text-xs" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-200">3xGrowth</h3>
                      <p className="text-xs text-blue-400 tracking-wider font-semibold">B2B MARKETING EXCELLENCE</p>
                    </div>
                  </div>

                  <p className="text-slate-400 leading-relaxed text-sm">
                    Enterprise-grade <span className="text-blue-300 font-medium">B2B marketing intelligence</span>
                    focused on lead generation and brand acceleration through proven
                    <span className="text-emerald-300 font-medium"> Account-Based Marketing</span> strategies.
                  </p>

                  {/* Corporate achievements */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-700">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="text-center bg-slate-800/30 rounded-lg p-3 border border-slate-700/50"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex justify-center mb-1">{achievement.icon}</div>
                        <div className="text-sm font-bold text-slate-300">{achievement.metric}</div>
                        <div className="text-xs text-slate-500">{achievement.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Corporate social network */}
                  <div className="flex space-x-3 pt-4 border-t border-slate-700">
                    <motion.a
                      href="https://linkedin.com/company/3xgrowth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-800/50 rounded-lg border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                      style={{
                        boxShadow: "0 0 15px rgba(59, 130, 246, 0.2)",
                      }}
                    >
                      <LinkedIn className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </motion.a>
                    <motion.a
                      href="https://twitter.com/3xgrowth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-800/50 rounded-lg border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                      style={{
                        boxShadow: "0 0 15px rgba(59, 130, 246, 0.2)",
                      }}
                    >
                      <Twitter className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </motion.a>
                  </div>
                </div>
              </HolographicPanel>
            </div>

            {/* Enterprise services */}
            <div>
              <HolographicPanel title="ENTERPRISE SERVICES" variant="secondary" level={4}>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link
                        href={service.href}
                        className="flex items-center space-x-3 p-3 text-slate-400 hover:text-blue-400 transition-all duration-300 group bg-slate-800/20 rounded-lg border border-slate-700/30 hover:border-blue-400/30"
                      >
                        <div className="flex items-center space-x-2">
                          {service.icon}
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
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-300 group-hover:text-blue-300">
                            {service.name}
                          </div>
                          <div className="text-xs text-slate-500">{service.description}</div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </HolographicPanel>
            </div>

            {/* Company navigation */}
            <div>
              <HolographicPanel title="COMPANY NAVIGATION" variant="accent" level={3}>
                <div className="space-y-4">
                  {companyLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-start space-x-3 p-3 text-slate-400 hover:text-emerald-400 transition-all duration-300 group bg-slate-800/20 rounded-lg border border-slate-700/30 hover:border-emerald-400/30"
                      >
                        <motion.div
                          className="w-2 h-2 bg-emerald-400 rounded-full mt-1"
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1.2, 0.8],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.3,
                          }}
                        />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-300 group-hover:text-emerald-300">
                            {link.name}
                          </div>
                          <div className="text-xs text-slate-500">{link.description}</div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </HolographicPanel>
            </div>

            {/* Enterprise contact & industries */}
            <div className="space-y-6">
              {/* Contact matrix */}
              <HolographicPanel title="CONTACT MATRIX" variant="primary" level={4}>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Email className="text-blue-400" />,
                      label: "Enterprise Email",
                      value: "hello@3xgrowth.in",
                      type: "email",
                    },
                    {
                      icon: <Phone className="text-emerald-400" />,
                      label: "Business Line",
                      value: "+91 XXX XXX XXXX",
                      type: "phone",
                    },
                    {
                      icon: <LocationOn className="text-purple-400" />,
                      label: "Global HQ",
                      value: "India",
                      type: "location",
                    },
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0">{contact.icon}</div>
                      <div className="flex-1">
                        <div className="text-xs text-slate-500">{contact.label}</div>
                        <div className="text-sm text-slate-300 font-medium">{contact.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </HolographicPanel>

              {/* Industry success */}
              <HolographicPanel title="INDUSTRY SUCCESS" variant="accent" level={3}>
                <div className="space-y-3">
                  {industries.map((industry, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-2 bg-slate-800/20 rounded border border-slate-700/30"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="text-xs text-slate-400">{industry.name}</span>
                      <span className="text-xs font-bold text-emerald-400">{industry.growth}</span>
                    </motion.div>
                  ))}
                </div>
              </HolographicPanel>
            </div>
          </div>
        </NeuralInterface>

        {/* Corporate partnership section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <HolographicPanel title="STRATEGIC PARTNERSHIPS" variant="secondary" level={4} className="max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <School className="text-purple-400 text-3xl" />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-slate-200">Sister Company of Sales Syllabus</h3>
                  <p className="text-sm text-purple-300">India s Largest Leadership Learning Platform</p>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
                3xGrowth Consulting is a sister company of{" "}
                <span className="text-purple-300 font-semibold">Sales Syllabus</span> — India s largest leadership
                learning platform for sales and marketing teams. This strategic partnership gives us unique insights
                into what works in B2B sales and marketing.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { metric: "10,000+", label: "Professionals Trained" },
                  { metric: "500+", label: "Companies Served" },
                  { metric: "8+", label: "Years Partnership" },
                ].map((stat, index) => (
                  <div key={index} className="text-center bg-slate-800/30 rounded-lg p-3 border border-purple-400/20">
                    <div className="text-lg font-bold text-purple-400">{stat.metric}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </HolographicPanel>
        </motion.div>

        {/* Corporate footer bottom */}
        <motion.div
          className="border-t border-slate-700 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Copyright and legal */}
            <div className="text-center lg:text-left">
              <p className="text-slate-400 text-sm mb-2">
                &copy; {currentYear} 3xGrowth Consulting Private Limited. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs">
                Enterprise B2B Marketing Solutions • Performance-Driven Results • Global Reach
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2 text-xs text-slate-500">
                <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/terms" className="hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
                <span>•</span>
                <Link href="/cookies" className="hover:text-blue-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Enterprise certifications */}
            <div className="flex flex-col items-center lg:items-end space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 px-4 py-2 bg-emerald-500/20 rounded-lg border border-emerald-400/30">
                  <Security className="text-emerald-400 text-sm" />
                  <span className="text-xs text-emerald-300 font-medium">Enterprise Certified</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 rounded-lg border border-blue-400/30">
                  <Analytics className="text-blue-400 text-sm" />
                  <span className="text-xs text-blue-300 font-medium">Performance Verified</span>
                </div>
              </div>

              {/* System status indicators */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs text-emerald-300 font-medium">B2B Systems Online</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RocketLaunch className="text-blue-400 text-sm" />
                  <span className="text-xs text-blue-300 font-medium">Ready for Growth</span>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate tagline */}
          <div className="text-center mt-8 pt-6 border-t border-slate-800">
            <motion.p
              className="text-slate-500 text-sm"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Powered by <span className="text-blue-400 font-semibold">Advanced B2B Intelligence</span> • Driven by{" "}
              <span className="text-emerald-400 font-semibold">Proven Results</span> • Trusted by{" "}
              <span className="text-purple-400 font-semibold">Enterprise Leaders</span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
