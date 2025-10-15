import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import ProjectsSection from "@/components/projects-section"
import LabSection from "@/components/lab-section"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <section id="projects">
        <ProjectsSection />
      </section>
      <LabSection />
      <Footer />
    </main>
  )
}
