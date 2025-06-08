"use client"

import { TrendingUp, Speed, CenterFocusStrong, Business, Analytics, Security } from "@mui/icons-material"
import Link from "next/link"
import QuantumButton from "@/components/advanced/QuantumButton"
import NeuralInterface from "@/components/advanced/NeuralInterface"
import EnterpriseContactForm from "@/components/forms/EnterpriseContactForm"

export default function HomepageHero() {
  return (
    <section className="min-h-[100vh] flex items-center justify-center px-4 pt-24 pb-6 relative overflow-hidden">
      {/* Background effects (static) */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
          }}
        />

        {/* Vertical lines - now static divs */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
              style={{ left: `${i * 12.5 + 2}%`, height: "100%" }}
            />
          ))}
        </div>

        {/* Floating boxes - now static */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 border border-blue-400/20 bg-white/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <NeuralInterface>
              <div>
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 px-2.5 py-1 bg-gray-100 border border-blue-400/30 rounded-lg mb-3">
                  <Security className="text-blue-600 text-xs" />
                  <span className="text-blue-700 text-xs font-bold tracking-wider">ENTERPRISE B2B SOLUTIONS</span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 relative leading-tight text-gray-900">
                  <span className="text-gray-800">We help you</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
                    reach, connect & convert
                  </span>
                </h1>

                {/* Value Proposition */}
                <div className="bg-white/60 backdrop-blur-xl border border-blue-400/20 rounded-xl p-3 mb-4">
                  <p className="text-sm md:text-base text-gray-800 mb-1.5 leading-relaxed">
                    At <span className="text-blue-600 font-semibold">3xGrowth</span>, we help you{" "}
                    <span className="text-emerald-600 font-semibold">identify, engage, and influence</span> your most valuable prospects.
                  </p>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Performance-driven <span className="text-blue-600 font-medium">B2B marketing company</span> focused on lead generation through{" "}
                    <span className="text-emerald-600 font-medium">Account-Based Marketing</span>.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 mb-4">
                  <QuantumButton size="small" className="flex-1 text-gray-700">
                    <Link href="/contact" className="block">
                      <div className="flex items-center justify-center space-x-2">
                        <Business className="text-sm" />
                        <span>Start Growing Today</span>
                      </div>
                    </Link>
                  </QuantumButton>
                  <QuantumButton size="small" className="flex-1 text-gray-700">
                    <Link href="/services" className="block">
                      <div className="flex items-center justify-center space-x-2">
                        <Analytics className="text-sm" />
                        <span>View Services</span>
                      </div>
                    </Link>
                  </QuantumButton>
                </div>
              </div>
            </NeuralInterface>

            {/* Capabilities (static) */}
            <div className="grid grid-cols-3 gap-2">
              {[
                {
                  icon: <TrendingUp className="text-blue-600 text-lg" />,
                  title: "REACH",
                  metric: "99.7%",
                  label: "Accuracy",
                },
                {
                  icon: <Speed className="text-purple-600 text-lg" />,
                  title: "CONNECT",
                  metric: "500%",
                  label: "Response Rate",
                },
                {
                  icon: <CenterFocusStrong className="text-emerald-600 text-lg" />,
                  title: "CONVERT",
                  metric: "300%",
                  label: "ROI Increase",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/60 backdrop-blur-xl border border-blue-400/20 rounded-lg p-2">
                    <div className="mb-1">{item.icon}</div>
                    <h3 className="text-xs font-bold text-gray-800 mb-0.5">{item.title}</h3>
                    <div className="text-sm font-bold text-emerald-600">{item.metric}</div>
                    <div className="text-xs text-gray-600">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form (static) */}
          <div className="lg:pl-6 flex justify-end">
            <EnterpriseContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
