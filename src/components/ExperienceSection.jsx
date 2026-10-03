import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2026 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Taking up web development, databases, and systems analysis."
        />
        
        <TimelineItem
          period="2025 – 2026"
          title="3rd Year College, BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Had built a project on Appdev and Information Management Systems subjects using Java and MySQL."
        />

        <TimelineItem
          period="2024 – 2025"
          title="2nd Year College, BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Had built a project using Java on OOP subject."
        />
        <TimelineItem
          period="2023 – 2024"
          title="1st Year College, BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Had built a project using HTML, CSS, and JavaScript on Web Development subject."
        />
      </ol>
    </section>
  )
}

export default ExperienceSection
