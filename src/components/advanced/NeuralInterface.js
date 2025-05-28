"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function NeuralInterface({ children, className = "" }) {
  const [neuralActivity, setNeuralActivity] = useState([])
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    // Generate neural network activity
    const generateActivity = () => {
      const activity = []
      for (let i = 0; i < 20; i++) {
        activity.push({
          id: i,
          intensity: Math.random(),
          delay: Math.random() * 2,
          duration: 1 + Math.random() * 2,
        })
      }
      setNeuralActivity(activity)
    }

    generateActivity()
    const interval = setInterval(generateActivity, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {/* Neural network visualization */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Neural nodes */}
        {neuralActivity.map((node) => (
          <motion.div
            key={node.id}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, node.intensity, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: node.duration,
              delay: node.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Neural connections */}
        <svg className="absolute inset-0 w-full h-full">
          {neuralActivity.slice(0, 10).map((connection, index) => (
            <motion.line
              key={`connection-${index}`}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: isActive ? 1 : 0.3,
                opacity: isActive ? 0.6 : 0.2,
              }}
              transition={{
                duration: 2,
                delay: connection.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>

        {/* Quantum field overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 70%)
            `,
          }}
        />
      </div>

      {/* Advanced border system */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner quantum brackets */}
        {[
          { position: "top-0 left-0", rotation: "0deg" },
          { position: "top-0 right-0", rotation: "90deg" },
          { position: "bottom-0 right-0", rotation: "180deg" },
          { position: "bottom-0 left-0", rotation: "270deg" },
        ].map((corner, index) => (
          <motion.div
            key={index}
            className={`absolute ${corner.position} w-8 h-8`}
            style={{ transform: `rotate(${corner.rotation})` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-transparent" />
            <div className="w-1 h-full bg-gradient-to-b from-blue-400 to-transparent" />
          </motion.div>
        ))}

        {/* Quantum scanning lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Content with neural enhancement */}
      <motion.div
        className="relative z-10"
        animate={
          isActive
            ? {
                filter: "brightness(1.1) contrast(1.05)",
              }
            : {}
        }
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
