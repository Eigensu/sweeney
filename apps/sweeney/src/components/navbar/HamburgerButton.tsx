"use client";

interface HamburgerButtonProps {
  isOpen: boolean;
  toggle: () => void;
  className?: string;
}

export default function HamburgerButton({ isOpen, toggle, className = "" }: HamburgerButtonProps) {
  return (
    <button
      onClick={toggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className={`relative z-[60] flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-none bg-transparent transition-all duration-300 focus:outline-none ${className}`}
    >
      <div className="relative flex h-5 w-7 flex-col items-center justify-center">
        {/* Top bar */}
        <span
          className="absolute left-0 block h-[2px] w-full rounded-full transition-all duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1)]"
          style={{
            backgroundColor: isOpen ? "#faf9f6" : "#01382E",
            top: isOpen ? "50%" : "0",
            transform: isOpen ? "translateY(-50%) rotate(45deg)" : "none",
          }}
        />
        {/* Middle bar */}
        <span
          className="absolute top-1/2 left-0 block h-[2px] rounded-full transition-all duration-400 ease-[cubic-bezier(0.77,0.2,0.05,1)]"
          style={{
            backgroundColor: isOpen ? "#faf9f6" : "#01382E",
            width: isOpen ? "0%" : "70%",
            opacity: isOpen ? 0 : 1,
            transform: "translateY(-50%)",
          }}
        />
        {/* Bottom bar */}
        <span
          className="absolute left-0 block h-[2px] w-full rounded-full transition-all duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1)]"
          style={{
            backgroundColor: isOpen ? "#faf9f6" : "#01382E",
            bottom: isOpen ? "auto" : "0",
            top: isOpen ? "50%" : "auto",
            transform: isOpen ? "translateY(-50%) rotate(-45deg)" : "none",
          }}
        />
      </div>
    </button>
  );
}
