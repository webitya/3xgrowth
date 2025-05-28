import Link from "next/link"
import { Email, Phone, LocationOn, LinkedIn, Twitter } from "@mui/icons-material"

export default function Footer() {
  return (
    <footer className="bg-gray-900/90 backdrop-blur-md border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">3xGrowth</h3>
            <p className="text-gray-400 mb-4">
              Performance-driven B2B marketing company focused on lead generation and brand building through
              Account-Based Marketing.
            </p>
            <div className="flex space-x-4">
              <LinkedIn className="text-blue-400 hover:text-blue-300 cursor-pointer" />
              <Twitter className="text-blue-400 hover:text-blue-300 cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-blue-400">
                About Us
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-blue-400">
                Services
              </Link>
              <Link href="/projects" className="block text-gray-400 hover:text-blue-400">
                Projects
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-blue-400">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Email className="text-sm" />
                <span>hello@3xgrowth.in</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="text-sm" />
                <span>+91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <LocationOn className="text-sm" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 3xGrowth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
