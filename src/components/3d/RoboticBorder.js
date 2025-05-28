"use client"
import { motion } from "framer-motion"

export default function RoboticBorder({ children, className = "", variant = "primary" }) {
  const borderColors = {
    primary: "from-cyan-400 to-blue-500",
    secondary: "from-green-400 to-emerald-500",
    accent: "from-purple-400 to-pink-500",
  }

  return (
    <div className={`relative ${className}`}>
      {/* Animated corner brackets */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left corner */}
        <motion.div
          className="absolute top-0 left-0 w-8 h-8"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={`w-full h-1 bg-gradient-to-r ${borderColors[variant]}`} />
          <div className={`w-1 h-full bg-gradient-to-b ${borderColors[variant]}`} />
        </motion.div>

        {/* Top-right corner */}
        <motion.div
          className="absolute top-0 right-0 w-8 h-8"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={`w-full h-1 bg-gradient-to-l ${borderColors[variant]}`} />
          <div className={`w-1 h-full bg-gradient-to-b ${borderColors[variant]} ml-auto`} />
        </motion.div>

        {/* Bottom-left corner */}
        <motion.div
          className="absolute bottom-0 left-0 w-8 h-8"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className={`w-1 h-full bg-gradient-to-t ${borderColors[variant]}`} />
          <div className={`w-full h-1 bg-gradient-to-r ${borderColors[variant]} mt-auto`} />
        </motion.div>

        {/* Bottom-right corner */}
        <motion.div
          className="absolute bottom-0 right-0 w-8 h-8"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className={`w-1 h-full bg-gradient-to-t ${borderColors[variant]} ml-auto`} />
          <div className={`w-full h-1 bg-gradient-to-l ${borderColors[variant]} mt-auto`} />
        </motion.div>

        {/* Scanning line effect */}
        <motion.div
          className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${borderColors[variant]} opacity-60`}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Circuit pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.3) 25%, rgba(0, 255, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.3) 75%, rgba(0, 255, 255, 0.3) 76%, transparent 77%, transparent),
            linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.3) 25%, rgba(0, 255, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.3) 75%, rgba(0, 255, 255, 0.3) 76%, transparent 77%, transparent)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  )
}
