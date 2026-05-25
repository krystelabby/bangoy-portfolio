import { useState } from 'react'
import { motion } from 'framer-motion'
import { academicAchievements, completionCertificates, type CertificateAsset } from '../assets'
import { Lightbox } from './Lightbox'
import { SectionHeading } from './SectionHeading'
import { ImageFallback } from './ImageFallback'

type LightboxState = {
  src: string
  alt: string
  label: string
} | null

function CertificateImage({
  src,
  alt,
  label,
}: {
  src: string
  alt: string
  label: string
}) {
  const [error, setError] = useState(false)

  if (error) {
    return <ImageFallback className="h-full w-full" label={label} />
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-contain p-2 transition group-hover:scale-105"
      onError={() => setError(true)}
    />
  )
}

function CertificateCard({
  cert,
  index,
  groupTitle,
  onOpen,
}: {
  cert: CertificateAsset
  index: number
  groupTitle: string
  onOpen: (state: LightboxState) => void
}) {
  return (
    <motion.button
      type="button"
      className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand-purple/40 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onClick={() =>
        onOpen({
          src: cert.src,
          alt: cert.alt,
          label: `${groupTitle} — ${cert.label}`,
        })
      }
    >
      <CertificateImage src={cert.src} alt={cert.alt} label={cert.label} />
      <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-brand-black/70 to-transparent px-2 py-2 text-left text-xs font-medium text-white opacity-0 transition group-hover:opacity-100">
        {cert.label}
      </span>
    </motion.button>
  )
}

export function Certificates() {
  const [lightbox, setLightbox] = useState<LightboxState>(null)

  const hasCertificates =
    completionCertificates.length > 0 || academicAchievements.items.length > 0

  if (!hasCertificates) {
    return null
  }

  return (
    <section id="certificates" className="scroll-mt-24 bg-brand-gray py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          title="Certificates & Achievements"
          subtitle="Recognition and milestones from academic and professional experiences"
        />

        <div className="space-y-12">
          {completionCertificates.length > 0 && (
            <div>
              <h3 className="font-heading mb-5 text-lg font-bold text-brand-black">
                Certificates of Completion
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {completionCertificates.map((cert, index) => (
                  <CertificateCard
                    key={cert.id}
                    cert={cert}
                    index={index}
                    groupTitle={cert.group}
                    onOpen={setLightbox}
                  />
                ))}
              </div>
            </div>
          )}

          {academicAchievements.items.length > 0 && (
            <div>
              <h3 className="font-heading mb-5 text-lg font-bold text-brand-black">
                {academicAchievements.title}
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {academicAchievements.items.map((cert, index) => (
                  <CertificateCard
                    key={cert.id}
                    cert={cert}
                    index={index}
                    groupTitle={academicAchievements.title}
                    onOpen={setLightbox}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {lightbox && (
        <Lightbox
          isOpen={!!lightbox}
          src={lightbox.src}
          alt={lightbox.alt}
          label={lightbox.label}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}
