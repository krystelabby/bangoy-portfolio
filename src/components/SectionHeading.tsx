import { motion } from 'framer-motion'

type SectionHeadingProps = {
  title: string
  subtitle?: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-10 text-center md:mb-14"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-heading text-3xl font-bold tracking-tight text-brand-black md:text-4xl">
        <span className="bg-linear-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="font-body mx-auto mt-3 max-w-2xl text-base text-zinc-600 md:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-brand-orange to-brand-purple" />
    </motion.div>
  )
}
