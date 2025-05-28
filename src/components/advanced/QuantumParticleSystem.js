"use client"
import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function QuantumParticleSystem() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000)
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    mountRef.current.appendChild(renderer.domElement)

    // Advanced quantum field simulation
    const quantumField = new THREE.Group()
    const particleCount = 5000
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    // Initialize quantum particles with sophisticated distribution
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3

      // Quantum field distribution using Fibonacci sphere
      const phi = Math.acos(1 - 2 * (i / particleCount))
      const theta = Math.PI * (1 + Math.sqrt(5)) * i

      const radius = 150 + Math.random() * 100
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)

      // Quantum velocities
      velocities[i3] = (Math.random() - 0.5) * 0.02
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02

      // Sophisticated color palette - deep space metallics
      const colorType = Math.random()
      if (colorType < 0.3) {
        colors[i3] = 0.1 // Deep Platinum
        colors[i3 + 1] = 0.15
        colors[i3 + 2] = 0.2
      } else if (colorType < 0.6) {
        colors[i3] = 0.05 // Quantum Blue
        colors[i3 + 1] = 0.1
        colors[i3 + 2] = 0.3
      } else {
        colors[i3] = 0.15 // Neural Gold
        colors[i3 + 1] = 0.12
        colors[i3 + 2] = 0.05
      }

      sizes[i] = Math.random() * 0.03 + 0.01
    }

    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
    particleGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1))

    // Advanced particle material with custom shader
    const particleMaterial = new THREE.PointsMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })

    const particles = new THREE.Points(particleGeometry, particleMaterial)
    quantumField.add(particles)

    // Advanced geometric structures - Quantum lattice
    const latticeGroup = new THREE.Group()

    // Create sophisticated geometric patterns
    for (let i = 0; i < 8; i++) {
      const geometry = new THREE.IcosahedronGeometry(15 + i * 5, 2)
      const edges = new THREE.EdgesGeometry(geometry)
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color().setHSL(0.6 + i * 0.05, 0.8, 0.3),
        transparent: true,
        opacity: 0.15 - i * 0.01,
        linewidth: 2,
      })

      const wireframe = new THREE.LineSegments(edges, material)
      wireframe.position.set(
        Math.sin((i * Math.PI) / 4) * 50,
        Math.cos((i * Math.PI) / 4) * 30,
        Math.sin((i * Math.PI) / 6) * 40,
      )

      latticeGroup.add(wireframe)
    }

    scene.add(quantumField)
    scene.add(latticeGroup)

    // Advanced lighting system
    const ambientLight = new THREE.AmbientLight(0x1a1a2e, 0.3)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0x16213e, 0.8)
    directionalLight.position.set(100, 100, 50)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    camera.position.set(0, 0, 200)

    // Advanced mouse interaction
    let mouseX = 0,
      mouseY = 0
    let targetX = 0,
      targetY = 0

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Quantum field animation with advanced physics
    const animate = () => {
      requestAnimationFrame(animate)

      const time = Date.now() * 0.0005

      // Advanced particle physics simulation
      const positions = particles.geometry.attributes.position.array
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3

        // Quantum field fluctuations
        positions[i3] += velocities[i3] + Math.sin(time + i * 0.01) * 0.1
        positions[i3 + 1] += velocities[i3 + 1] + Math.cos(time + i * 0.01) * 0.1
        positions[i3 + 2] += velocities[i3 + 2] + Math.sin(time * 0.5 + i * 0.02) * 0.05

        // Boundary conditions with quantum tunneling effect
        if (Math.abs(positions[i3]) > 300) velocities[i3] *= -0.8
        if (Math.abs(positions[i3 + 1]) > 300) velocities[i3 + 1] *= -0.8
        if (Math.abs(positions[i3 + 2]) > 300) velocities[i3 + 2] *= -0.8
      }
      particles.geometry.attributes.position.needsUpdate = true

      // Advanced lattice rotation with quantum mechanics
      latticeGroup.children.forEach((mesh, index) => {
        mesh.rotation.x += 0.002 + index * 0.0005
        mesh.rotation.y += 0.003 + index * 0.0003
        mesh.rotation.z += 0.001 + index * 0.0002

        // Quantum oscillation
        mesh.position.y += Math.sin(time + index) * 0.2
      })

      // Sophisticated camera movement
      targetX = mouseX * 0.001
      targetY = mouseY * 0.001

      camera.position.x += (targetX * 50 - camera.position.x) * 0.02
      camera.position.y += (targetY * 50 - camera.position.y) * 0.02
      camera.lookAt(scene.position)

      // Quantum field rotation
      quantumField.rotation.y += 0.0005
      quantumField.rotation.x += 0.0002

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
  }, [])

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />
}
