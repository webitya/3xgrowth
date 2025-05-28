"use client"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import * as THREE from "three"

export default function Holographic3DText({ text, size = "large" }) {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    const width = size === "large" ? 600 : 300
    const height = size === "large" ? 200 : 100

    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Create holographic effect with particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 500
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x00ffff,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Create text outline effect
    const textGeometry = new THREE.PlaneGeometry(8, 2)
    const textMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide,
    })
    const textMesh = new THREE.Mesh(textGeometry, textMaterial)
    scene.add(textMesh)

    camera.position.z = 10

    const animate = () => {
      requestAnimationFrame(animate)

      particlesMesh.rotation.x += 0.001
      particlesMesh.rotation.y += 0.002

      textMesh.rotation.y = Math.sin(Date.now() * 0.001) * 0.1

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [size])

  return (
    <div className="relative">
      <div ref={mountRef} className="absolute inset-0 pointer-events-none opacity-30" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h1
          className={`font-bold ${size === "large" ? "text-6xl md:text-8xl" : "text-3xl md:text-4xl"}`}
          style={{
            background: "linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ffff)",
            backgroundSize: "400% 400%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "holographic 3s ease-in-out infinite",
          }}
        >
          {text}
        </h1>
      </motion.div>

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
    </div>
  )
}
