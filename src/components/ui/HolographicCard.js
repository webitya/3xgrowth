"use client"
import { motion } from "framer-motion"
import { useState } from "react"

export default function HolographicCard({
  children,
  className = "",
  variant = "primary",
  interactive = true,
  glowIntensity = "medium",
}) {
  const [isHovered, setIsHovered] = useState(false)

  const variants = {
    primary: {
      border: "border-cyan-400/30",
      glow: "rgba(6, 182, 212, 0.2)",
      hoverGlow: "rgba(6, 182, 212, 0.4)",
    },
    secondary: {
      border: "border-emerald-400/30",
      glow: "rgba(16, 185, 129, 0.2)",
      hoverGlow: "rgba(16, 185, 129, 0.4)",
    },
    accent: {
      border: "border-purple-400/30",
      glow: "rgba(147, 51, 234, 0.2)",
      hoverGlow: "rgba(147, 51, 234, 0.4)",
    },
  }

  const glowIntensities = {
    low: 0.1,
    medium: 0.2,
    high: 0.4,
  }

  const currentVariant = variants[variant]
  const intensity = glowIntensities[glowIntensity]

  return (
    <motion.div
      className={`relative bg-slate-900/50 backdrop-blur-md border rounded-lg overflow-hidden ${currentVariant.border} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
      whileHover={
        interactive
          ? {
              scale: 1.02,
              transition: { duration: 0.3 },
            }
          : {}
      }
      style={{
        boxShadow: `0 8px 32px 0 ${isHovered ? currentVariant.hoverGlow : currentVariant.glow}, inset 0 1px 0 0 rgba(255, 255, 255, 0.1)`,
      }}
    >
      {/* Holographic grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, ${intensity}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, ${intensity}) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Circuit pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.5) 25%, rgba(0, 255, 255, 0.5) 26%, transparent 27%),
            linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.5) 25%, rgba(0, 255, 255, 0.5) 26%, transparent 27%)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Animated corner brackets */}
      <motion.div
        className={`absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 ${currentVariant.border.replace("/30", "")}`}
        animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className={`absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 ${currentVariant.border.replace("/30", "")}`}
        animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
      <motion.div
        className={`absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 ${currentVariant.border.replace("/30", "")}`}
        animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.div
        className={`absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 ${currentVariant.border.replace("/30", "")}`}
        animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      />

      {/* Scanning line */}
      <motion.div
        className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent`}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Hover effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-400/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

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
    </motion.div>
  )
}
