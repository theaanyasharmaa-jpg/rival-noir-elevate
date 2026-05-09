import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "1,499",
    desc: "Perfect for getting started",
    features: ["Gym access", "Locker access", "Group classes (2/week)", "Basic fitness assessment"],
    featured: false,
  },
  {
    name: "Pro",
    price: "2,999",
    desc: "Most popular for serious lifters",
    features: ["Everything in Basic", "Unlimited group classes", "CrossFit access", "Monthly progress check", "Nutrition basics"],
    featured: false,
  },
  {
    name: "Elite",
    price: "4,999",
    desc: "Full transformation experience",
    features: ["Everything in Pro", "1-on-1 personal training", "Custom meal plan", "Recovery & mobility", "Priority booking", "Body composition scan"],
    featured: true,
  },
];

export function Membership() {
  return (
    <section id="membership" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#ff00c8] mb-4">Membership</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Choose your <span className="text-gradient-neon">arena</span>
          </h2>
          <p className="mt-5 text-foreground/70">No contracts. No hidden fees. Just results.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative rounded-3xl p-8 transition-all ${
                p.featured
                  ? "glass-strong border-neon shadow-elite animate-pulse-glow"
                  : "glass hover:border-[#ff00c8]/50"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-neon text-background text-xs font-bold shadow-neon-pink">
                  <Sparkles className="h-3 w-3" /> RECOMMENDED
                </div>
              )}
              <h3 className="text-2xl font-bold">{p.name}</h3>
              <p className="text-sm text-foreground/60 mt-1">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-foreground/60 text-lg">₹</span>
                <span className="text-5xl font-extrabold text-gradient-neon">{p.price}</span>
                <span className="text-foreground/60">/mo</span>
              </div>

              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <div className="mt-0.5 grid place-items-center h-5 w-5 rounded-full bg-gradient-neon shrink-0">
                      <Check className="h-3 w-3 text-background" />
                    </div>
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block text-center px-6 py-3.5 rounded-xl font-semibold transition-all ${
                  p.featured
                    ? "bg-gradient-neon text-background shadow-neon-pink hover:scale-105"
                    : "glass hover:bg-white/10 hover:border-[#ff00c8]/60"
                }`}
              >
                Join Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
