import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VideoIntroSection } from "@/components/sections/VideoIntroSection"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { ProjectsSection } from "@/components/sections/projects"
import { ResearchSection } from "@/components/sections/research"
import { BlogSection } from "@/components/sections/blog"
import { ContactSection } from "@/components/sections/contact"

export default function Page() {
  return (
    <>
      {/* Navbar sits above the video hero — transparent on hero, blurs on scroll */}
      <Navbar />
      <main>
        <VideoIntroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResearchSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
