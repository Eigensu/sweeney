import Image from "next/image";

export default function MenuPage() {
  const beverageImages = [
    "/beverages/00009857.JPG",
    "/beverages/00009864.JPG",
    "/beverages/00009861.JPG",
    "/beverages/00009862.JPG",
    "/beverages/00009865.JPG",
    "/beverages/00009867.JPG",
    "/beverages/00009871.JPG",
  ];

  const foodImages: { [key: number]: string } = {
    1: "/food/grilled new Zealand lamb chops.jpg",
    2: "/food/CRAB MEAT FRIED RICE.jpg",
    3: "/food/Gai Hor Bai Toey.jpg",
    4: "/food/20.JPG",
    5: "/food/tub tim krob(1).jpg",
    6: "/food/Tofu Broccoli satay_.jpg",
    7: "/food/mango sticky rice Crème brulee.jpg",
    8: "/food/Gnocchi colocasia.jpg",
    9: "/food/French onion soup_.jpg",
    10: "/food/Truffle Honey Feta Parcel(1).jpg",
  };

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
      <div className="flex flex-col items-center justify-center p-6 pt-32 pb-20 sm:p-10 sm:pt-40 md:p-14 md:pt-48">
        <h1
          className="mb-16 text-[#01382E]"
          style={{
            fontFamily: 'var(--font-ability), "Ability", serif',
            fontSize: "clamp(3.5rem, 10vw, 6rem)",
            lineHeight: 1.2,
            textAlign: "center",
          }}
        >
          Menu Gallery
        </h1>

        {/* Kitchen Section (Custom User Grid 6x7) */}
        <section className="mb-32 w-full max-w-7xl">
          <h2 className="mb-10 text-center font-[family-name:var(--font-montserrat)] text-3xl font-light tracking-[0.3em] text-[#01382E] uppercase">
            Kitchen
          </h2>
          <div className="grid h-[1000px] w-full grid-cols-6 grid-rows-7 gap-2">
            {/* div1 */}
            <div className="group relative col-span-2 row-span-2 cursor-pointer overflow-hidden rounded-sm border border-[#01382E]/10 bg-[#01382E]/5">
              <Image
                src={foodImages[1]}
                alt="Food 1"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* div2 */}
            <div className="group relative col-span-3 col-start-1 row-span-3 row-start-3 cursor-pointer overflow-hidden rounded-sm border border-[#01382E]/10 bg-[#01382E]/5">
              <Image
                src={foodImages[2]}
                alt="Food 2"
                fill
                className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* div3 */}
            <div className="group relative col-span-2 col-start-1 row-span-2 row-start-6 cursor-pointer overflow-hidden rounded-sm border border-[#01382E]/10 bg-[#01382E]/5">
              <Image
                src={foodImages[3]}
                alt="Food 3"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* div4 */}
            <div className="group relative col-span-2 col-start-3 row-span-2 row-start-1 cursor-pointer overflow-hidden rounded-sm border border-[#01382E]/10 bg-[#01382E]/5">
              <Image
                src={foodImages[4]}
                alt="Food 4"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* div5 */}
            <div className="group relative col-span-2 col-start-3 row-span-2 row-start-6 cursor-pointer overflow-hidden rounded-sm border border-[#01382E]/10 bg-[#01382E]/5">
              <Image
                src={foodImages[5]}
                alt="Food 5"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* div6 */}
            <div className="group relative col-span-2 col-start-5 row-span-3 row-start-1 cursor-pointer overflow-hidden rounded-sm border border-[#01382E]/10 bg-[#01382E]/5">
              <Image
                src={foodImages[6]}
                alt="Food 6"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* div7 */}
            <div className="group relative col-start-4 row-span-3 row-start-3 cursor-pointer overflow-hidden rounded-sm border border-[#01382E]/10 bg-[#01382E]/5">
              <Image
                src={foodImages[7]}
                alt="Food 7"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* div8 */}
            <div className="group relative col-span-2 col-start-5 row-span-2 row-start-4 cursor-pointer overflow-hidden rounded-sm border border-[#01382E]/10 bg-[#01382E]/5">
              <Image
                src={foodImages[8]}
                alt="Food 8"
                fill
                className="object-cover object-[right_60%] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* div9 */}
            <div className="group relative col-start-5 row-span-2 row-start-6 cursor-pointer overflow-hidden rounded-sm border border-[#01382E]/10 bg-[#01382E]/5">
              <Image
                src={foodImages[9]}
                alt="Food 9"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* div10 */}
            <div className="group relative col-start-6 row-span-2 row-start-6 cursor-pointer overflow-hidden rounded-sm border border-[#01382E]/10 bg-[#01382E]/5">
              <Image
                src={foodImages[10]}
                alt="Food 10"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Bar Section (Custom User Grid 6x6) */}
        <section className="w-full max-w-7xl">
          <h2 className="mb-10 text-center font-[family-name:var(--font-montserrat)] text-3xl font-light tracking-[0.3em] text-[#01382E] uppercase">
            Bar
          </h2>
          <div className="grid h-[800px] w-full grid-cols-6 grid-rows-6 gap-2">
            {/* div1 */}
            <div className="group relative col-span-2 row-span-2 cursor-pointer overflow-hidden rounded-sm border border-[#01382E]/10 bg-[#01382E]/5">
              <Image
                src={beverageImages[0]}
                alt="Drink 1"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* div2 */}
            <div className="group relative col-span-2 col-start-1 row-span-4 row-start-3 cursor-pointer overflow-hidden rounded-sm border border-[#01382E]/10 bg-[#01382E]/5">
              <Image
                src={beverageImages[1]}
                alt="Drink 2"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* div3 */}
            <div className="group relative col-start-3 row-span-6 row-start-1 cursor-pointer overflow-hidden rounded-sm border border-[#01382E]/10 bg-[#01382E]/5">
              <Image
                src={beverageImages[2]}
                alt="Drink 3"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* div4 */}
            <div className="group relative col-start-6 row-span-4 row-start-1 cursor-pointer overflow-hidden rounded-sm border border-[#01382E]/10 bg-[#01382E]/5">
              <Image
                src={beverageImages[3]}
                alt="Drink 4"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* div5 */}
            <div className="group relative col-span-2 col-start-4 row-span-3 row-start-1 cursor-pointer overflow-hidden rounded-sm border border-[#01382E]/10 bg-[#01382E]/5">
              <Image
                src={beverageImages[4]}
                alt="Drink 5"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* div6 */}
            <div className="group relative col-span-2 col-start-4 row-span-3 row-start-4 cursor-pointer overflow-hidden rounded-sm border border-[#01382E]/10 bg-[#01382E]/5">
              <Image
                src={beverageImages[5]}
                alt="Drink 6"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* div7 */}
            <div className="group relative col-start-6 row-span-2 row-start-5 cursor-pointer overflow-hidden rounded-sm border border-[#01382E]/10 bg-[#01382E]/5">
              <Image
                src={beverageImages[6]}
                alt="Drink 7"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
