import { profile } from '../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="font-body border-t border-zinc-200 bg-brand-black py-8 text-center text-sm text-zinc-400">
      <p>
        © {year}{' '}
        <span className="text-white">{profile.fullName}</span>. All rights reserved.
      </p>
    </footer>
  )
}
