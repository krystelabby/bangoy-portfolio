import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-brand-gray py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title="Projects" subtitle="Work that showcases my experience" />

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:border-brand-orange/40 hover:shadow-lg"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-2 bg-linear-to-r from-brand-orange via-brand-purple to-brand-black" />
              <div className="p-6 md:p-8">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange">
                    {project.year}
                  </span>
                  <span className="rounded-full bg-brand-purple/10 px-3 py-1 text-xs font-semibold text-brand-purple">
                    {project.role}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold leading-snug text-brand-black md:text-2xl">
                  {project.title}
                </h3>
                <p className="font-body mt-4 leading-relaxed text-zinc-600">{project.description}</p>
                <div className="mt-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Tech Stack
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md bg-brand-black px-3 py-1 text-xs font-medium text-white"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
