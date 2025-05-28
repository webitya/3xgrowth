"use client"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import * as THREE from "three"

export default function AIHologramEffect({ children, className = "" }) {
  const mountRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(300, 200)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Create AI neural network visualization
    const nodes = []
    const connections = []

    // Create nodes
    for (let i = 0; i < 20; i++) {
      const nodeGeometry = new THREE.SphereGeometry(0.1, 8, 8)
      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: Math.random() > 0.5 ? 0x00ffff : 0x00ff88,
        transparent: true,
        opacity: 0.8,
      })
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial)

      node.position.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 4)

      scene.add(node)
      nodes.push(node)
    }

    // Create connections between nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.7) {
          const points = [nodes[i].position, nodes[j].position]
          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
          const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.2,
          })
          const line = new THREE.Line(lineGeometry, lineMaterial)
          scene.add(line)
          connections.push(line)
        }
      }
    }

    // Add data flow particles
    const dataParticles = new THREE.Group()
    for (let i = 0; i < 50; i++) {
      const particleGeometry = new THREE.SphereGeometry(0.02, 4, 4)
      const particleMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        transparent: true,
        opacity: 0.6,
      })
      const particle = new THREE.Mesh(particleGeometry, particleMaterial)

      particle.position.set((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6)

      dataParticles.add(particle)
    }
    scene.add(dataParticles)

    camera.position.z = 8

    const animate = () => {
      requestAnimationFrame(animate)

      // Animate nodes
      nodes.forEach((node, index) => {
        node.rotation.x += 0.01
        node.rotation.y += 0.01
        node.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001
      })

      // Animate data flow
      dataParticles.children.forEach((particle, index) => {
        particle.position.x += Math.sin(Date.now() * 0.002 + index) * 0.01
        particle.position.y += Math.cos(Date.now() * 0.002 + index) * 0.01

        // Reset position if out of bounds
        if (particle.position.x > 6) particle.position.x = -6
        if (particle.position.y > 4) particle.position.y = -4
      })

      // Rotate entire scene
      scene.rotation.y += 0.002

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div ref={mountRef} className="absolute inset-0 pointer-events-none opacity-30" />
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
