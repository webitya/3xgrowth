import ContactHero from "@/components/contact/ContactHero"
import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"
import ThreeBackground from "@/components/3d/ThreeBackground"

export default function ContactPage() {
  return (
    <div className="relative">
      <ThreeBackground />
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4 py-20">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  )
}
