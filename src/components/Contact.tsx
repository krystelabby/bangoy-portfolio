import { motion } from 'framer-motion'
import { contact, profile } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

const contactItems = [
  {
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    label: 'Phone',
    value: contact.phone,
    href: `tel:${contact.phone}`,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
  },
  {
    label: 'Location',
    value: contact.location,
    href: undefined,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
    ),
  },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title="Contact" subtitle="Let's connect and collaborate" />

        <motion.div
          className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-linear-to-r from-brand-orange via-brand-purple to-brand-black px-6 py-8 text-center text-white md:px-10">
            <h3 className="font-heading text-2xl font-bold">Work with {profile.preferredName}</h3>
            <p className="font-body mt-2 text-white/90">
              Open to opportunities, collaborations, and creative projects.
            </p>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-2 md:p-8">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className={`flex gap-4 rounded-xl border border-zinc-100 p-4 ${item.label === 'Location' ? 'sm:col-span-2' : ''}`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    {item.icon}
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-body mt-1 block truncate text-sm font-medium text-brand-black transition hover:text-brand-orange"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-body mt-1 text-sm leading-relaxed font-medium text-brand-black">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex flex-col justify-center gap-3 sm:col-span-2 sm:flex-row">
              <a
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#1877F2] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Facebook
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Instagram
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
