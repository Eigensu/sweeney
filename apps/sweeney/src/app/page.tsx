import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        backgroundImage: "url('/herowall.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="pointer-events-none flex min-h-[80vh] flex-col items-center justify-center gap-6 p-4 pt-24 pb-10 sm:min-h-screen sm:pt-16 sm:pb-20">
        <Image
          src="/transparent.png"
          alt="Transparent Image"
          width={800}
          height={600}
          className="mt-4 h-auto w-full max-w-4xl object-contain opacity-90 drop-shadow-md"
          priority
        />
        <div className="mt-4 flex w-full max-w-2xl flex-col items-center gap-8 px-4 text-center font-[family-name:var(--font-poppins)] text-sm leading-relaxed text-[#01382E] sm:mt-4 sm:gap-12 sm:text-base md:text-[1.05rem]">
          <p>
            Sweeney is a place where <b>recipes are preserved and craft is created</b>. It is a tale
            of two tastes, shaped by home kitchens. <b>Thai cooking</b> rooted in instinct, balance,
            and shared comfort sits alongside <b>European traditions</b> built on patience,
            repetition and care. One brings warmth, spice and generosity; the other offers
            restraint, depth and familiarity.
          </p>
          <p>
            Together, they create a table that feels lived-in where food is cooked the way it has
            always been, remembered as much as it is tasted, and <b>always leads you home</b>.
          </p>
        </div>
      </div>

      {/* Door sketch and description section */}
      <section className="pointer-events-none relative w-full px-4 pt-0 pb-32 sm:px-8 sm:pt-2 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 lg:flex-row lg:gap-32">
          {/* Door sketch */}
          <div className="flex justify-center lg:w-2/5 lg:justify-end">
            <Image
              src="/doorsketchh.png"
              alt="Door Sketch"
              width={800}
              height={600}
              className="h-auto w-full max-w-[250px] object-contain sm:max-w-[350px] md:max-w-[400px] lg:-ml-12 lg:max-w-[450px]"
              priority
            />
          </div>

          {/* Centered text to the right */}
          <div className="flex justify-center lg:w-1/2 lg:justify-start">
            <div className="max-w-md text-center font-[family-name:var(--font-poppins)] text-sm leading-relaxed text-[#01382E] sm:text-base md:text-[1.05rem]">
              <p>
                A refined dining experience inspired by the charm of a <b>Thai village</b>,
                thoughtfully blended with subtle <b>European elegance</b>. Warm earthy tones, rich
                textures, and a seamless spatial flow create an atmosphere that is both immersive
                and sophisticated. The result is a timeless yet contemporary setting designed to
                transport guests while enhancing comfort and connection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
