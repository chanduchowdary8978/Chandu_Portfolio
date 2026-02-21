import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { ProjectsSection } from "@/components/sections/projects"
import { BlogSection } from "@/components/sections/blog"
import { RoadmapSection } from "@/components/sections/roadmap"
import { ContactSection } from "@/components/sections/contact"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <RoadmapSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
