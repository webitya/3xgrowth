import ProjectsHero from "@/components/projects/ProjectsHero"
import ProjectsGrid from "@/components/projects/ProjectsGrid"
import ProjectsStats from "@/components/projects/ProjectsStats"
import ProjectsCTA from "@/components/projects/ProjectsCTA"
import ThreeBackground from "@/components/3d/ThreeBackground"

export default function ProjectsPage() {
  return (
    <div className="relative">
      <ThreeBackground />
      <ProjectsHero />
      <ProjectsStats />
      <ProjectsGrid />
      <ProjectsCTA />
    </div>
  )
}
