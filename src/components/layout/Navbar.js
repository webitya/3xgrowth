"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, Close, TrendingUp, Analytics, Business, ContactMail } from "@mui/icons-material"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [quantumField, setQuantumField] = useState([])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)

    // Generate quantum field for navbar
    const particles = []
    for (let i = 0; i < 15; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 3 + 1,
      })
    }
    setQuantumField(particles)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/", icon: <TrendingUp className="text-sm" /> },
    { name: "About", href: "/about", icon: <Business className="text-sm" /> },
    { name: "Services", href: "/services", icon: <Analytics className="text-sm" /> },
    { name: "Projects", href: "/projects", icon: <TrendingUp className="text-sm" /> },
    { name: "Contact", href: "/contact", icon: <ContactMail className="text-sm" /> },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled ? "bg-white backdrop-blur-xl border-b border-blue-400/20" : "bg-white"
      }`}
      style={{
        boxShadow: scrolled
          ? "0 8px 32px 0 rgba(59, 130, 246, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)"
          : "0 8px 32px 0 rgba(59, 130, 246, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
      }}
    >
      {/* Quantum field background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {quantumField.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-blue-400/20 rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: particle.speed,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Advanced circuit pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.4) 25%, rgba(59, 130, 246, 0.4) 26%, transparent 27%),
            linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.4) 25%, rgba(59, 130, 246, 0.4) 26%, transparent 27%)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Quantum scanning line */}
      {scrolled && (
        <motion.div
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          {/* Advanced Logo System */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              {/* Central quantum core */}
              <div className="relative w-12 h-12 flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 border-2 border-blue-400 rounded-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-1 border border-purple-400 rounded-lg"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                <TrendingUp
                  className="text-blue-600 text-2xl relative z-10"
                  style={{
                    filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.6))",
                  }}
                />

                {/* Quantum particles orbiting logo */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full"
                    animate={{
                      rotate: 360,
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    style={{
                      transformOrigin: `${20 + i * 5}px ${20 + i * 5}px`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <span
                className="text-2xl font-black bg-gradient-to-r from-blue-500 via-slate-500 to-blue-500 bg-clip-text text-transparent"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "quantumShift 3s ease infinite",
                }}
              >
                3xGrowth
              </span>
              <span className="text-xs text-slate-700 font-light tracking-wider">B2B MARKETING EXCELLENCE</span>
            </div>

            {/* Business metrics display */}
            {/* <div className="hidden lg:flex items-center space-x-4 ml-6">
              <div className="flex items-center space-x-2 px-3 py-1 bg-slate-800/50 rounded-lg border border-blue-400/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-slate-300">ACTIVE</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1 bg-slate-800/50 rounded-lg border border-purple-400/20">
                <Analytics className="text-purple-400 text-sm" />
                <span className="text-xs text-slate-300">100+ CLIENTS</span>
              </div>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-3 text-slate-500 hover:text-blue-300 transition-all duration-300 font-medium relative z-10 rounded-lg"
                >
                  {/* {item.icon} */}
                  <span className="text-sm">{item.name}</span>
                </Link>

                {/* Advanced hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div
                    className="w-full h-full rounded-lg border border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                    style={{
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                    }}
                  />

                  {/* Quantum corners */}
                  <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-blue-400" />
                  <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-blue-400" />
                  <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-blue-400" />
                  <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-blue-400" />
                </div>

                {/* Neural activity on hover */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full"
                      initial={{ x: -10, y: "50%" }}
                      animate={{
                        x: "120%",
                        transition: {
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                          ease: "linear",
                        },
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Advanced Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              {isOpen ? <Close className="text-blue-400 text-2xl" /> : <Menu className="text-blue-400 text-2xl" />}

              {/* Quantum scanning effect */}
              <motion.div
                className="absolute inset-0 border border-blue-400/50 rounded-lg"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.button>
        </div>

        {/* Advanced Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden mt-4 relative"
          >
            <div
              className="bg-slate-900/95 backdrop-blur-xl rounded-xl p-6 border border-blue-400/20 relative overflow-hidden"
              style={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(59, 130, 246, 0.15)",
              }}
            >
              {/* Advanced circuit pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.4) 25%, rgba(59, 130, 246, 0.4) 26%, transparent 27%),
                    linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.4) 25%, rgba(59, 130, 246, 0.4) 26%, transparent 27%)
                  `,
                  backgroundSize: "30px 30px",
                }}
              />

              {/* Quantum corners */}
              <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-blue-400" />
              <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-blue-400" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-blue-400" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-blue-400" />

              <div className="relative z-10 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 py-4 px-4 text-slate-300 hover:text-blue-300 transition-all duration-300 font-medium relative group rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center space-x-3">
                        <motion.div
                          className="w-2 h-2 bg-blue-400 rounded-full"
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
                        {item.icon}
                        <span>{item.name}</span>
                      </div>

                      {/* Hover effect */}
                      <motion.div
                        className="absolute bottom-0 left-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                        initial={{ width: 0 }}
                        whileHover={{ width: "calc(100% - 2rem)" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <style jsx>{`
        @keyframes quantumShift {
          0%, 100% { 
            background-position: 0% 50%; 
            filter: hue-rotate(0deg);
          }
          50% { 
            background-position: 100% 50%; 
            filter: hue-rotate(180deg);
          }
        }
      `}</style>
    </motion.nav>
  )
}
