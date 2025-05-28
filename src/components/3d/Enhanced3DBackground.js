"use client"
import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function Enhanced3DBackground() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    mountRef.current.appendChild(renderer.domElement)

    // Enhanced particles with multiple colors
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000
    const posArray = new Float32Array(particlesCount * 3)
    const colorArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position
      posArray[i] = (Math.random() - 0.5) * 200
      posArray[i + 1] = (Math.random() - 0.5) * 200
      posArray[i + 2] = (Math.random() - 0.5) * 200

      // Colors - blue, purple, pink gradient
      const colorChoice = Math.random()
      if (colorChoice < 0.33) {
        colorArray[i] = 0.23 // Blue
        colorArray[i + 1] = 0.51
        colorArray[i + 2] = 0.96
      } else if (colorChoice < 0.66) {
        colorArray[i] = 0.61 // Purple
        colorArray[i + 1] = 0.35
        colorArray[i + 2] = 0.96
      } else {
        colorArray[i] = 0.96 // Pink
        colorArray[i + 1] = 0.35
        colorArray[i + 2] = 0.61
      }
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Multiple geometric shapes for depth
    const shapes = []

    // Main torus
    const torusGeometry = new THREE.TorusGeometry(15, 4, 16, 100)
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    })
    const torus = new THREE.Mesh(torusGeometry, torusMaterial)
    scene.add(torus)
    shapes.push(torus)

    // Secondary torus
    const torus2Geometry = new THREE.TorusGeometry(25, 2, 8, 50)
    const torus2Material = new THREE.MeshBasicMaterial({
      color: 0x9333ea,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    })
    const torus2 = new THREE.Mesh(torus2Geometry, torus2Material)
    torus2.rotation.x = Math.PI / 4
    scene.add(torus2)
    shapes.push(torus2)

    // Icosahedron
    const icosahedronGeometry = new THREE.IcosahedronGeometry(8, 1)
    const icosahedronMaterial = new THREE.MeshBasicMaterial({
      color: 0xec4899,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    })
    const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial)
    icosahedron.position.set(30, 20, -20)
    scene.add(icosahedron)
    shapes.push(icosahedron)

    // Octahedron
    const octahedronGeometry = new THREE.OctahedronGeometry(6)
    const octahedronMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    })
    const octahedron = new THREE.Mesh(octahedronGeometry, octahedronMaterial)
    octahedron.position.set(-25, -15, 10)
    scene.add(octahedron)
    shapes.push(octahedron)

    camera.position.z = 50

    // Enhanced animation with mouse interaction
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate particles with mouse influence
      particlesMesh.rotation.x += 0.001 + mouseY * 0.0005
      particlesMesh.rotation.y += 0.001 + mouseX * 0.0005

      // Animate shapes
      torus.rotation.x += 0.01
      torus.rotation.y += 0.005

      torus2.rotation.x += 0.008
      torus2.rotation.z += 0.003

      icosahedron.rotation.x += 0.012
      icosahedron.rotation.y += 0.008

      octahedron.rotation.y += 0.015
      octahedron.rotation.z += 0.01

      // Camera movement based on mouse
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.05

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
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
