import { useState } from 'react'
import { assets } from '../assets'
import { profile } from '../data/portfolio'
import { ImageFallback } from './ImageFallback'

export function FlipProfileCard() {
  const [flipped, setFlipped] = useState(false)
  const [frontError, setFrontError] = useState(false)
  const [backError, setBackError] = useState(false)

  const toggleFlip = () => setFlipped((f) => !f)

  return (
    <div
      className="group perspective-1000 mx-auto h-52 w-52 shrink-0 sm:h-60 sm:w-60 md:h-72 md:w-72"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <button
        type="button"
        className={`relative h-full w-full cursor-pointer border-0 bg-transparent p-0 preserve-3d transition-transform duration-[650ms] ease-in-out will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 md:group-hover:rotate-y-180 ${flipped ? 'rotate-y-180' : ''}`}
        style={{ transformStyle: 'preserve-3d', WebkitTransformStyle: 'preserve-3d' }}
        onClick={toggleFlip}
        aria-label="Flip profile card"
      >
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl border-4 border-white shadow-xl shadow-brand-purple/20 backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {frontError ? (
            <ImageFallback className="h-full w-full" label="Profile photo" />
          ) : (
            <img
              src={assets.profile}
              alt={`${profile.fullName} — professional profile`}
              className="h-full w-full object-cover"
              onError={() => setFrontError(true)}
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-brand-black/30 to-transparent" />
        </div>

        <div
          className="absolute inset-0 overflow-hidden rounded-2xl border-4 border-white shadow-xl backface-hidden rotate-y-180"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {backError ? (
            <div className="flex h-full w-full flex-col items-center justify-center bg-linear-to-br from-brand-orange via-brand-purple to-brand-black p-6 text-white">
              <span className="font-heading text-5xl font-bold tracking-wider sm:text-6xl">
                {profile.initials}
              </span>
              <p className="font-body mt-3 text-center text-sm font-medium opacity-95 sm:text-base">
                {profile.flipTagline}
              </p>
            </div>
          ) : (
            <img
              src={assets.profileAlternate}
              alt={`${profile.fullName} — alternate photo`}
              className="h-full w-full object-cover"
              onError={() => setBackError(true)}
            />
          )}
        </div>
      </button>
    </div>
  )
}
