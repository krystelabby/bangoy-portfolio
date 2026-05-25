import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type LightboxProps = {
  isOpen: boolean
  src: string
  alt: string
  label: string
  onClose: () => void
}

export function Lightbox({ isOpen, src, alt, label, onClose }: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={label}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close lightbox"
          />
          <motion.figure
            className="relative z-10 flex max-h-[90vh] max-w-[min(90vw,56rem)] flex-col items-center"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <img
              src={src}
              alt={alt}
              className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
            />
            <figcaption className="mt-3 text-center text-sm text-white/90">
              {label}
            </figcaption>
            <button
              type="button"
              onClick={onClose}
              className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-black shadow-lg transition hover:bg-brand-orange hover:text-white md:-right-4 md:-top-4"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
