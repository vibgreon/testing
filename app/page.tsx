import Image from "next/image"
import Loader from "./components/layout/Loader"
import WorkGallery from "./components/home/workGallery"
import ParallaxImages from "./components/home/ParallaxImages"
import EmailSection from "./components/home/EmailSection"
import PageBranches from "./components/home/PageBranches"

export default function Home() {
  return (
    <div className="bg-white relative">
      <Loader />
      <PageBranches />

      {/* Pillar decorations */}
      <Image
        src="/images/HomeImages/piller-v.svg"
        alt=""
        width={120}
        height={800}
        loading="eager"
        className="fixed top-0 h-screen w-auto object-contain object-top pointer-events-none select-none hidden md:block"
        style={{
          zIndex: 0,
          opacity: 0.18,
          left: "-70px",
          width: "auto",
        }}
      />

      <Image
        src="/images/HomeImages/piller-2-v.svg"
        alt=""
        width={120}
        height={800}
        loading="eager"
        className="fixed top-0 h-screen w-auto object-contain object-top pointer-events-none select-none hidden md:block"
        style={{
          zIndex: 0,
          opacity: 0.18,
          right: "-40px",
          width: "auto",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Hero section */}
        <div className="relative min-h-[calc(100vh-120px)] flex flex-col justify-center items-center text-center gap-6 overflow-hidden md:overflow-visible">
          <ParallaxImages />

          <div
            className="relative flex flex-col items-center md:bg-white md:px-6 md:py-4"
            style={{ zIndex: 5 }}
          >
            <h1 className="text-4xl md:text-6xl tracking-tight text-black">
              <span
                className="pr-1.5 md:pr-3"
                style={{
                  fontFamily: "ImperialCapsSans, sans-serif",
                  fontSize: "1.5em",
                }}
              >
                V
              </span>

              <span
                style={{
                  fontFamily: "ImperialSans, sans-serif",
                  marginLeft: "4px",
                }}
              >
                ivek
              </span>

              <span
                style={{
                  fontFamily: "ImperialCapsSans, sans-serif",
                  fontSize: "1.5em",
                }}
              >
                V
              </span>

              <span
                style={{
                  fontFamily: "ImperialSans, sans-serif",
                  marginLeft: "4px",
                }}
              >
                enkatesh
              </span>
            </h1>
            <div className="flex flex-col gap-6" style={{
                  fontFamily: "FunnelDisplay, sans-serif",
                  fontWeight: "300",
                }}>
              <div>Product Designer & Developer
              </div>
              <p
                className="text-sm md:text-base text-gray-400 leading-relaxed max-w-md"
                style={{
                  fontFamily: "FunnelDisplay, sans-serif",
                  fontWeight: "300",
                }}
              >
                Eating Interaction, intent & usability for main
                course. Business research & architecture on the side.
              </p>
            </div>
          </div>

          <div
            className="absolute bottom-28 md:bottom-20 left-0 right-0 flex justify-center items-center"
            style={{ zIndex: 5 }}
          >
            <EmailSection />
          </div>
        </div>

        {/* Work section */}
        <div data-section="work">
          <WorkGallery />
        </div>
      </div>
    </div>
  )
}