import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="About Me in React"
          description="My first React project, rebuilt from a plain HTML page."
          tech="React · Tailwind CSS"
          link="https://github.com/leighchristianlinaban/CSIT340-Lab1-Linaban"
        />
        <ProjectCard
          year="2025"
          title="Animal Shelter Adoption & Rescue System"
          description="A collaborative Django web application built as a group project, where each team member is responsible for a specific app module to manage an animal shelter's daily operations. The system helps track pets, adopters, staff members, medical records, foster assignments, and adoption processes."
          tech="Python · Django"
          link="https://github.com/carlos09123123/CSIT327"
        />
        <ProjectCard
          year="2025"
          title="RentBuddy"
          description="It is a passion project built to solve a struggle many students face: finding the perfect place to live during university."
          tech="JavaScript"
          link="https://github.com/YlanDainne/Roomly"
        />
      </div>
    </section>
  )
}

export default ProjectsSection
