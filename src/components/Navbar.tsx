import { useState } from 'react'
import { navLinks } from '../data/portfolio'

type NavbarProps = {
  activeId: string
}

export function Navbar({ activeId }: NavbarProps) {
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <button
          type="button"
          onClick={() => scrollTo('hero')}
          className="font-heading text-lg font-bold tracking-tight"
        >
          <span className="text-brand-orange">C</span>
          <span className="text-brand-black">FB</span>
          <span className="text-brand-purple">.</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => scrollTo(id)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  activeId === id
                    ? 'bg-brand-orange/10 text-brand-orange'
                    : 'text-zinc-600 hover:text-brand-purple'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-zinc-200 bg-white px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => scrollTo(id)}
                  className={`w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                    activeId === id ? 'bg-brand-orange/10 text-brand-orange' : 'text-zinc-700'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
