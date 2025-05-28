"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function HolographicPanel({ title, children, className = "", variant = "primary", level = 1 }) {
  const [dataStreams, setDataStreams] = useState([])
  const [isActive, setIsActive] = useState(false)

  const variants = {
    primary: {
      bg: "from-slate-900/80 via-slate-800/60 to-slate-900/80",
      border: "border-blue-400/20",
      accent: "text-blue-300",
      glow: "rgba(59, 130, 246, 0.15)",
    },
    secondary: {
      bg: "from-slate-900/80 via-purple-900/40 to-slate-900/80",
      border: "border-purple-400/20",
      accent: "text-purple-300",
      glow: "rgba(147, 51, 234, 0.15)",
    },
    accent: {
      bg: "from-slate-900/80 via-emerald-900/40 to-slate-900/80",
      border: "border-emerald-400/20",
      accent: "text-emerald-300",
      glow: "rgba(16, 185, 129, 0.15)",
    },
  }

  const currentVariant = variants[variant]

  useEffect(() => {
    // Generate data stream visualization
    const streams = []
    for (let i = 0; i < 12; i++) {
      streams.push({
        id: i,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 3,
        intensity: Math.random(),
      })
    }
    setDataStreams(streams)
  }, [])

  return (
    <motion.div
      className={`
        relative backdrop-blur-xl border-2 rounded-xl overflow-hidden
        ${currentVariant.border} ${className}
      `}
      style={{
        background: `linear-gradient(135deg, ${currentVariant.bg})`,
        boxShadow: `
          0 25px 50px -12px rgba(0, 0, 0, 0.8),
          0 0 30px ${currentVariant.glow},
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `,
      }}
      initial={{ opacity: 0, y: 20, rotateX: -5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8 }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      whileHover={{
        scale: 1.01,
        rotateY: 1,
        transition: { duration: 0.3 },
      }}
    >
      {/* Advanced holographic grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px, 30px 30px, 15px 15px",
        }}
      />

      {/* Quantum field visualization */}
      <div className="absolute inset-0 overflow-hidden">
        {dataStreams.map((stream) => (
          <motion.div
            key={stream.id}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-400/50 to-transparent"
            style={{ left: `${stream.id * 8.33}%` }}
            animate={{
              opacity: [0.2, stream.intensity, 0.2],
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: stream.duration,
              delay: stream.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Advanced corner system */}
      {[
        { corner: "top-2 left-2", lines: ["w-6 h-px", "w-px h-6"] },
        { corner: "top-2 right-2", lines: ["w-6 h-px", "w-px h-6 ml-auto"] },
        { corner: "bottom-2 left-2", lines: ["w-px h-6 mt-auto", "w-6 h-px mt-auto"] },
        { corner: "bottom-2 right-2", lines: ["w-px h-6 ml-auto mt-auto", "w-6 h-px mt-auto"] },
      ].map((corner, index) => (
        <motion.div
          key={index}
          className={`absolute ${corner.corner} w-6 h-6`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {corner.lines.map((lineClass, lineIndex) => (
            <div key={lineIndex} className={`${lineClass} bg-gradient-to-r from-blue-400 to-purple-400`} />
          ))}
        </motion.div>
      ))}

      {/* Scanning beam */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
        animate={{ y: [0, "100vh"] }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Header section */}
      {title && (
        <div className="relative p-6 border-b border-blue-400/20">
          <motion.h3
            className={`text-xl font-semibold ${currentVariant.accent}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h3>

          {/* Title underline effect */}
          <motion.div
            className="absolute bottom-0 left-6 h-px bg-gradient-to-r from-blue-400 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: isActive ? "60%" : "30%" }}
            transition={{ duration: 0.5 }}
          />
        </div>
      )}

      {/* Content area */}
      <div className="relative p-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {children}
        </motion.div>
      </div>

      {/* Holographic shimmer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Level indicator */}
      <div className="absolute top-4 right-4 flex space-x-1">
        {[...Array(level)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-4 bg-blue-400/60 rounded-full"
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
