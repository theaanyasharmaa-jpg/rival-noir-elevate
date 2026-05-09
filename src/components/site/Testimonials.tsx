import { Star } from "lucide-react";

const reviews = [
  { name: "Suman Roy", role: "Member · 2 yrs", rating: 5, text: "Hands down the best gym in Behala. The CrossFit coaching transformed my endurance completely." },
  { name: "Debjit Ghosh", role: "Member · 1 yr", rating: 5, text: "Lost 15kg in 4 months. The coaches actually care about your progress." },
  { name: "Ananya Mukherjee", role: "Member · 8 mo", rating: 5, text: "Premium equipment, clean facility, and a vibe that pushes you to go harder." },
  { name: "Vikram Singh", role: "Member · 3 yrs", rating: 5, text: "Trained with Arjun for strength prep. Hit a 200kg deadlift PR. Worth every rupee." },
  { name: "Pooja Jain", role: "Member · 6 mo", rating: 5, text: "The personal training plan is so well-structured. Loved the nutrition guidance too." },
  { name: "Arnab Saha", role: "Member · 1.5 yrs", rating: 5, text: "Open till 11 PM is a lifesaver. Great after-work energy and crowd." },
];

function Card({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div className="glass rounded-2xl p-6 w-[340px] shrink-0 hover:border-[#ff00c8]/50 transition-colors">
      <div className="flex gap-1 mb-3">
        {Array.from({ length: r.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-[#ff00c8] text-[#ff00c8]" />
        ))}
      </div>
      <p className="text-sm text-foreground/80 leading-relaxed">"{r.text}"</p>
      <div className="mt-5 flex items-center gap-3">
        <div className="grid place-items-center h-10 w-10 rounded-full bg-gradient-neon text-background font-bold">
          {r.name[0]}
        </div>
        <div>
          <div className="font-semibold text-sm">{r.name}</div>
          <div className="text-xs text-foreground/60">{r.role}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const loop = [...reviews, ...reviews];
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-[#ff00c8] mb-4">Testimonials</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Members who <span className="text-gradient-neon">leveled up</span>
          </h2>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-5 animate-marquee w-max">
          {loop.map((r, i) => <Card key={i} r={r} />)}
        </div>
      </div>
    </section>
  );
}
