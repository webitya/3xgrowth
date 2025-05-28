"use client"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

export default function Interactive3DScene({ type = "hero" }) {
  const mountRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 400 / 300, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(400, 300)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    let mainObject

    if (type === "hero") {
      // Create a complex geometric structure for hero
      const group = new THREE.Group()

      // Central sphere
      const sphereGeometry = new THREE.SphereGeometry(2, 32, 32)
      const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      })
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
      group.add(sphere)

      // Orbiting rings
      for (let i = 0; i < 3; i++) {
        const ringGeometry = new THREE.TorusGeometry(4 + i * 2, 0.2, 8, 50)
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: [0x3b82f6, 0x9333ea, 0xec4899][i],
          transparent: true,
          opacity: 0.4,
        })
        const ring = new THREE.Mesh(ringGeometry, ringMaterial)
        ring.rotation.x = (Math.PI / 3) * i
        ring.rotation.y = (Math.PI / 4) * i
        group.add(ring)
      }

      mainObject = group
    } else if (type === "services") {
      // Create interconnected nodes for services
      const group = new THREE.Group()

      // Create nodes
      const nodePositions = [
        [0, 0, 0],
        [3, 2, 1],
        [-2, 3, -1],
        [1, -2, 2],
      ]

      nodePositions.forEach((pos, index) => {
        const nodeGeometry = new THREE.SphereGeometry(0.5, 16, 16)
        const nodeMaterial = new THREE.MeshBasicMaterial({
          color: [0x3b82f6, 0x10b981, 0x9333ea, 0xec4899][index],
          transparent: true,
          opacity: 0.8,
        })
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
        node.position.set(...pos)
        group.add(node)

        // Add connections
        if (index > 0) {
          const points = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(...pos)]
          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
          const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x3b82f6,
            transparent: true,
            opacity: 0.3,
          })
          const line = new THREE.Line(lineGeometry, lineMaterial)
          group.add(line)
        }
      })

      mainObject = group
    } else {
      // Default: rotating cube with particles
      const geometry = new THREE.BoxGeometry(3, 3, 3)
      const material = new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        wireframe: true,
        transparent: true,
        opacity: 0.5,
      })
      mainObject = new THREE.Mesh(geometry, material)
    }

    scene.add(mainObject)
    camera.position.z = 10

    const animate = () => {
      requestAnimationFrame(animate)

      if (isHovered) {
        mainObject.rotation.x += 0.02
        mainObject.rotation.y += 0.02
      } else {
        mainObject.rotation.x += 0.005
        mainObject.rotation.y += 0.01
      }

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [type, isHovered])

  return (
    <div
      ref={mountRef}
      className="w-full h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  )
}
