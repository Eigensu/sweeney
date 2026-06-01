"use client";

import { useCallback, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import HamburgerButton from "./HamburgerButton";
import MenuOverlay, { type NavLink } from "./MenuOverlay";

const DEFAULT_LINKS: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reservations", href: "/#reservations" },
];

interface NavbarProps {
  links?: NavLink[];
  brandName?: string;
  onNavigate?: (href: string) => void;
}

export default function Navbar({
  links = DEFAULT_LINKS,
  brandName = "Sweeney",
  onNavigate,
}: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        // On the home page, wait until past the hero section (~80vh).
        // On inner pages (like Menu), fade out the logo quickly (e.g., 50px) to prevent overlap.
        const isHomePage = pathname === "/";
        const heroHeight = isHomePage ? window.innerHeight * 0.8 : 50;

        setIsScrolledPastHero(currentScrollY > heroHeight);

        // Hide navbar if scrolling down and past 50px, show if scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 50 && !isOpen) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    // Run once on mount to set initial state correctly
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen, pathname]);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleLinkClick = useCallback(
    (href: string) => {
      setIsOpen(false);
      if (onNavigate) {
        onNavigate(href);
      } else {
        // Default: use native navigation after close animation
        setTimeout(() => {
          router.push(href);
        }, 600);
      }
    },
    [onNavigate, router]
  );

  return (
    <>
      {/* Fixed navbar bar */}
      <header
        className={`fixed top-0 right-0 left-0 z-[60] flex items-center justify-between px-6 py-4 transition-all duration-500 sm:px-10 md:px-14 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          backgroundColor: isOpen ? "transparent" : "transparent",
        }}
      >
        {/* Brand Logo */}
        <div
          className={`flex flex-col items-center transition-opacity duration-300 ${
            isOpen || isScrolledPastHero ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <h1
            className="m-0 text-[#01382E]"
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
            className="m-0 mt-[-0.5rem] tracking-[0.2em] text-[#01382E] transition-opacity hover:opacity-70"
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

        {/* Hamburger button */}
        <HamburgerButton isOpen={isOpen} toggle={toggle} />
      </header>

      {/* Full-screen overlay menu */}
      <MenuOverlay isOpen={isOpen} links={links} onLinkClick={handleLinkClick} />
    </>
  );
}
