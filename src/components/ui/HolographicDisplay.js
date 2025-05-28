"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function HolographicDisplay({
  title,
  value,
  subtitle,
  icon,
  className = "",
  variant = "primary",
  animated = true,
  size = "medium",
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const variants = {
    primary: {
      border: "border-cyan-400/30",
      glow: "rgba(6, 182, 212, 0.2)",
      accent: "text-cyan-300",
      gradient: "from-cyan-400 to-blue-500",
    },
    secondary: {
      border: "border-emerald-400/30",
      glow: "rgba(16, 185, 129, 0.2)",
      accent: "text-emerald-300",
      gradient: "from-emerald-400 to-green-500",
    },
    accent: {
      border: "border-purple-400/30",
      glow: "rgba(147, 51, 234, 0.2)",
      accent: "text-purple-300",
      gradient: "from-purple-400 to-pink-500",
    },
    warning: {
      border: "border-yellow-400/30",
      glow: "rgba(251, 191, 36, 0.2)",
      accent: "text-yellow-300",
      gradient: "from-yellow-400 to-orange-500",
    },
  }

  const sizes = {
    small: "p-4 text-sm",
    medium: "p-6 text-base",
    large: "p-8 text-lg",
  }

  const currentVariant = variants[variant]
  const currentSize = sizes[size]

  useEffect(() => {
    if (typeof value === "number" && animated) {
      const timer = setTimeout(() => {
        setIsVisible(true)
        const increment = value / 50
        const interval = setInterval(() => {
          setDisplayValue((prev) => {
            if (prev >= value) {
              clearInterval(interval)
              return value
            }
            return Math.min(prev + increment, value)
          })
        }, 50)
        return () => clearInterval(interval)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setDisplayValue(value)
      setIsVisible(true)
    }
  }, [value, animated])

  return (
    <motion.div
      className={`relative bg-slate-900/50 backdrop-blur-md border rounded-lg overflow-hidden ${currentVariant.border} ${currentSize} ${className}`}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{
        scale: 1.02,
        borderColor: currentVariant.border.replace("/30", "/60"),
        transition: { duration: 0.3 },
      }}
      style={{
        boxShadow: `0 8px 32px 0 ${currentVariant.glow}, inset 0 1px 0 0 rgba(255, 255, 255, 0.1)`,
      }}
    >
      {/* Holographic grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Circuit pattern overlay */}
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

      {/* Scanning lines */}
      <motion.div
        className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-${currentVariant.gradient.split(" ")[1].split("-")[1]}-400 to-transparent`}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <motion.div
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-${currentVariant.gradient.split(" ")[3].split("-")[1]}-400 to-transparent`}
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Corner brackets with animation */}
      <motion.div
        className={`absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 ${currentVariant.border.replace("/30", "")}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.div
        className={`absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 ${currentVariant.border.replace("/30", "")}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <motion.div
        className={`absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 ${currentVariant.border.replace("/30", "")}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      <motion.div
        className={`absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 ${currentVariant.border.replace("/30", "")}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <motion.h3
            className={`text-lg font-semibold ${currentVariant.accent}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {title}
          </motion.h3>
          {icon && (
            <motion.div
              className={`${currentVariant.accent}`}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
            >
              {icon}
            </motion.div>
          )}
        </div>

        <motion.div
          className="text-3xl font-bold mb-2 relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span
            className={`bg-gradient-to-r ${currentVariant.gradient} bg-clip-text text-transparent`}
            style={{
              backgroundSize: "200% 200%",
              animation: "holographic 3s ease-in-out infinite",
              textShadow: `0 0 20px ${currentVariant.glow}`,
            }}
          >
            {typeof displayValue === "number" ? Math.round(displayValue) : displayValue}
          </span>

          {/* Glitch effect */}
          <motion.span
            className="absolute inset-0 text-red-400 opacity-0"
            animate={{
              opacity: [0, 0.3, 0],
              x: [0, 2, 0],
            }}
            transition={{
              duration: 0.1,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: Math.random() * 5 + 2,
            }}
          >
            {typeof displayValue === "number" ? Math.round(displayValue) : displayValue}
          </motion.span>
        </motion.div>

        {subtitle && (
          <motion.p
            className="text-sm text-gray-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Data stream visualization */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-30">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`w-1 h-1 bg-${currentVariant.gradient.split(" ")[1].split("-")[1]}-400 rounded-full mb-1`}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
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

      <style jsx>{`
        @keyframes holographic {
          0%, 100% {
            background-position: 0% 50%;
            filter: hue-rotate(0deg);
          }
          25% {
            background-position: 100% 50%;
            filter: hue-rotate(90deg);
          }
          50% {
            background-position: 100% 100%;
            filter: hue-rotate(180deg);
          }
          75% {
            background-position: 0% 100%;
            filter: hue-rotate(270deg);
          }
        }
      `}</style>
    </motion.div>
  )
}
