import { motion } from 'framer-motion'
import { aboutText, profile } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-brand-gray py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title="About Me" subtitle="Who I am and what I do" />
        <motion.div
          className="mx-auto max-w-3xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm md:p-10"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-body text-justify text-lg leading-relaxed text-zinc-700">
            {aboutText}
          </p>
          <div className="mt-8 grid gap-4 border-t border-zinc-100 pt-8 sm:grid-cols-3">
            {[
              { label: 'Name', value: profile.preferredName },
              { label: 'Role', value: profile.title.split('|')[0].trim() },
              { label: 'Focus', value: 'UI/UX & IS' },
            ].map((item) => (
              <div key={item.label} className="text-center sm:text-left">
                <p className="font-body text-xs font-semibold uppercase tracking-wider text-brand-orange">
                  {item.label}
                </p>
                <p className="font-body mt-1 font-medium text-brand-black">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
