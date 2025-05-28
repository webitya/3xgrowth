import ServicesHero from "@/components/services/ServicesHero"
import ServicesList from "@/components/services/ServicesList"
import ServicesProcess from "@/components/services/ServicesProcess"
import ServicesCTA from "@/components/services/ServicesCTA"
import ThreeBackground from "@/components/3d/ThreeBackground"

export default function ServicesPage() {
  return (
    <div className="relative">
      <ThreeBackground />
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <ServicesCTA />
    </div>
  )
}
