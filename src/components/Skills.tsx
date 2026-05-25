import { motion } from 'framer-motion'
import { technicalSkills, tools } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title="Skills" subtitle="Technical abilities and tools I use" />

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading mb-5 flex items-center gap-2 text-xl font-bold text-brand-black">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                ◆
              </span>
              Technical Skills
            </h3>
            <motion.ul
              className="flex flex-wrap gap-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {technicalSkills.map((skill) => (
                <motion.li key={skill} variants={item}>
                  <span className="inline-block rounded-full border border-brand-orange/30 bg-brand-orange/5 px-4 py-2 text-sm font-medium text-brand-black transition hover:border-brand-orange hover:bg-brand-orange/15">
                    {skill}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading mb-5 flex items-center gap-2 text-xl font-bold text-brand-black">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple">
                ◆
              </span>
              Tools
            </h3>
            <motion.ul
              className="flex flex-wrap gap-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {tools.map((tool) => (
                <motion.li key={tool} variants={item}>
                  <span className="inline-block rounded-full border border-brand-purple/30 bg-brand-purple/5 px-4 py-2 text-sm font-medium text-brand-black transition hover:border-brand-purple hover:bg-brand-purple/15">
                    {tool}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
