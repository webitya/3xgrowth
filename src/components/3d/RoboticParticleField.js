"use client"
import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function RoboticParticleField() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Create robotic grid particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 3000
    const posArray = new Float32Array(particlesCount * 3)
    const colorArray = new Float32Array(particlesCount * 3)
    const sizeArray = new Float32Array(particlesCount)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Create grid-like positions for robotic feel
      const gridSize = 10
      const x = (Math.floor(Math.random() * gridSize) - gridSize / 2) * 20 + (Math.random() - 0.5) * 5
      const y = (Math.floor(Math.random() * gridSize) - gridSize / 2) * 20 + (Math.random() - 0.5) * 5
      const z = (Math.floor(Math.random() * gridSize) - gridSize / 2) * 20 + (Math.random() - 0.5) * 5

      posArray[i] = x
      posArray[i + 1] = y
      posArray[i + 2] = z

      // Robotic color scheme - cyan, electric blue, neon green
      const colorChoice = Math.random()
      if (colorChoice < 0.4) {
        colorArray[i] = 0.0 // Cyan
        colorArray[i + 1] = 1.0
        colorArray[i + 2] = 1.0
      } else if (colorChoice < 0.7) {
        colorArray[i] = 0.0 // Electric Blue
        colorArray[i + 1] = 0.5
        colorArray[i + 2] = 1.0
      } else {
        colorArray[i] = 0.0 // Neon Green
        colorArray[i + 1] = 1.0
        colorArray[i + 2] = 0.3
      }

      sizeArray[i / 3] = Math.random() * 0.02 + 0.01
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3))
    particlesGeometry.setAttribute("size", new THREE.BufferAttribute(sizeArray, 1))

    const particlesMaterial = new THREE.PointsMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Add robotic geometric structures
    const roboticStructures = []

    // Create interconnected cubes
    for (let i = 0; i < 5; i++) {
      const geometry = new THREE.BoxGeometry(2, 2, 2)
      const edges = new THREE.EdgesGeometry(geometry)
      const material = new THREE.LineBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.3,
      })
      const wireframe = new THREE.LineSegments(edges, material)

      wireframe.position.set((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100)

      scene.add(wireframe)
      roboticStructures.push(wireframe)
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

      // Robotic movement patterns
      particlesMesh.rotation.x += 0.0005
      particlesMesh.rotation.y += 0.001

      // Animate robotic structures
      roboticStructures.forEach((structure, index) => {
        structure.rotation.x += 0.005 + index * 0.001
        structure.rotation.y += 0.003 + index * 0.0005
        structure.rotation.z += 0.002
      })

      // Camera follows mouse with robotic precision
      camera.position.x += (mouseX * 10 - camera.position.x) * 0.02
      camera.position.y += (mouseY * 10 - camera.position.y) * 0.02

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
