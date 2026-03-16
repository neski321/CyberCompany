"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { Shield, FileCheck, Users, TrendingUp, Search, ChevronDown, CheckCircle2, Sparkles, LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useBreakpoint } from "@/hooks/use-breakpoint"

interface Service {
  icon: LucideIcon
  title: string
  description: string
  details: string[]
  deliverables: string
}

const services: Service[] = [
  {
    icon: Shield,
    title: "Compliance & Risk Governance",
    description: "Build robust governance frameworks and navigate complex compliance requirements with confidence.",
    details: [
      "Strategic risk management program development",
      "Policy framework design and implementation",
      "Compliance readiness for NIST, ISO 27001, SOC 2, PCI-DSS, HIPAA, and CMMC",
      "Control environment assessment and optimization",
      "Regulatory gap analysis and remediation planning",
      "Ongoing compliance monitoring and reporting",
    ],
    deliverables: "GRC framework documentation, risk register, compliance roadmap, policy templates",
  },
  {
    icon: FileCheck,
    title: "Security Audits & Virtual CISO",
    description: "Independent security assessments and strategic security leadership tailored to your organization.",
    details: [
      "Comprehensive IT security audit and control testing",
      "Security posture evaluation and gap identification",
      "Virtual Chief Information Security Officer (vCISO) leadership",
      "Long-term security program development and maturity",
      "Risk management strategy and execution",
      "Board-level security reporting and communication",
    ],
    deliverables: "Audit findings report, vCISO engagement plan, security roadmap, executive briefings",
  },
  {
    icon: Users,
    title: "Security Training & Operations",
    description:
      "Strengthen your human and technical defenses through training and proactive vulnerability management.",
    details: [
      "Customized security awareness training programs",
      "Phishing simulation campaigns and education",
      "Vulnerability identification and assessment services",
      "Threat monitoring and remediation guidance",
      "Security culture development initiatives",
      "Ongoing security awareness metrics and reporting",
    ],
    deliverables:
      "Training curriculum, awareness campaign materials, vulnerability assessment report, progress metrics",
  },
  {
    icon: TrendingUp,
    title: "Cybersecurity Strategy & Advisory",
    description: "Strategic guidance and planning to align technology decisions with your security objectives.",
    details: [
      "Security program strategy and roadmap development",
      "Technology risk assessment and mitigation planning",
      "Security architecture review and recommendations",
      "Strategic planning for security investments",
      "Executive security briefings and decision support",
      "Vendor and technology evaluation guidance",
    ],
    deliverables: "Strategic security plan, technology recommendations, executive reports, decision frameworks",
  },
  {
    icon: Search,
    title: "Security Testing & Assessment",
    description: "Real-world attack simulations that validate your defenses and uncover exploitable weaknesses.",
    details: [
      "Network infrastructure penetration testing",
      "Web and mobile application security testing",
      "Cloud environment security assessments",
      "Social engineering and phishing simulations",
      "Manual exploit validation and impact analysis",
      "Detailed remediation guidance and verification testing",
    ],
    deliverables: "Penetration test report, executive summary, remediation recommendations, retest validation",
  },
]

const toRomanNumeral = (num: number): string => {
  const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]
  return romanNumerals[num - 1] || String(num)
}

