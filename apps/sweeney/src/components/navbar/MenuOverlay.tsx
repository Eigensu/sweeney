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
        <div
          className="h-full w-1/3 origin-top bg-[#01382E] transition-transform duration-700 ease-[cubic-bezier(0.77,0.2,0.05,1)]"
          style={{
            transform: isOpen ? "scaleY(1)" : "scaleY(0)",
            transitionDelay: isOpen ? "0ms" : "200ms",
          }}
        />
        <div
          className="h-full w-1/3 origin-top bg-[#01382E] transition-transform duration-700 ease-[cubic-bezier(0.77,0.2,0.05,1)]"
          style={{
            transform: isOpen ? "scaleY(1)" : "scaleY(0)",
            transitionDelay: isOpen ? "80ms" : "100ms",
          }}
        />
        <div
          className="h-full w-1/3 origin-top bg-[#01382E] transition-transform duration-700 ease-[cubic-bezier(0.77,0.2,0.05,1)]"
          style={{
            transform: isOpen ? "scaleY(1)" : "scaleY(0)",
            transitionDelay: isOpen ? "160ms" : "0ms",
          }}
        />
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
              <span className="relative z-10 font-[family-name:var(--font-montserrat)] text-[clamp(2.2rem,5vw,4rem)] leading-tight font-normal tracking-wide text-[#faf9f6] uppercase transition-colors duration-300 group-hover:text-[#c8a96e]">
                {link.label}
              </span>
              {/* Hover underline */}
              <span className="absolute right-6 bottom-2 left-6 h-[1px] origin-left scale-x-0 bg-[#c8a96e] transition-transform duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1)] group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Decorative divider */}
        <div
          className="mt-8 flex items-center gap-4"
          style={{
            opacity: isOpen ? 1 : 0,
            transition: "opacity 600ms ease",
            transitionDelay: isOpen ? `${350 + links.length * 80 + 100}ms` : "0ms",
          }}
        >
          <span className="block h-[1px] w-12 bg-[#c8a96e]/40" />
          <span className="font-[family-name:var(--font-montserrat)] text-[0.7rem] font-semibold tracking-[0.35em] text-[#faf9f6]/50 uppercase">
            Sweeney
          </span>
          <span className="block h-[1px] w-12 bg-[#c8a96e]/40" />
        </div>
      </div>
    </div>
  );
}
