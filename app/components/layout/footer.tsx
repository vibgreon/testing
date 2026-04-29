"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/vibgreon' },
  // { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'GitHub',    href: 'https://github.com/vibgreon' },
]

const navLinks = [
  { label: 'Works',     href: '/#work' },
  // { label: 'Unplugged', href: '/#unplugged' },
  { label: 'About',     href: '/about' },
]

export default function Footer() {
  const pathname = usePathname()
  const isUnpluggedPage = pathname?.startsWith('/unplugged/')
  const isProposalPage = pathname?.startsWith('/proposals')

  if (isProposalPage) return null

  return (
    <footer className={`mt-16 relative overflow-visible${isUnpluggedPage ? ' md:hidden' : ''}`}>

<div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Big name */}
        <div className="pt-4 pb-8 text-center relative flex items-center justify-center gap-12">

          {/* Left branch */}
          <img
            src="/images/HomeImages/branch.svg"
            aria-hidden="true"
            className="hidden md:block shrink-0 pointer-events-none select-none"
            style={{
              height: '160px', width: 'auto',
              transform: 'rotate(90deg)',
              filter: 'brightness(0) opacity(0.18)',
              marginRight: '-30px',
            }}
          />

          <div className="flex flex-col items-center">
          <h2
            className="text-4xl md:text-6xl leading-none tracking-tight text-black select-none"
            aria-hidden="true"
          >
            <span className='pr-2 md:pr-4' style={{ fontFamily: 'ImperialCapsSans, sans-serif', fontSize: '1.4em' }}>V</span>
            <span style={{ fontFamily: 'ImperialSans, sans-serif' }}>ivek</span>
          </h2>
          <p
            className="mt-2 text-sm text-gray-400"
            style={{ fontFamily: 'FunnelDisplay, sans-serif', fontWeight: 300 }}
          >
            Product Designer
          </p>
          </div>

          {/* Right branch — mirrored */}
          <img
            src="/images/HomeImages/branch.svg"
            aria-hidden="true"
            className="hidden md:block shrink-0 pointer-events-none select-none"
            style={{
              height: '160px', width: 'auto',
              transform: 'rotate(90deg) scaleX(-1)',
              filter: 'brightness(0) opacity(0.18)',
              marginLeft: '-30px',
            }}
          />

        </div>

        <div className="border-t border-gray-100" />

        {/* Bottom row */}
        <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo + year */}
          <div className="flex items-center gap-3">
            <span
              className="text-xs text-gray-400"
              style={{ fontFamily: 'FunnelDisplay, sans-serif' }}
            >
              © 2026 Vivek Venkatesh
            </span>
          </div>

          {/* Nav links */}
          {/* <nav className="flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-xs text-gray-400 hover:text-black transition-colors duration-200"
                style={{ fontFamily: 'FunnelDisplay, sans-serif' }}
              >
                {l.label}
              </Link>
            ))}
          </nav> */}

          {/* Social links */}
          <div className="flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-black transition-colors duration-200"
                style={{ fontFamily: 'FunnelDisplay, sans-serif' }}
              >
                {l.label}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}