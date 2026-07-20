import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

const links = [
  { href: "#services", key: "nav.services" },
  { href: "#gallery", key: "nav.gallery" },
  { href: "#about", key: "nav.about" },
  { href: "#contact", key: "nav.contact" },
];

export function Navbar() {
  const { tr } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold">
            <span className="font-display text-xl text-primary-foreground font-semibold">E</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wide">Energy</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Beauty Salon</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {tr(l.key)}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-gradient group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="#book"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-gold-gradient text-primary-foreground text-sm font-medium tracking-wide hover:opacity-90 transition-all shadow-gold"
          >
            {tr("nav.booking")}
          </a>
          <button
            className="lg:hidden text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <><path d="M4 8h16"/><path d="M4 16h16"/></>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-muted-foreground hover:text-primary">
                {tr(l.key)}
              </a>
            ))}
            <a href="#book" onClick={() => setOpen(false)} className="mt-2 text-center px-5 py-3 rounded-full bg-gold-gradient text-primary-foreground text-sm font-medium">
              {tr("nav.booking")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
