"use client"
import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function NeuralNetworkBackground({ intensity = "medium" }) {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Create neural network nodes
    const nodes = []
    const connections = []
    const nodeCount = intensity === "high" ? 100 : intensity === "medium" ? 60 : 30

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      const nodeGeometry = new THREE.SphereGeometry(0.1, 8, 8)
      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: Math.random() > 0.5 ? 0x00ffff : 0x00ff88,
        transparent: true,
        opacity: 0.6,
      })
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial)

      node.position.set((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100)

      scene.add(node)
      nodes.push(node)
    }

    // Create connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position)
        if (distance < 30 && Math.random() > 0.7) {
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
    const dataParticles = []
    for (let i = 0; i < 50; i++) {
      const particleGeometry = new THREE.SphereGeometry(0.02, 4, 4)
      const particleMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        transparent: true,
        opacity: 0.8,
      })
      const particle = new THREE.Mesh(particleGeometry, particleMaterial)

      particle.position.set((Math.random() - 0.5) * 120, (Math.random() - 0.5) * 120, (Math.random() - 0.5) * 120)

      scene.add(particle)
      dataParticles.push(particle)
    }

    camera.position.z = 50

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      requestAnimationFrame(animate)

      // Animate nodes
      nodes.forEach((node, index) => {
        node.rotation.x += 0.01
        node.rotation.y += 0.01
        node.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01
      })

      // Animate data flow
      dataParticles.forEach((particle, index) => {
        particle.position.x += Math.sin(Date.now() * 0.002 + index) * 0.02
        particle.position.y += Math.cos(Date.now() * 0.002 + index) * 0.02

        // Reset position if out of bounds
        if (particle.position.x > 60) particle.position.x = -60
        if (particle.position.y > 60) particle.position.y = -60
      })

      // Camera follows mouse
      camera.position.x += (mouseX * 10 - camera.position.x) * 0.05
      camera.position.y += (mouseY * 10 - camera.position.y) * 0.05

      // Rotate entire scene
      scene.rotation.y += 0.001

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [intensity])

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-20" />
}
