"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("food");
  const [activeFoodCategory, setActiveFoodCategory] = useState("starters");
  const [activeDrinkCategory, setActiveDrinkCategory] = useState("cocktails");

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-4");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-item").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] font-[family-name:var(--font-montserrat)] text-[#1c1c1a] selection:bg-[#01382E]/10">
      {/* Page Header */}
      <div className="mx-auto max-w-[1400px] border-b border-[#E3DDD2] px-6 pt-32 pb-12 sm:px-10 sm:pt-40 md:pt-48">
        <div className="fade-item flex translate-y-4 flex-col justify-between gap-8 opacity-0 transition-all duration-700 md:flex-row md:items-end">
          <div>
            <h1 className="font-[family-name:var(--font-ability)] text-[clamp(2.8rem,7vw,5rem)] leading-none font-light tracking-tight text-[#01382E]">
              Our
              <br />
              Menu
              <span className="mt-4 block font-[family-name:var(--font-poppins)] text-[0.55em] tracking-widest text-[#9a9488] italic">
                Khar, Mumbai
              </span>
            </h1>
          </div>
          <div className="max-w-[320px] text-sm leading-relaxed font-light text-[#9a9488]">
            <strong className="mb-2 block text-[10px] font-medium tracking-[0.2em] text-[#c8a96e] uppercase">
              Thai & European
            </strong>
            A table that feels lived-in. Food cooked the way it has always been — remembered as much
            as it is tasted.
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-0 z-40 border-b border-[#E3DDD2] bg-[#FAF9F6]">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <div className="flex gap-10">
            <button
              onClick={() => setActiveTab("food")}
              className={`relative -bottom-[1px] border-b-2 py-6 text-[11px] font-semibold tracking-[0.15em] uppercase transition-all ${
                activeTab === "food"
                  ? "border-[#01382E] text-[#01382E]"
                  : "border-transparent text-[#9a9488] hover:text-[#01382E]"
              }`}
            >
              Food
            </button>
            <button
              onClick={() => setActiveTab("drinks")}
              className={`relative -bottom-[1px] border-b-2 py-6 text-[11px] font-semibold tracking-[0.15em] uppercase transition-all ${
                activeTab === "drinks"
                  ? "border-[#01382E] text-[#01382E]"
                  : "border-transparent text-[#9a9488] hover:text-[#01382E]"
              }`}
            >
              Drinks
            </button>
          </div>
        </div>
      </div>

      {/* Food Panel */}
      {activeTab === "food" && (
        <div className="mx-auto max-w-[1400px] px-6 pb-20 sm:px-10">
          {/* Food Categories */}
          <div className="flex flex-wrap gap-3 border-b border-[#E3DDD2] py-6">
            {["starters", "mains", "pasta", "desserts"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFoodCategory(cat);
                  scrollToSection(cat);
                }}
                className={`rounded-full border px-4 py-1.5 text-[10px] font-semibold tracking-widest uppercase transition-all ${
                  activeFoodCategory === cat
                    ? "border-[#01382E] bg-[#01382E] text-[#FAF9F6]"
                    : "border-[#E3DDD2] bg-transparent text-[#9a9488] hover:border-[#01382E] hover:text-[#01382E]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Starters Section */}
          <section
            id="starters"
            className="fade-item translate-y-4 border-b border-[#E3DDD2] py-14 opacity-0 transition-all duration-700"
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#01382E] uppercase">
                Starters
              </span>
              <div className="h-[1px] flex-1 bg-[#E3DDD2]" />
              <span className="text-[10px] tracking-wider text-[#9a9488]">To Begin</span>
            </div>

            {/* Hero Dish: French Onion Soup */}
            <div className="group mb-1 grid gap-0 overflow-hidden border border-[#E3DDD2] transition-colors hover:bg-[#f0f5f3] md:grid-cols-2">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#F0EDE5] md:aspect-auto md:h-[600px]">
                <Image
                  src="/food/French onion soup_.jpg"
                  alt="French Onion Soup"
                  fill
                  className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col items-center justify-center bg-[#01382E] p-8 text-center text-[#FAF9F6] md:p-10">
                <div className="max-w-[400px]">
                  <span className="mb-3 block text-[8.5px] font-bold tracking-widest text-[#c8a96e] uppercase">
                    Chef's Pick
                  </span>
                  <h3 className="mb-5 font-[family-name:var(--font-poppins)] text-2xl leading-tight font-normal md:text-3xl">
                    French Onion Soup
                  </h3>
                  <p className="text-sm leading-relaxed font-light text-[#FAF9F6]/60">
                    Slow-caramelised onions, rich beef consommé, sourdough croûton, melted gruyère.
                    A French classic, reimagined.
                  </p>
                </div>
              </div>
            </div>

            {/* Grid Dishes */}
            <div className="mb-1 grid gap-[1px] border-x border-b border-[#E3DDD2] bg-[#E3DDD2] sm:grid-cols-2">
              <div className="group bg-[#FAF9F6] transition-colors hover:bg-[#f0f5f3]">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0EDE5]">
                  <Image
                    src="/food/Gai Hor Bai Toey.jpg"
                    alt="Gai Hor Bai Toey"
                    fill
                    className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="mb-2 block text-[8.5px] font-bold tracking-widest text-[#c8a96e] uppercase">
                    Thai · New
                  </span>
                  <h3 className="mb-2 font-[family-name:var(--font-poppins)] text-lg font-medium text-[#1c1c1a]">
                    Gai Hor Bai Toey
                  </h3>
                  <p className="text-xs leading-relaxed font-light text-[#9a9488]">
                    Marinated chicken wrapped in fragrant pandan leaves, deep-fried to perfection,
                    served with sweet sesame soy.
                  </p>
                </div>
              </div>
              <div className="group bg-[#FAF9F6] transition-colors hover:bg-[#f0f5f3]">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0EDE5]">
                  <Image
                    src="/food/Truffle Honey Feta Parcel(1).jpg"
                    alt="Truffle Honey Feta Parcel"
                    fill
                    className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="mb-2 block text-[8.5px] font-bold tracking-widest text-[#c8a96e] uppercase">
                    European
                  </span>
                  <h3 className="mb-2 font-[family-name:var(--font-poppins)] text-lg font-medium text-[#1c1c1a]">
                    Truffle Honey Feta Parcel
                  </h3>
                  <p className="text-xs leading-relaxed font-light text-[#9a9488]">
                    Phyllo pastry, creamy feta, truffle-infused honey, toasted pine nuts, fresh
                    thyme.
                  </p>
                </div>
              </div>
            </div>

            {/* List Section */}
            <div className="border border-[#E3DDD2]">
              {[
                {
                  name: "Satay Trio",
                  desc: "Chicken, pork, paneer — charcoal grill, peanut jus, demi-glace.",
                },
                {
                  name: "Spring Roll en Croûte",
                  desc: "All-butter puff, glass noodle, water chestnut, sriracha beurre blanc.",
                },
                { name: "Tod Mun Pla", desc: "Snapper fish cakes, kaffir lime, cucumber relish." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-baseline justify-between gap-8 border-b border-[#E3DDD2] bg-[#FAF9F6] p-6 transition-colors last:border-b-0 hover:bg-[#f0f5f3]"
                >
                  <div>
                    <h4 className="mb-1 font-[family-name:var(--font-poppins)] text-sm font-medium transition-colors group-hover:text-[#01382E]">
                      {item.name}
                    </h4>
                    <p className="text-[11.5px] font-light text-[#9a9488]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mains Section */}
          <section
            id="mains"
            className="fade-item translate-y-4 border-b border-[#E3DDD2] py-14 opacity-0 transition-all duration-700"
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#01382E] uppercase">
                Mains
              </span>
              <div className="h-[1px] flex-1 bg-[#E3DDD2]" />
              <span className="text-[10px] tracking-wider text-[#9a9488]">The Heart of It</span>
            </div>

            <div className="mb-1 grid gap-[1px] border border-[#E3DDD2] bg-[#E3DDD2] sm:grid-cols-3">
              {[
                {
                  name: "Grilled New Zealand Lamb Chops",
                  tag: "Signature",
                  desc: "Grass-fed lamb, rosemary-garlic crust, herb-roasted potatoes, red wine reduction.",
                  img: "/food/grilled new Zealand lamb chops.jpg",
                },
                {
                  name: "Crab Meat Fried Rice",
                  tag: "European",
                  desc: "Wok-fried jasmine rice, succulent blue swimmer crab, spring onion, cucumber relish, lime.",
                  img: "/food/CRAB MEAT FRIED RICE.jpg",
                },
                {
                  name: "Tofu Broccoli Satay",
                  tag: "Thai · New",
                  desc: "Grilled firm tofu, charred broccoli, creamy peanut sauce, pickled radish, cucumber salad.",
                  img: "/food/Tofu Broccoli satay_.jpg",
                },
              ].map((item, i) => (
                <div key={i} className="group bg-[#FAF9F6] transition-colors hover:bg-[#f0f5f3]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F0EDE5]">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className={`object-cover ${item.name === "Grilled New Zealand Lamb Chops" ? "object-[center_75%]" : item.name === "Tofu Broccoli Satay" ? "object-[center_25%]" : "object-bottom"} transition-transform duration-700 group-hover:scale-105`}
                    />
                  </div>
                  <div className="p-8">
                    <span className="mb-2 block text-[8.5px] font-bold tracking-widest text-[#c8a96e] uppercase">
                      {item.tag}
                    </span>
                    <h3 className="mb-2 font-[family-name:var(--font-poppins)] text-lg font-medium text-[#1c1c1a]">
                      {item.name}
                    </h3>
                    <p className="text-xs leading-relaxed font-light text-[#9a9488]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-[#E3DDD2]">
              {[
                {
                  name: "Tofu Bourguignon",
                  desc: "Silken tofu, Burgundy, pearl onion, oyster mushroom, lemongrass bouquet. V",
                },
                {
                  name: "Grilled Pork Collar",
                  desc: "Moo yang, nahm jim jaew, green papaya slaw, jasmine rice.",
                },
                {
                  name: "Lamb Rack, Lemongrass Jus",
                  desc: "Australian rack, chimichurri-nahm jim, Thai herb potato gratin.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-baseline justify-between gap-8 border-b border-[#E3DDD2] bg-[#FAF9F6] p-6 transition-colors last:border-b-0 hover:bg-[#f0f5f3]"
                >
                  <div>
                    <h4 className="mb-1 font-[family-name:var(--font-poppins)] text-sm font-medium transition-colors group-hover:text-[#01382E]">
                      {item.name}
                    </h4>
                    <p className="text-[11.5px] font-light text-[#9a9488]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tasting Interlude */}
          <div className="fade-item relative right-1/2 left-1/2 my-1 -ml-[50vw] flex w-screen translate-y-4 flex-col items-center justify-between gap-12 overflow-hidden bg-[#01382E] px-8 py-20 opacity-0 transition-all duration-700 sm:px-20 md:flex-row lg:px-32">
            <div className="text-center md:text-left">
              <span className="mb-2 block text-[9px] font-medium tracking-[0.28em] text-[#c8a96e]/70 uppercase">
                Heritage Tasting
              </span>
              <h2 className="mb-4 font-[family-name:var(--font-poppins)] text-2xl leading-tight font-light text-[#FAF9F6] md:text-3xl">
                A Journey in <span className="font-semibold text-[#c8a96e]">Six Courses</span>
              </h2>
              <p className="max-w-[480px] text-[12.5px] leading-relaxed font-light text-[#FAF9F6]/45">
                From the lightness of the Thai coast to the weight of a slow-braised European
                classic. Available Tuesday – Sunday from 7 pm.
              </p>
              <a
                href="/#reservations"
                className="mt-6 inline-block border-b border-[#FAF9F6]/30 pb-1 text-[9.5px] tracking-widest text-[#FAF9F6] uppercase transition-all hover:border-[#c8a96e] hover:text-[#c8a96e]"
              >
                Reserve the Table →
              </a>
            </div>
          </div>

          {/* Pasta Section */}
          <section
            id="pasta"
            className="fade-item translate-y-4 border-b border-[#E3DDD2] py-14 opacity-0 transition-all duration-700"
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#01382E] uppercase">
                Pasta & Noodles
              </span>
              <div className="h-[1px] flex-1 bg-[#E3DDD2]" />
              <span className="text-[10px] tracking-wider text-[#9a9488]">Two Traditions</span>
            </div>

            <div className="mb-1 grid gap-[1px] border border-[#E3DDD2] bg-[#E3DDD2] sm:grid-cols-2">
              <div className="group bg-[#FAF9F6] transition-colors hover:bg-[#f0f5f3]">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0EDE5]">
                  <Image
                    src="/food/Gnocchi colocasia.jpg"
                    alt="Gnocchi Colocasia"
                    fill
                    className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="mb-2 block text-[8.5px] font-bold tracking-widest text-[#c8a96e] uppercase">
                    Signature
                  </span>
                  <h3 className="mb-2 font-[family-name:var(--font-poppins)] text-lg font-medium text-[#1c1c1a]">
                    Gnocchi Colocasia
                  </h3>
                  <p className="text-xs leading-relaxed font-light text-[#9a9488]">
                    Hand-rolled colocasia (taro) gnocchi, sage butter, crispy kale, toasted walnuts.
                  </p>
                </div>
              </div>
              <div className="group bg-[#FAF9F6] transition-colors hover:bg-[#f0f5f3]">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0EDE5]">
                  <Image
                    src="/food/00009843.JPG"
                    alt="Heritage Spaghetti"
                    fill
                    className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="mb-2 block text-[8.5px] font-bold tracking-widest text-[#c8a96e] uppercase">
                    New
                  </span>
                  <h3 className="mb-2 font-[family-name:var(--font-poppins)] text-lg font-medium text-[#1c1c1a]">
                    Heritage Spaghetti
                  </h3>
                  <p className="text-xs leading-relaxed font-light text-[#9a9488]">
                    House-made spaghetti, sun-dried tomatoes, roasted garlic, fresh basil, extra
                    virgin olive oil.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Desserts Section */}
          <section
            id="desserts"
            className="fade-item translate-y-4 py-14 opacity-0 transition-all duration-700"
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#01382E] uppercase">
                Desserts
              </span>
              <div className="h-[1px] flex-1 bg-[#E3DDD2]" />
              <span className="text-[10px] tracking-wider text-[#9a9488]">Sweet Conclusion</span>
            </div>

            <div className="grid gap-[1px] border border-[#E3DDD2] bg-[#E3DDD2] sm:grid-cols-3">
              {[
                {
                  name: "Mango Sticky Rice Crème Brûlée",
                  tag: "Chef's Pick",
                  desc: "Alphonso mango, coconut-infused custard, sticky rice base, caramelised sugar crust.",
                  img: "/food/mango sticky rice Crème brulee.jpg",
                },
                {
                  name: "Tub Tim Krob",
                  tag: "Signature · V",
                  desc: "Water chestnuts in syrup, chilled coconut milk, shaved ice, jackfruit strips. A Thai refreshment.",
                  img: "/food/tub tim krob(1).jpg",
                },
                {
                  name: "Thai Pork Ribs",
                  tag: "Thai · V",
                  desc: "A secret creation from our pastry chef — featuring seasonal fruits and traditional textures.",
                  img: "/food/20.JPG",
                },
              ].map((item, i) => (
                <div key={i} className="group bg-[#FAF9F6] transition-colors hover:bg-[#f0f5f3]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F0EDE5]">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className={`object-cover ${item.name === "Thai Pork Ribs" ? "object-bottom" : "object-top"} transition-transform duration-700 group-hover:scale-105`}
                    />
                  </div>
                  <div className="p-8">
                    <span className="mb-2 block text-[8.5px] font-bold tracking-widest text-[#c8a96e] uppercase">
                      {item.tag}
                    </span>
                    <h3 className="mb-2 font-[family-name:var(--font-poppins)] text-lg font-medium text-[#1c1c1a]">
                      {item.name}
                    </h3>
                    <p className="text-xs leading-relaxed font-light text-[#9a9488]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-12 text-center text-[11px] font-light text-[#9a9488] italic">
              Please inform your server of any allergies. V — Vegetarian · GF — Gluten-free
              available.
            </p>
          </section>
        </div>
      )}

      {/* Drinks Panel */}
      {activeTab === "drinks" && (
        <div className="mx-auto max-w-[1400px] px-6 pb-20 sm:px-10">
          <div className="flex flex-wrap gap-3 border-b border-[#E3DDD2] py-6">
            {["cocktails", "wine", "soft"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveDrinkCategory(cat);
                  scrollToSection(cat);
                }}
                className={`rounded-full border px-4 py-1.5 text-[10px] font-semibold tracking-widest uppercase transition-all ${
                  activeDrinkCategory === cat
                    ? "border-[#01382E] bg-[#01382E] text-[#FAF9F6]"
                    : "border-[#E3DDD2] bg-transparent text-[#9a9488] hover:border-[#01382E] hover:text-[#01382E]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <section
            id="cocktails"
            className="fade-item translate-y-4 border-b border-[#E3DDD2] py-14 opacity-0 transition-all duration-700"
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#01382E] uppercase">
                Cocktails
              </span>
              <div className="h-[1px] flex-1 bg-[#E3DDD2]" />
              <span className="text-[10px] tracking-wider text-[#9a9488]">Botanical & Bold</span>
            </div>

            <div className="mb-1 grid gap-[1px] border border-[#E3DDD2] bg-[#E3DDD2] sm:grid-cols-3">
              {[
                {
                  name: "The Sweeney",
                  tag: "House",
                  desc: "Gin, lemongrass shrub, kaffir lime, tonic, gold leaf.",
                  img: "/beverages/00009861.JPG",
                },
                {
                  name: "Galangal Negroni",
                  tag: "New",
                  desc: "Campari, vermouth, gin, galangal tincture. Earthy warmth.",
                  img: "/beverages/00009864.JPG",
                },
                {
                  name: "Tamarind Sour",
                  tag: "Thai",
                  desc: "Bourbon, tamarind syrup, egg white, aromatic bitters.",
                  img: "/beverages/00009865.JPG",
                },
              ].map((item, i) => (
                <div key={i} className="group bg-[#FAF9F6] transition-colors hover:bg-[#f0f5f3]">
                  <div className="relative aspect-square overflow-hidden bg-[#F0EDE5]">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <span className="mb-2 block text-[8.5px] font-bold tracking-widest text-[#c8a96e] uppercase">
                      {item.tag}
                    </span>
                    <h3 className="mb-2 font-[family-name:var(--font-poppins)] text-lg font-medium text-[#1c1c1a]">
                      {item.name}
                    </h3>
                    <p className="text-xs leading-relaxed font-light text-[#9a9488]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-[1px] border-x border-b border-[#E3DDD2] bg-[#E3DDD2] md:grid-cols-3">
              <div className="bg-[#FAF9F6] p-8">
                <h4 className="mb-6 border-b border-[#c8a96e]/20 pb-3 text-[11px] font-bold tracking-[0.18em] text-[#01382E] uppercase">
                  Shaken
                </h4>
                {[
                  { name: "Kaffir Spritz", note: "Prosecco, kaffir lime, elderflower" },
                  { name: "Lychee Martini", note: "Vodka, lychee, elderflower, lime" },
                  { name: "Pandan Colada", note: "Rum, coconut cream, pandan" },
                ].map((d, i) => (
                  <div key={i} className="mb-4 flex items-baseline justify-between gap-4 last:mb-0">
                    <div>
                      <span className="text-sm font-medium">{d.name}</span>
                      <span className="block text-[10.5px] font-light text-[#9a9488]">
                        {d.note}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#FAF9F6] p-8">
                <h4 className="mb-6 border-b border-[#c8a96e]/20 pb-3 text-[11px] font-bold tracking-[0.18em] text-[#01382E] uppercase">
                  Stirred
                </h4>
                {[
                  { name: "Holy Basil Smash", note: "Gin, holy basil, lemon, sugar" },
                  { name: "Butterfly Fizz", note: "Vodka, butterfly pea, lime" },
                  { name: "Smoked Old Fashioned", note: "Bourbon, demerara, bitters" },
                ].map((d, i) => (
                  <div key={i} className="mb-4 flex items-baseline justify-between gap-4 last:mb-0">
                    <div>
                      <span className="text-sm font-medium">{d.name}</span>
                      <span className="block text-[10.5px] font-light text-[#9a9488]">
                        {d.note}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#FAF9F6] p-8">
                <h4 className="mb-6 border-b border-[#c8a96e]/20 pb-3 text-[11px] font-bold tracking-[0.18em] text-[#01382E] uppercase">
                  Low ABV
                </h4>
                {[
                  { name: "Roselle Sour", note: "Mezcal, hibiscus, lime, salt" },
                  { name: "Mango Monsoon", note: "Rum, Alphonso mango, cardamom" },
                  { name: "Seasonal Spritz", note: "Ask your server" },
                ].map((d, i) => (
                  <div key={i} className="mb-4 flex items-baseline justify-between gap-4 last:mb-0">
                    <div>
                      <span className="text-sm font-medium">{d.name}</span>
                      <span className="block text-[10.5px] font-light text-[#9a9488]">
                        {d.note}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Wine Section */}
          <section
            id="wine"
            className="fade-item translate-y-4 border-b border-[#E3DDD2] py-14 opacity-0 transition-all duration-700"
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#01382E] uppercase">
                Wine
              </span>
              <div className="h-[1px] flex-1 bg-[#E3DDD2]" />
              <span className="text-[10px] tracking-wider text-[#9a9488]">The Cellar</span>
            </div>

            <div className="mb-1 grid gap-[1px] border border-[#E3DDD2] bg-[#E3DDD2] md:grid-cols-2">
              <div className="relative aspect-[4/5] min-h-[400px] bg-[#F0EDE5] md:aspect-auto">
                <Image
                  src="/beverages/00009867.JPG"
                  alt="Wine Selection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#FAF9F6] p-10">
                <h4 className="mb-6 border-b border-[#c8a96e]/20 pb-3 text-[11px] font-bold tracking-[0.18em] text-[#01382E] uppercase">
                  White & Rosé
                </h4>
                {[
                  { name: "Pouilly-Fumé, Loire Valley", sub: "Sauvignon Blanc" },
                  { name: "Burgundy Chardonnay", sub: "Mâcon-Villages" },
                  { name: "Alsace Riesling", sub: "Domaine Weinbach" },
                  { name: "Rosé de Provence", sub: "Château Miraval" },
                  { name: "Champagne, Billecart-Salmon", sub: "Brut Réserve NV" },
                ].map((w, i) => (
                  <div key={i} className="mb-6 flex items-baseline justify-between gap-4 last:mb-0">
                    <div>
                      <span className="text-sm font-medium">{w.name}</span>
                      <span className="block text-[10px] font-light tracking-wider text-[#9a9488] uppercase">
                        {w.sub}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Soft Section */}
          <section
            id="soft"
            className="fade-item translate-y-4 py-14 opacity-0 transition-all duration-700"
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#01382E] uppercase">
                Non-Alcoholic
              </span>
              <div className="h-[1px] flex-1 bg-[#E3DDD2]" />
              <span className="text-[10px] tracking-wider text-[#9a9488]">Thoughtfully Made</span>
            </div>

            <div className="grid gap-[1px] border border-[#E3DDD2] bg-[#E3DDD2] md:grid-cols-3">
              <div className="bg-[#FAF9F6] p-8">
                <h4 className="mb-6 border-b border-[#c8a96e]/20 pb-3 text-[11px] font-bold tracking-[0.18em] text-[#01382E] uppercase">
                  House
                </h4>
                {[
                  { name: "Butterfly Pea Lemonade", note: "Colour-changing, lime, honey" },
                  { name: "Roselle Hibiscus Cooler", note: "Fresh roselle, ginger" },
                  { name: "Young Thai Coconut", note: "Fresh, served in shell" },
                ].map((d, i) => (
                  <div key={i} className="mb-4 flex items-baseline justify-between gap-4 last:mb-0">
                    <div>
                      <span className="text-sm font-medium">{d.name}</span>
                      <span className="block text-[10.5px] font-light text-[#9a9488]">
                        {d.note}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#FAF9F6] p-8">
                <h4 className="mb-6 border-b border-[#c8a96e]/20 pb-3 text-[11px] font-bold tracking-[0.18em] text-[#01382E] uppercase">
                  Hot
                </h4>
                {[
                  { name: "Thai Iced Tea", note: "House-blend, condensed milk" },
                  { name: "Pandan & Jasmine Tea", note: "Whole leaf, traditional vessel" },
                  { name: "Single Origin Coffee", note: "Chiang Rai arabica" },
                ].map((d, i) => (
                  <div key={i} className="mb-4 flex items-baseline justify-between gap-4 last:mb-0">
                    <div>
                      <span className="text-sm font-medium">{d.name}</span>
                      <span className="block text-[10.5px] font-light text-[#9a9488]">
                        {d.note}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#FAF9F6] p-8">
                <h4 className="mb-6 border-b border-[#c8a96e]/20 pb-3 text-[11px] font-bold tracking-[0.18em] text-[#01382E] uppercase">
                  Water & Juice
                </h4>
                {[
                  { name: "San Pellegrino" },
                  { name: "Evian Still" },
                  { name: "Fresh Mango Juice" },
                ].map((d, i) => (
                  <div key={i} className="mb-4 flex items-baseline justify-between gap-4 last:mb-0">
                    <div>
                      <span className="text-sm font-medium">{d.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