// Card component extracted for reuse
function ServiceCard({
  service,
  index,
  isOpen,
  onToggle,
}: {
  service: Service
  index: number
  isOpen: boolean
  onToggle: (index: number) => void
}) {
  const IconComponent = service.icon
  
  return (
    <Card
      className={`
        relative overflow-hidden
        bg-gradient-to-br from-card/80 to-card/40
        backdrop-blur-xl
        border border-border/50
        transition-colors duration-300
        group
        hover:border-primary/40
        hover:shadow-2xl hover:shadow-primary/10
        ${isOpen ? "border-primary/50 shadow-xl shadow-primary/10" : ""}
      `}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card number indicator */}
      <div className="absolute top-4 right-4 text-7xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors select-none font-serif italic">
        {toRomanNumeral(index + 1)}
      </div>

      <CardHeader className="relative pb-2">
        {/* Icon with gradient ring */}
        <div className="relative mb-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 group-hover:scale-105">
            <IconComponent className="w-7 h-7 text-primary" />
          </div>
        </div>
        <CardTitle className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
          {service.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative pt-0">
        <CardDescription className="text-base text-muted-foreground leading-relaxed mb-5">
          {service.description}
        </CardDescription>

        <div className="w-full">
          <Button
            variant="ghost"
            type="button"
            className="w-full justify-between text-sm font-medium p-0 h-auto text-primary/80 hover:text-primary hover:bg-transparent transition-colors"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onToggle(index)
            }}
          >
            <span className="flex items-center gap-2">{isOpen ? "Hide Details" : "View Details"}</span>
            <motion.div
              className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </Button>

          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                key={`content-${index}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="overflow-hidden"
              >
                <div className="pt-5 mt-5 border-t border-border/50 space-y-5">
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-foreground flex items-center gap-2">
                      <span className="w-1 h-4 bg-primary rounded-full" />
                      What's Included
                    </h4>
                    <ul className="space-y-2.5">
                      {service.details.map((detail, i) => (
                        <motion.li
                          key={`${index}-detail-${i}`}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: i * 0.05,
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: service.details.length * 0.05 + 0.1,
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="p-3 rounded-xl bg-muted/50 border border-border/50"
                  >
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">Deliverables: </span>
                      {service.deliverables}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  )
}

export function Services() {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const justOpenedRef = useRef(false)

  const handleToggle = (clickedIndex: number) => {
    setOpenCardIndex((currentIndex) => {
      if (currentIndex === clickedIndex) {
        return null
      }
      justOpenedRef.current = true
      setTimeout(() => {
        justOpenedRef.current = false
      }, 50)
      return clickedIndex
    })
  }

  // Close expanded card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (justOpenedRef.current) return
      if (openCardIndex === null) return

      const clickedElement = event.target as Node
      const openCard = cardRefs.current[openCardIndex]

      if (openCard && !openCard.contains(clickedElement)) {
        setOpenCardIndex(null)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [openCardIndex])

  // Use breakpoint hook to render only the active layout
  const numColumns = useBreakpoint();

  const renderColumnCard = (service: Service, index: number) => {
    const isOpen = openCardIndex === index

    return (
      <motion.div
        key={`col-${numColumns}-${index}`}
        ref={(el) => {
          cardRefs.current[index] = el
        }}
        layout
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.5,
          delay: index * 0.08,
          ease: [0.16, 1, 0.3, 1],
          layout: {
            type: "spring",
            stiffness: 300,
            damping: 30,
          },
        }}
      >
        <ServiceCard service={service} index={index} isOpen={isOpen} onToggle={handleToggle} />
      </motion.div>
    )
  }

  return (
    <section
      id="services"
      className="py-28 bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="decorative-blur absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[120px]" />
        <div className="decorative-blur absolute bottom-40 right-10 w-96 h-96 bg-primary/8 rounded-full blur-[150px]" />
        <div className="decorative-blur absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/3 to-transparent rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Transforming Vulnerabilities into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/70">
                Security
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
              Comprehensive security solutions designed to strengthen your defenses, manage risk, and achieve compliance
              while supporting your business objectives.
            </p>
          </motion.div>
        </div>

        {/* Services Grid - Flex columns for smooth animations */}
        <LayoutGroup>
          <div className={`flex gap-5 ${numColumns === 1 ? 'flex-col' : ''}`}>
            {numColumns === 1 ? (
              // Mobile: single column
              services.map((service, index) => renderColumnCard(service, index))
            ) : (
              // Tablet (2) / Desktop (3): multi-column
              Array.from({ length: numColumns }, (_, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-5 flex-1">
                  {services
                    .map((service, index) => ({ service, index }))
                    .filter((_, i) => i % numColumns === colIndex)
                    .map(({ service, index }) => renderColumnCard(service, index))
                  }
                </div>
              ))
            )}
          </div>
        </LayoutGroup>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-3xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border/50 backdrop-blur-sm">
            <p className="text-muted-foreground text-lg max-w-md">
              Need a custom solution? Our experts can tailor a security program to your specific needs.
            </p>
            <Button
              size="lg"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              }}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 px-8"
            >
              Get Custom Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
