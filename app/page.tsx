import TechStack from "./components/tech-stack"
// Import the AboutMe component
import AboutMe from "./components/about-me"
import AnimatedBackground from "./components/animated-background"
import HeroSection from "./components/hero-section"
import ProjectsSection from "./components/projects-section"
import ContactSection from "./components/contact-section"
import Footer from "./components/footer"
import Navbar from "./components/navbar"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navbar />

      <main>
        <HeroSection />
        <AboutMe />
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <TechStack />
          </div>
        </section>
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

