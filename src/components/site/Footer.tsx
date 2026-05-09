import { Dumbbell, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#ff00c8] to-transparent opacity-60" />
        <div className="grid md:grid-cols-4 gap-10 pt-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-neon shadow-neon-pink">
                <Dumbbell className="h-5 w-5 text-background" />
              </div>
              <span className="font-bold text-lg">Rival <span className="text-gradient-neon">Fitness Studio</span></span>
            </div>
            <p className="mt-4 text-sm text-foreground/60 max-w-md">
              Premium transformation gym in Behala Chowrasta, Kolkata. Strength, CrossFit, and elite coaching.
            </p>
            <div className="flex gap-2 mt-5">
              {[Instagram, Facebook, Youtube, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="grid place-items-center h-10 w-10 rounded-xl glass hover:border-[#ff00c8] hover:shadow-neon-pink transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm text-foreground/60">
              {["Programs", "Trainers", "Membership", "Transformations", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-[#ff00c8] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold mb-4">Visit Us</div>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>Behala Chowrasta</li>
              <li>Kolkata, West Bengal</li>
              <li>Open till 11:00 PM</li>
              <li className="pt-2">
                <a href="https://wa.me/919999999999" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-neon text-background font-semibold text-xs">
                  <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-foreground/50">
          <div>© {new Date().getFullYear()} Rival Fitness Studio. All rights reserved.</div>
          <div>Crafted with ⚡ in Kolkata</div>
        </div>
      </div>
    </footer>
  );
}
