import { motion } from 'framer-motion'
import { assets } from '../assets'
import { profile } from '../data/portfolio'
import { FlipProfileCard } from './FlipProfileCard'

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20 pb-16"
    >
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-purple/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-32 h-80 w-80 rounded-full bg-brand-orange/15 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-12 md:px-6 lg:gap-16">
        <motion.div
          className="order-2 text-center md:order-1 md:text-left"
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">
            Hi, I&apos;m {profile.preferredName}
          </p>
          <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-brand-black sm:text-4xl lg:text-5xl">
            {profile.fullName}
          </h1>
          <p className="font-heading mt-3 text-lg font-semibold text-brand-purple md:text-xl">
            {profile.title}
          </p>
          <p className="font-body mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-600 md:mx-0">
            {profile.heroBio}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href={assets.resume}
              download="Christian_Fer_Bangoy_CV.pdf"
              className="rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/30 transition hover:-translate-y-0.5 hover:bg-brand-orange-dark hover:shadow-xl"
            >
              Download CV
            </a>
            <button
              type="button"
              onClick={scrollToProjects}
              className="rounded-full border-2 border-brand-purple px-6 py-3 text-sm font-semibold text-brand-purple transition hover:-translate-y-0.5 hover:bg-brand-purple hover:text-white"
            >
              View Projects
            </button>
          </div>
        </motion.div>

        <motion.div
          className="order-1 flex justify-center md:order-2"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <FlipProfileCard />
        </motion.div>
      </div>
    </section>
  )
}
