"use client"
import { motion } from "framer-motion"
import { TrendingUp, Business, Speed, Group } from "@mui/icons-material"

export default function ProjectsGrid() {
  const projects = [
    {
      icon: <Business className="text-4xl text-blue-500" />,
      title: "SaaS Startup Growth",
      industry: "Technology",
      challenge: "New SaaS company needed to build their first customer base and establish market presence.",
      solution:
        "Implemented complete Pinpoint and Breakthrough strategy with targeted outreach to tech decision-makers.",
      results: [
        "250% increase in qualified leads",
        "50 sales appointments in first month",
        "15 new enterprise customers acquired",
      ],
      timeframe: "3 months",
    },
    {
      icon: <TrendingUp className="text-4xl text-green-500" />,
      title: "Manufacturing Scale-Up",
      industry: "Manufacturing",
      challenge: "Traditional manufacturer wanted to expand into new markets and modernize their sales approach.",
      solution: "Deployed Pipeline and Influence services to reach new industry verticals with data-driven targeting.",
      results: ["400% ROI on marketing spend", "35 new B2B partnerships", "Expanded into 3 new markets"],
      timeframe: "6 months",
    },
    {
      icon: <Speed className="text-4xl text-purple-500" />,
      title: "Fintech Acceleration",
      industry: "Financial Services",
      challenge: "Fintech startup needed rapid customer acquisition to meet investor milestones.",
      solution: "Comprehensive 4-service approach with accelerated timeline and intensive outreach campaigns.",
      results: ["500% increase in demo requests", "100 qualified appointments per month", "Met Series A funding goals"],
      timeframe: "4 months",
    },
    {
      icon: <Group className="text-4xl text-pink-500" />,
      title: "Consulting Firm Expansion",
      industry: "Professional Services",
      challenge: "Mid-size consulting firm wanted to break into enterprise accounts and premium services.",
      solution: "Strategic Influence campaign targeting C-suite executives with thought leadership content.",
      results: [
        "300% increase in enterprise inquiries",
        "Average deal size increased by 200%",
        "Established thought leadership position",
      ],
      timeframe: "5 months",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-400">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Real challenges, proven solutions, measurable results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect p-8 rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                {project.icon}
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-blue-500">{project.title}</h3>
                  <p className="text-blue-400">{project.industry}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-400 mb-2">Challenge</h4>
                  <p className="text-gray-500">{project.challenge}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-400 mb-2">Solution</h4>
                  <p className="text-gray-500">{project.solution}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-400 mb-2">Results</h4>
                  <ul className="space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-gray-500">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold text-blue-400">Timeframe:</span> {project.timeframe}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
