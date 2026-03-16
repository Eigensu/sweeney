"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#012b24] px-6 py-10 text-[#faf9f6] sm:px-10 md:px-14">
      <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-12 md:flex-row lg:gap-24">
        {/* Branding Section */}
        <div className="flex flex-1 flex-col items-start gap-4">
          <div className="flex flex-col items-center">
            <h2
              className="m-0 text-[#faf9f6]"
              style={{
                fontFamily: 'var(--font-ability), "Ability", serif',
                fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
                lineHeight: 1.1,
                userSelect: "none",
              }}
            >
              Sweeney
            </h2>
          </div>
          <p className="max-w-xs font-[family-name:var(--font-montserrat)] text-xs leading-relaxed opacity-60">
            A refined dining experience inspired by the charm of a Thai village, thoughtfully
            blended with subtle European elegance.
          </p>
        </div>

        {/* Contact info - Restored to vertical layout with tighter gaps for height control */}
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h3 className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.3em] uppercase opacity-60">
              Location
            </h3>
            <p className="font-[family-name:var(--font-montserrat)] text-lg">Khar , Mumbai</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.3em] uppercase opacity-60">
              Reservations
            </h3>
            <div className="flex flex-col gap-2">
              <p className="max-w-sm font-[family-name:var(--font-montserrat)] text-sm leading-relaxed opacity-60">
                For table bookings and private inquiries, please reach out via the number below.
              </p>
              <p className="font-[family-name:var(--font-montserrat)] text-2xl font-light tracking-tight md:text-3xl">
                +91 73042 95000
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-between gap-4 border-t border-[#faf9f6]/5 font-[family-name:var(--font-montserrat)] text-[9px] tracking-[0.25em] uppercase opacity-30 sm:flex-row">
        <p>© 2026 Sweeney Access Unlimited Hospitality LLP. All rights reserved.</p>
        <a
          href="mailto:work.eigensu@gmail.com"
          className="font-semibold transition-opacity hover:opacity-100"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          POWERED BY @EIGENSU
        </a>
      </div>
    </footer>
  );
}
