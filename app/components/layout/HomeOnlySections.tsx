"use client"

import { usePathname } from "next/navigation"

import AboutVivek from "../home/aboutVivek"
import ProposalsGallery from "../home/proposalsGallery"

export default function HomeOnlySections() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  if (!isHomePage) return null

  return (
    <>
      {/* OUTSIDE main → fixes GSAP pin */}
      <AboutVivek />

      {/* AFTER AboutVivek → future sections continue here */}
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div data-section="proposals">
          <ProposalsGallery />
        </div>

        {/* add future sections here */}
      </div>
    </>
  )
}