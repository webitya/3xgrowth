"use client"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import * as THREE from "three"

export default function FloatingCard3D({ children, className = "", delay = 0 }) {
  const cardRef = useRef(null)
  const sceneRef = useRef(null)

  useEffect(() => {
    if (!cardRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(100, 100)
    renderer.setClearColor(0x000000, 0)

    // Create a small 3D element for the card
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    camera.position.z = 3

    const animate = () => {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }

    animate()

    if (sceneRef.current) {
      sceneRef.current.appendChild(renderer.domElement)
    }

    return () => {
      if (sceneRef.current && renderer.domElement) {
        sceneRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        transition: { duration: 0.3 },
      }}
      className={`relative group ${className}`}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="absolute top-2 right-2 w-16 h-16 opacity-20">
        <div ref={sceneRef} className="w-full h-full" />
      </div>
      <div
        className="bg-slate-800/30 backdrop-blur-md border border-blue-500/20 p-8 rounded-lg hover:bg-slate-700/40 transition-all duration-500 relative overflow-hidden group"
        style={{
          boxShadow: "0 8px 32px 0 rgba(59, 130, 246, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  )
}
