import { profile } from '../data/portfolio'

type ImageFallbackProps = {
  className?: string
  label?: string
}

/** Shown when an imported asset fails to load at runtime. */
export function ImageFallback({ className = '', label = 'Image unavailable' }: ImageFallbackProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-linear-to-br from-brand-orange/20 via-brand-purple/20 to-zinc-100 p-4 text-center ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="font-heading text-2xl font-bold text-brand-purple">{profile.initials}</span>
      <span className="font-body mt-2 text-xs text-zinc-500">{label}</span>
    </div>
  )
}
