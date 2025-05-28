"use client"
import { motion } from "framer-motion"
import { useState } from "react"

export default function DataFlowButton({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "medium",
  disabled = false,
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const variants = {
    primary: {
      bg: "from-blue-500 to-purple-600",
      hover: "from-blue-600 to-purple-700",
      glow: "rgba(59, 130, 246, 0.4)",
      border: "rgba(59, 130, 246, 0.6)",
    },
    secondary: {
      bg: "from-cyan-400 to-blue-500",
      hover: "from-cyan-500 to-blue-600",
      glow: "rgba(6, 182, 212, 0.4)",
      border: "rgba(6, 182, 212, 0.6)",
    },
    accent: {
      bg: "from-green-400 to-emerald-500",
      hover: "from-green-500 to-emerald-600",
      glow: "rgba(34, 197, 94, 0.4)",
      border: "rgba(34, 197, 94, 0.6)",
    },
    danger: {
      bg: "from-red-500 to-pink-600",
      hover: "from-red-600 to-pink-700",
      glow: "rgba(239, 68, 68, 0.4)",
      border: "rgba(239, 68, 68, 0.6)",
    },
  }

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-8 py-4 text-base",
    large: "px-12 py-6 text-lg",
  }

  const currentVariant = variants[variant]
  const currentSize = sizes[size]

  return (
    <motion.button
      className={`relative rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 border-2 ${currentSize} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => !disabled && setIsHovered(false)}
      onMouseDown={() => !disabled && setIsActive(true)}
      onMouseUp={() => !disabled && setIsActive(false)}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      style={{
        background: `linear-gradient(45deg, ${isHovered && !disabled ? currentVariant.hover : currentVariant.bg})`,
        borderColor: currentVariant.border,
        boxShadow: !disabled
          ? `
          0 0 20px ${currentVariant.glow}, 
          0 0 40px ${currentVariant.glow.replace("0.4", "0.2")},
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `
          : "none",
      }}
    >
      {/* Circuit board pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 48%, rgba(255, 255, 255, 0.3) 49%, rgba(255, 255, 255, 0.3) 51%, transparent 52%),
            linear-gradient(0deg, transparent 48%, rgba(255, 255, 255, 0.3) 49%, rgba(255, 255, 255, 0.3) 51%, transparent 52%)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Data flow particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            initial={{
              x: -10,
              y: Math.random() * 100 + "%",
              opacity: 0,
            }}
            animate={
              isHovered && !disabled
                ? {
                    x: "120%",
                    opacity: [0, 1, 0],
                    transition: {
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                      ease: "linear",
                    },
                  }
                : { opacity: 0 }
            }
          />
        ))}
      </div>

      {/* Corner brackets */}
      <div className="absolute top-1 left-1 w-3 h-3 border-l border-t border-white/30" />
      <div className="absolute top-1 right-1 w-3 h-3 border-r border-t border-white/30" />
      <div className="absolute bottom-1 left-1 w-3 h-3 border-l border-b border-white/30" />
      <div className="absolute bottom-1 right-1 w-3 h-3 border-r border-b border-white/30" />

      {/* Scanning line */}
      {isHovered && !disabled && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
          }}
        />
      )}

      {/* Active state pulse */}
      {isActive && !disabled && (
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Loading state */}
      {disabled && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </div>
      )}

      {/* Content */}
      <span className={`relative z-10 ${disabled ? "opacity-0" : ""}`}>{children}</span>

      {/* Holographic shimmer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </motion.button>
  )
}
