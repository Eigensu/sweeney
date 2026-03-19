import Image from "next/image";

export default function Home() {
  const openingFeatureImage = "/food/00009843.JPG";

  const landingGallery = [
    {
      src: "/food/Gai Hor Bai Toey.jpg",
      alt: "Thai signature starter plated with herbs",
      span: "col-span-2 row-span-2",
    },
    {
      src: "/beverages/00009861.JPG",
      alt: "Craft beverage at the bar",
      span: "col-span-1 row-span-2",
    },
    {
      src: "/food/grilled new Zealand lamb chops.jpg",
      alt: "Grilled lamb preparation",
      span: "col-span-1 row-span-1",
    },
    {
      src: "/food/Truffle Honey Feta Parcel(1).jpg",
      alt: "Truffle honey feta parcel",
      span: "col-span-2 row-span-1",
    },
    {
      src: "/beverages/00009857.JPG",
      alt: "Signature drink with garnish",
      span: "col-span-1 row-span-1",
    },
    {
      src: "/food/mango sticky rice Crème brulee.jpg",
      alt: "Dessert inspired by mango sticky rice",
      span: "col-span-2 row-span-2",
    },
    {
      src: "/food/French onion soup_.jpg",
      alt: "French onion soup presentation",
      span: "col-span-2 row-span-1",
    },
    {
      src: "/beverages/00009865.JPG",
      alt: "Cocktail at Sweeney",
      span: "col-span-1 row-span-2",
    },
  ];

  const mobileGallery = [
    landingGallery[0],
    landingGallery[2],
    landingGallery[5],
    landingGallery[7],
  ];

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
        <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-[#01382E]/20 bg-[#FAF9F6]/75 p-6 text-[#01382E] shadow-[0_14px_45px_rgba(1,56,46,0.12)] backdrop-blur-[2px] sm:p-8 lg:col-span-5">
            <p className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.28em] uppercase opacity-70">
              Reservations
            </p>
            <h2
              className="mt-3"
              style={{
                fontFamily: 'var(--font-ability), "Ability", serif',
                fontSize: "clamp(2.15rem, 4.2vw, 3.1rem)",
                lineHeight: 1,
              }}
            >
              Call Sweeney
            </h2>
            <a
              href="tel:+917304295000"
              className="mt-5 inline-block font-[family-name:var(--font-montserrat)] text-2xl font-light tracking-tight transition-opacity hover:opacity-70 sm:text-3xl"
              aria-label="Call Sweeney on +91 73042 95000"
            >
              +91 73042 95000
            </a>
            <p className="mt-5 max-w-md font-[family-name:var(--font-poppins)] text-sm leading-relaxed sm:text-[0.98rem]">
              For table bookings and private dining inquiries, connect directly with our team. We
              will help you plan a thoughtful dining experience.
            </p>
          </article>

          <article className="overflow-hidden rounded-2xl border border-[#01382E]/20 bg-[#FAF9F6]/65 shadow-[0_14px_45px_rgba(1,56,46,0.12)] backdrop-blur-[2px] lg:col-span-7">
            <div className="relative min-h-[320px] w-full sm:min-h-[380px]">
              <Image
                src={openingFeatureImage}
                alt="Sweeney opening celebration"
                fill
                className="object-cover"
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
        </div>
      </section>

      <section className="relative z-10 w-full px-4 pb-28 sm:px-8 md:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-8 text-center">
            <p className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.28em] text-[#01382E]/80 uppercase">
              A Glimpse Of Sweeney
            </p>
            <h2
              className="mt-2 text-[#01382E] sm:hidden"
              style={{
                fontFamily: 'var(--font-ability), "Ability", serif',
                fontSize: "clamp(2.1rem, 5vw, 3.3rem)",
                lineHeight: 1.1,
              }}
            >
              Crafted Moments
            </h2>
            <h2
              className="mt-2 hidden text-[#01382E] sm:block"
              style={{
                fontFamily: 'var(--font-ability), "Ability", serif',
                fontSize: "clamp(2.1rem, 5vw, 3.3rem)",
                lineHeight: 1.1,
              }}
            >
              Crafted Moments In A Better Grid
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:hidden">
            {mobileGallery.map((image, index) => (
              <div
                key={`${image.src}-mobile`}
                className={`group relative overflow-hidden rounded-xl border border-[#01382E]/15 bg-[#FAF9F6]/65 shadow-[0_10px_28px_rgba(1,56,46,0.1)] ${index === 0 ? "col-span-2 aspect-[16/10]" : "aspect-[4/5]"}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 639px) 100vw"
                />
              </div>
            ))}
          </div>

          <div className="hidden auto-rows-[150px] grid-cols-4 gap-3 sm:grid lg:auto-rows-[170px] lg:grid-cols-6">
            {landingGallery.map((image) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-xl border border-[#01382E]/15 bg-[#FAF9F6]/65 shadow-[0_10px_28px_rgba(1,56,46,0.1)] ${image.span}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
