"use client";

import { useCallback, useState } from "react";
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
        className="fixed top-0 right-0 left-0 z-[60] flex items-center justify-between px-6 py-4 transition-colors duration-500 sm:px-10 md:px-14"
        style={{
          backgroundColor: isOpen ? "transparent" : "transparent",
        }}
      >
        {/* Spacer to keep hamburger on the right */}
        <div />

        {/* Hamburger button */}
        <HamburgerButton isOpen={isOpen} toggle={toggle} />
      </header>

      {/* Full-screen overlay menu */}
      <MenuOverlay isOpen={isOpen} links={links} onLinkClick={handleLinkClick} />
    </>
  );
}
