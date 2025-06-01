import HomepageHero from "@/components/homepage/HomepageHero"
import HomepageProblems from "@/components/homepage/HomepageProblems"
import HomepageDifferentiators from "@/components/homepage/HomepageDifferentiators"
import HomepageServices from "@/components/homepage/HomepageServices"
import HomepageCTA from "@/components/homepage/HomepageCTA"
import QuantumParticleSystem from "@/components/advanced/QuantumParticleSystem"

export default function HomePage() {
  return (
    <div className="relative bg-gradient-to-br from-white via-white to-white">
         
      <QuantumParticleSystem />
      <HomepageHero />
      <HomepageProblems />
      <HomepageDifferentiators />
      <HomepageServices />
      <HomepageCTA />
    </div>
  )
}
