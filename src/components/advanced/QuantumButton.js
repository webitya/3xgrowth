"use client"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

export default function QuantumButton({ children, onClick, className = "", variant = "primary", size = "medium" }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [quantumField, setQuantumField] = useState([])
  const buttonRef = useRef(null)

  const variants = {
    primary: {
      bg: "from-slate-800 via-slate-700 to-slate-800",
      border: "border-blue-400/30",
      glow: "rgba(59, 130, 246, 0.4)",
      text: "text-blue-100",
    },
    secondary: {
      bg: "from-slate-800 via-purple-900/50 to-slate-800",
      border: "border-purple-400/30",
      glow: "rgba(147, 51, 234, 0.4)",
      text: "text-purple-100",
    },
    accent: {
      bg: "from-slate-800 via-emerald-900/50 to-slate-800",
      border: "border-emerald-400/30",
      glow: "rgba(16, 185, 129, 0.4)",
      text: "text-emerald-100",
    },
  }

  const sizes = {
    small: "px-6 py-3 text-sm",
    medium: "px-8 py-4 text-base",
    large: "px-12 py-6 text-lg",
  }

  const currentVariant = variants[variant]
  const currentSize = sizes[size]

  useEffect(() => {
    // Generate quantum field particles
    const particles = []
    for (let i = 0; i < 15; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      })
    }
    setQuantumField(particles)
  }, [])

  return (
    <motion.button
      ref={buttonRef}
      className={`
        relative overflow-hidden border-2 rounded-lg font-semibold
        backdrop-blur-md transition-all duration-300
        ${currentVariant.border} ${currentVariant.text} ${currentSize} ${className}
      `}
      style={{
        background: `linear-gradient(135deg, ${currentVariant.bg})`,
        boxShadow: isHovered
          ? `0 0 30px ${currentVariant.glow}, inset 0 1px 0 rgba(255,255,255,0.1)`
          : `0 0 15px ${currentVariant.glow.replace("0.4", "0.2")}, inset 0 1px 0 rgba(255,255,255,0.05)`,
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Quantum field background */}
      <div className="absolute inset-0 overflow-hidden">
        {quantumField.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-blue-400 rounded-full opacity-30"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              x: [0, Math.random() * 20 - 10],
              y: [0, Math.random() * 20 - 10],
              opacity: [0.3, 0.8, 0.3],
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
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 48%, rgba(59, 130, 246, 0.5) 49%, rgba(59, 130, 246, 0.5) 51%, transparent 52%),
            linear-gradient(0deg, transparent 48%, rgba(59, 130, 246, 0.5) 49%, rgba(59, 130, 246, 0.5) 51%, transparent 52%)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Quantum energy flow */}
      {isHovered && (
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-300 rounded-full"
              initial={{
                x: -10,
                y: Math.random() * 100 + "%",
                opacity: 0,
              }}
              animate={{
                x: "120%",
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      {/* Holographic overlay */}
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

      {/* Quantum corners */}
      <div className="absolute top-1 left-1 w-3 h-3 border-l border-t border-blue-400/50" />
      <div className="absolute top-1 right-1 w-3 h-3 border-r border-t border-blue-400/50" />
      <div className="absolute bottom-1 left-1 w-3 h-3 border-l border-b border-blue-400/50" />
      <div className="absolute bottom-1 right-1 w-3 h-3 border-r border-b border-blue-400/50" />

      {/* Press effect */}
      {isPressed && (
        <motion.div
          className="absolute inset-0 bg-blue-400/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 0.2 }}
        />
      )}

      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
