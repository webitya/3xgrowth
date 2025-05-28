import HomepageHero from "@/components/homepage/HomepageHero"
import HomepageProblems from "@/components/homepage/HomepageProblems"
import HomepageDifferentiators from "@/components/homepage/HomepageDifferentiators"
import HomepageServices from "@/components/homepage/HomepageServices"
import HomepageCTA from "@/components/homepage/HomepageCTA"
import ThreeBackground from "@/components/3d/ThreeBackground"

export default function HomePage() {
  return (
    <div className="relative">
      <ThreeBackground />
      <HomepageHero />
      <HomepageProblems />
      <HomepageDifferentiators />
      <HomepageServices />
      <HomepageCTA />
    </div>
  )
}
