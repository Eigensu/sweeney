import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        backgroundImage: "url('/herowall2.png')",
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

      <section className="relative z-10 w-full px-4 pb-12 sm:px-8 md:px-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 lg:grid lg:grid-cols-7 lg:grid-rows-[repeat(9,minmax(0,auto))] lg:gap-2">
          {/* Left card — experience */}
          <article className="flex flex-col justify-between gap-6 rounded-2xl border border-[#01382E]/20 bg-[#FAF9F6]/75 p-8 text-[#01382E] shadow-[0_14px_45px_rgba(1,56,46,0.12)] backdrop-blur-[2px] sm:p-10 lg:col-span-3 lg:col-start-1 lg:row-span-5 lg:row-start-1">
            <div className="flex flex-col gap-5">
              <h2
                style={{
                  fontFamily: 'var(--font-ability), "Ability", serif',
                  fontSize: "clamp(2.15rem, 4.2vw, 3.1rem)",
                  lineHeight: 1,
                }}
              >
                Our Story
              </h2>
              <div className="flex flex-col gap-4 font-[family-name:var(--font-poppins)] text-sm leading-relaxed sm:text-[0.98rem]">
                <p>
                  Sweeney is a home for Thai and European cuisine, rediscovered, refined and
                  reimagined. Inspired by months of research and real kitchens, our food reflects
                  how it’s truly cooked and lived with, from Thai households built on balance and
                  sharing to Italian kitchens shaped by care and tradition.
                </p>
                <p>
                  Every dish begins with memory and is carried forward with intention, preserving
                  authenticity while gently evolving for today. Alongside the kitchen, our bar
                  nurtures the next generation of talent through craft, discipline and quiet
                  excellence.
                </p>
                <p>At Sweeney, home is where everything begins.</p>
              </div>
            </div>
            <a
              href="/menu"
              className="block w-full rounded-[6px] border border-[#01382E] px-5 py-2.5 text-center font-[family-name:var(--font-poppins)] text-sm tracking-[0.15em] text-[#01382E] transition-colors duration-300 hover:bg-[#01382E]/5"
            >
              EXPLORE MENU
            </a>
          </article>

          {/* Right card — image */}
          <article className="overflow-hidden rounded-2xl border border-[#01382E]/20 bg-[#FAF9F6]/65 shadow-[0_14px_45px_rgba(1,56,46,0.12)] backdrop-blur-[2px] lg:col-span-4 lg:col-start-4 lg:row-span-5 lg:row-start-1">
            <div className="relative min-h-[420px] w-full lg:h-full">
              <Image
                src="/Malaika Arora.jpg"
                alt="Malaika Arora at Sweeney"
                fill
                className="object-cover object-[100%_70%]"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#01382E]/70 via-[#01382E]/20 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-5 text-[#FAF9F6] sm:p-7">
                <p className="font-[family-name:var(--font-montserrat)] text-[11px] tracking-[0.28em] uppercase opacity-85 sm:text-xs">
                  Opening Story
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-poppins)] text-xl leading-tight sm:text-2xl">
                  Opened by Malaika Arora and Dhaval Udeshi
                </h3>
              </div>
            </div>
          </article>

          {/* Bottom card — reservation */}
          <article className="flex flex-col gap-6 rounded-2xl border border-[#01382E]/20 bg-[#FAF9F6]/75 px-8 py-8 text-[#01382E] shadow-[0_14px_45px_rgba(1,56,46,0.12)] backdrop-blur-[2px] sm:px-10 lg:col-span-7 lg:col-start-1 lg:row-span-4 lg:row-start-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Left — heading + description */}
            <div className="flex flex-col gap-3 lg:max-w-sm">
              <h2
                style={{
                  fontFamily: 'var(--font-ability), "Ability", serif',
                  fontSize: "clamp(2.15rem, 4.2vw, 3.1rem)",
                  lineHeight: 1,
                }}
              >
                Make Reservations
              </h2>
              <p className="font-[family-name:var(--font-poppins)] text-sm leading-relaxed opacity-70 sm:text-[0.98rem] lg:max-w-[320px]">
                For table bookings and private dining inquiries, connect directly with our team. We
                will help you plan a thoughtful dining experience.
              </p>
            </div>

            {/* Right — phone + WhatsApp */}
            <div className="flex flex-col items-start gap-3 lg:items-end lg:text-right">
              <a
                href="tel:+917304295000"
                className="font-[family-name:var(--font-montserrat)] text-2xl font-light tracking-tight transition-opacity hover:opacity-70 sm:text-3xl"
                aria-label="Call Sweeney on +91 73042 95000"
              >
                +91 73042 95000
              </a>
              <a
                href="https://wa.me/917304295000"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-poppins)] text-sm text-[#01382E]/70 underline underline-offset-4 hover:text-[#01382E]"
              >
                Eager to reserve? Message us.
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
