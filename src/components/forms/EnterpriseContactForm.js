"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Send,
  Business,
  Email,
  CheckCircle,
  Error,
  RocketLaunch,
} from "@mui/icons-material"
import HolographicPanel from "@/components/advanced/HolographicPanel"
import QuantumButton from "@/components/advanced/QuantumButton"

export default function EnterpriseContactForm() {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("")

    try {
      const response = await fetch("/api/enterprise-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          company: "",
          email: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    }

    setIsSubmitting(false)
  }

  return (
    <HolographicPanel
      title="GET FREE STRATEGY SESSION"
      
      level={5}
      className="w-full max-w-sm !text-blue-800"
    >
      <div className="space-y-3">
        {/* Header */}
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center space-x-2">
            <RocketLaunch className="text-blue-400 text-base" />
            <span className="text-xs font-bold text-slate-500">Start Growing Today</span>
          </div>
          <p className="text-xs text-slate-600 leading-tight">
            Get a <span className="text-emerald-300 font-medium">free 30-minute consultation</span> with our B2B experts
          </p>
          <div className="flex items-center justify-center space-x-2 text-xs">
            <div className="flex items-center space-x-1">
              <CheckCircle className="text-emerald-400 text-xs" />
              <span className="text-slate-500">Free</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="text-blue-400 text-xs" />
              <span className="text-slate-500">No Commitment</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="text-purple-400 text-xs" />
              <span className="text-slate-500">24h Response</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {/* Company */}
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1 flex items-center">
                <Business className="text-xs mr-1" />
                Company *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-2.5 py-1.5 bg-white border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white text-xs placeholder-slate-500 transition-all duration-300"
                placeholder="Company"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1 flex items-center">
                <Email className="text-xs mr-1" />
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-2.5 py-1.5 bg-white border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white text-xs placeholder-slate-500 transition-all duration-300"
                placeholder="email@company.com"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Challenge? (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={2}
              className="w-full px-2.5 py-1.5 bg-white border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white text-xs placeholder-slate-500 transition-all duration-300 resize-none"
              placeholder="Lead generation, sales conversion..."
            />
          </div>

          {/* Submit */}
          <QuantumButton type="submit" variant="primary" size="small" disabled={isSubmitting} className="w-full">
            <div className="flex items-center justify-center space-x-2">
              <Send className="text-xs text-zinc-900" />
              <span className="text-xs text-zinc-900">{isSubmitting ? "Booking..." : "Get Free Session"}</span>
            </div>
          </QuantumButton>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start space-x-2 p-2 bg-emerald-900/20 border border-emerald-400/30 rounded-lg"
            >
              <CheckCircle className="text-emerald-400 text-xs mt-0.5" />
              <div>
                <p className="text-emerald-400 text-xs font-medium">Success! We will be in touch soon.</p>
                <p className="text-emerald-300 text-xs">Expect a call within 24 hours.</p>
              </div>
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start space-x-2 p-2 bg-red-900/20 border border-red-400/30 rounded-lg"
            >
              <Error className="text-red-400 text-xs mt-0.5" />
              <div>
                <p className="text-red-400 text-xs font-medium">Something went wrong</p>
                <p className="text-red-300 text-xs">Please try again or email us.</p>
              </div>
            </motion.div>
          )}
        </form>

        {/* Trust Indicators */}
        <div className="pt-2 border-t border-slate-700">
          <div className="grid grid-cols-3 gap-1.5 text-center">
            <div className="bg-slate-200 rounded-lg p-1">
              <div className="text-xs font-bold text-emerald-400">100+</div>
              <div className="text-xs text-slate-600">Clients</div>
            </div>
            <div className="bg-slate-200 rounded-lg p-1">
              <div className="text-xs font-bold text-blue-400">300%</div>
              <div className="text-xs text-slate-600">ROI</div>
            </div>
            <div className="bg-slate-200 rounded-lg p-1">
              <div className="text-xs font-bold text-purple-400">8+</div>
              <div className="text-xs text-slate-600">Years</div>
            </div>
          </div>
        </div>

        {/* No Spam Badge */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-1 px-2 py-0.5 bg-emerald-500/20 rounded-full border border-emerald-400/30">
            <CheckCircle className="text-emerald-400 text-xs" />
            <span className="text-emerald-300 text-xs font-medium">No spam, guaranteed results</span>
          </div>
        </div>
      </div>
    </HolographicPanel>
  )
}
