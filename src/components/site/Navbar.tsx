import { useEffect, useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Transformations", href: "#transform" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-elite" : "glass"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <div className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-neon shadow-neon-pink">
              <Dumbbell className="h-5 w-5 text-background" />
            </div>
            <span className="font-bold tracking-tight text-lg">
              Rival <span className="text-gradient-neon">Fitness</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors group"
              >
                {l.label}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-1 h-px w-0 bg-gradient-neon group-hover:w-2/3 transition-all duration-300" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-neon text-background text-sm font-semibold shadow-neon-pink hover:scale-105 transition-transform"
          >
            Free Trial
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg glass"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground/80 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-4 py-3 rounded-xl bg-gradient-neon text-background font-semibold"
            >
              Free Trial
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
