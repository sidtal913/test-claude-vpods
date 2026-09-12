const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "Shop", href: "#shop" },
  { label: "Collections", href: "#collections" },
  { label: "Discover", href: "#discover" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Gifts", href: "#gifts" },
];

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20L16 16" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M6 7h12l-1 14H7L6 7z" />
      <path d="M9 7V5a3 3 0 016 0v2" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 py-5 lg:px-10">
        {/* Logo */}
        <a href="#" className="group shrink-0 justify-self-start">
          <span className="font-serif text-2xl font-semibold tracking-[0.08em] text-white lg:text-[1.75rem]">
            ARÔMA
          </span>
          <span className="mt-0.5 block font-sans text-[9px] font-medium uppercase tracking-[0.3em] text-white/60">
            A HIGHER STANDARD
          </span>
        </a>

        {/* Nav links — desktop, centered */}
        <nav
          className="hidden items-center gap-6 lg:flex xl:gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={link.active ? "nav-link-active nav-link" : "nav-link"}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Utility icons */}
        <div className="flex items-center justify-end gap-4 text-aroma-gold sm:gap-5">
          <button
            type="button"
            aria-label="Search"
            className="transition-opacity hover:opacity-70"
          >
            <SearchIcon />
          </button>
          <button
            type="button"
            aria-label="Account"
            className="transition-opacity hover:opacity-70"
          >
            <UserIcon />
          </button>
          <button
            type="button"
            aria-label="Shopping bag, 0 items"
            className="relative transition-opacity hover:opacity-70"
          >
            <BagIcon />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-aroma-gold font-sans text-[9px] font-bold text-aroma-black">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile nav strip */}
      <nav
        className="flex gap-4 overflow-x-auto border-t border-white/10 px-6 py-3 lg:hidden"
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`shrink-0 font-sans text-[10px] font-medium uppercase tracking-[0.12em] ${
              link.active
                ? "border-b border-aroma-gold pb-0.5 text-white"
                : "text-white/70"
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
