"use client";

import { useCallback, useState, useEffect } from "react";
import HamburgerButton from "./HamburgerButton";
import MenuOverlay, { type NavLink } from "./MenuOverlay";

const DEFAULT_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/" },
  { label: "Reservations", href: "/" },
  { label: "Our Story", href: "/" },
  { label: "Contact", href: "/" },
];

interface NavbarProps {
  /** Override the default navigation links */
  links?: NavLink[];
  /** Brand name displayed in the navbar */
  brandName?: string;
  /** Called when a menu link is clicked; receives the href */
  onNavigate?: (href: string) => void;
}

export default function Navbar({
  links = DEFAULT_LINKS,
  brandName = "Sweeney",
  onNavigate,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        // Hide navbar if scrolling down and past 50px, show if scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 50 && !isOpen) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleLinkClick = useCallback(
    (href: string) => {
      setIsOpen(false);
      if (onNavigate) {
        onNavigate(href);
      } else {
        // Default: use native navigation after close animation
        setTimeout(() => {
          window.location.href = href;
        }, 600);
      }
    },
    [onNavigate]
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
        <div className="flex-1">
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
        </div>

        {/* Hamburger button */}
        <HamburgerButton isOpen={isOpen} toggle={toggle} />
      </header>

      {/* Full-screen overlay menu */}
      <MenuOverlay isOpen={isOpen} links={links} onLinkClick={handleLinkClick} />
    </>
  );
}
