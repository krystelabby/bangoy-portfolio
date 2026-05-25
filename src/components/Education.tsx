import { motion } from 'framer-motion'
import { education, internship, organization } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

function TimelineCard({
  title,
  subtitle,
  meta,
  items,
  accent,
  className = '',
}: {
  title: string
  subtitle: string
  meta?: string
  items?: string[]
  accent: 'orange' | 'purple'
  className?: string
}) {
  const accentClasses =
    accent === 'orange'
      ? 'border-brand-orange/30 bg-brand-orange/5'
      : 'border-brand-purple/30 bg-brand-purple/5'

  return (
    <motion.div
      className={`flex h-full flex-col rounded-2xl border p-6 md:p-8 ${accentClasses} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <h3 className="font-heading text-lg font-bold text-brand-black md:text-xl">{title}</h3>
      <p className="font-body mt-1 font-medium text-zinc-700">{subtitle}</p>
      {meta && <p className="font-body mt-2 text-sm text-zinc-500">{meta}</p>}
      {items && items.length > 0 && (
        <ul className="font-body mt-4 space-y-2 text-sm text-zinc-600">
          {items.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
              {line}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}

export function Education() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          title="Education & Experience"
          subtitle="Academic background and hands-on learning"
        />

        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TimelineCard
            accent="orange"
            title={education.school}
            subtitle={education.degree}
            meta={education.status}
          />
          <TimelineCard
            accent="purple"
            title={internship.organization}
            subtitle={internship.role}
            meta={`Duration: ${internship.duration}`}
            items={internship.responsibilities}
          />
          <TimelineCard
            accent="purple"
            className="md:col-span-2 lg:col-span-1"
            title={organization.name}
            subtitle="Student Organization"
            items={organization.responsibilities}
          />
        </div>
      </div>
    </section>
  )
}
