"use client";

import { useEffect } from "react";

export interface NavLink {
  label: string;
  href: string;
}

interface MenuOverlayProps {
  isOpen: boolean;
  links: NavLink[];
  onLinkClick?: (href: string) => void;
}

export default function MenuOverlay({ isOpen, links, onLinkClick }: MenuOverlayProps) {
  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.77,0.2,0.05,1)]"
      style={{
        pointerEvents: isOpen ? "auto" : "none",
        visibility: isOpen ? "visible" : "hidden",
      }}
    >
      {/* Animated backdrop panels */}
      <div className="absolute inset-0 z-0 flex">
        {/* Single panel for mobile, three for desktop to prevent vertical gaps on small screens */}
        <div
          className="h-full w-full bg-[#01382E] transition-transform duration-700 ease-[cubic-bezier(0.77,0.2,0.05,1)] md:hidden"
          style={{
            transform: isOpen ? "scaleY(1)" : "scaleY(0)",
          }}
        />
        <div
          className="hidden h-full w-1/3 origin-top bg-[#01382E] transition-transform duration-700 ease-[cubic-bezier(0.77,0.2,0.05,1)] md:block"
          style={{
            transform: isOpen ? "scaleY(1)" : "scaleY(0)",
            transitionDelay: isOpen ? "0ms" : "200ms",
          }}
        />
        <div
          className="hidden h-full w-1/3 origin-top bg-[#01382E] transition-transform duration-700 ease-[cubic-bezier(0.77,0.2,0.05,1)] md:block"
          style={{
            transform: isOpen ? "scaleY(1)" : "scaleY(0)",
            transitionDelay: isOpen ? "80ms" : "100ms",
          }}
        />
        <div
          className="hidden h-full w-1/3 origin-top bg-[#01382E] transition-transform duration-700 ease-[cubic-bezier(0.77,0.2,0.05,1)] md:block"
          style={{
            transform: isOpen ? "scaleY(1)" : "scaleY(0)",
            transitionDelay: isOpen ? "160ms" : "0ms",
          }}
        />
      </div>

      {/* Top Branding (only visible when menu is open) */}
      <div
        className="absolute top-6 left-6 z-20 transition-opacity duration-500 sm:top-8 sm:left-10 md:left-14"
        style={{
          opacity: isOpen ? 1 : 0,
          transitionDelay: isOpen ? "500ms" : "0ms",
        }}
      >
        <div className="flex flex-col items-center">
          <h1
            className="m-0 text-[#faf9f6]"
            style={{
              fontFamily: 'var(--font-ability), "Ability", serif',
              fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
              lineHeight: 1.3,
              userSelect: "none",
            }}
          >
            Sweeney
          </h1>
          <a
            href="https://maps.app.goo.gl/ynbyxbq778LUuQBq6?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            className="m-0 mt-[-0.5rem] tracking-[0.2em] text-[#faf9f6]/70 transition-opacity hover:opacity-100"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "clamp(0.55rem, 1.2vw, 0.7rem)",
              fontWeight: 500,
              userSelect: "none",
              textDecoration: "none",
            }}
          >
            KHAR | MUMBAI
          </a>
        </div>
      </div>

      {/* Menu content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2">
        {/* Navigation links */}
        <nav className="flex flex-col items-center gap-1">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (onLinkClick) {
                  e.preventDefault();
                  onLinkClick(link.href);
                }
              }}
              className="nav-menu-link group relative overflow-hidden px-6 py-3"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 500ms ease, transform 500ms ease`,
                transitionDelay: isOpen ? `${350 + i * 80}ms` : "0ms",
              }}
            >
              <span className="relative z-10 font-[family-name:var(--font-montserrat)] text-[clamp(1.2rem,4vw,1.8rem)] leading-tight font-light tracking-[0.15em] text-[#faf9f6]/95 uppercase transition-colors duration-300 group-hover:text-[#c8a96e]">
                {link.label}
              </span>
              {/* Hover underline */}
              <span className="absolute right-6 bottom-2 left-6 h-[1px] origin-left scale-x-0 bg-[#c8a96e] transition-transform duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1)] group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
