import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"

// Lazy load heavy components for better performance on weak devices
const MyProjectsSection = dynamic(
  () => import("@/components/my-projects-section").then((mod) => ({ default: mod.MyProjectsSection })),
  {
    loading: () => <div className="py-16 bg-[#1a1a1a] min-h-[400px]" />,
  }
)
const ReadySolutionsSection = dynamic(
  () => import("@/components/ready-solutions-section").then((mod) => ({ default: mod.ReadySolutionsSection })),
  {
    loading: () => <div className="py-16 bg-[#F5F5F5] min-h-[400px]" />,
  }
)
const PortfolioSection = dynamic(
  () => import("@/components/portfolio-section").then((mod) => ({ default: mod.PortfolioSection })),
  {
    loading: () => <div className="py-16 bg-white min-h-[400px]" />,
  }
)
const ProcessSection = dynamic(
  () => import("@/components/process-section").then((mod) => ({ default: mod.ProcessSection })),
  {
    loading: () => <div className="py-16 bg-white min-h-[400px]" />,
  }
)
const AboutSection = dynamic(
  () => import("@/components/about-section").then((mod) => ({ default: mod.AboutSection })),
  {
    loading: () => <div className="py-16 bg-[#1a1a1a] min-h-[400px]" />,
  }
)
const ContactSection = dynamic(
  () => import("@/components/contact-section").then((mod) => ({ default: mod.ContactSection })),
  {
    loading: () => <div className="py-16 bg-white min-h-[400px]" />,
  }
)
const Footer = dynamic(() => import("@/components/footer").then((mod) => ({ default: mod.Footer })), {
  ssr: true,
})

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <MyProjectsSection />
        <ReadySolutionsSection />
        <PortfolioSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
