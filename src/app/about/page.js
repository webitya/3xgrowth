import AboutHero from "@/components/about/AboutHero"
import AboutStory from "@/components/about/AboutStory"
import AboutValues from "@/components/about/AboutValues"
import AboutTeam from "@/components/about/AboutTeam"
import ThreeBackground from "@/components/3d/ThreeBackground"

export default function AboutPage() {
  return (
    <div className="relative">
      <ThreeBackground />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
    </div>
  )
}
