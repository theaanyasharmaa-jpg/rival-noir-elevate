import { motion } from "framer-motion";
import {
  Activity, Dumbbell, TrendingDown, Mountain, HeartPulse,
  UserCheck, Apple, Sparkles,
} from "lucide-react";

const programs = [
  { icon: Activity, title: "CrossFit Training", desc: "High-intensity functional WODs led by certified coaches." },
  { icon: Dumbbell, title: "Strength & Conditioning", desc: "Powerlifting and olympic lifts for raw strength." },
  { icon: TrendingDown, title: "Weight Loss Programs", desc: "Sustainable fat loss with cardio + nutrition." },
  { icon: Mountain, title: "Muscle Building", desc: "Hypertrophy programs that pack on lean mass." },
  { icon: HeartPulse, title: "Cardio & HIIT", desc: "Burn calories and build endurance, fast." },
  { icon: UserCheck, title: "Personal Training", desc: "1-on-1 coaching tailored to your body." },
  { icon: Apple, title: "Nutrition Guidance", desc: "Custom meal plans built around your goals." },
  { icon: Sparkles, title: "Beginner Programs", desc: "Foundation training to start strong." },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#ff00c8] mb-4">Our Programs</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Train like a <span className="text-gradient-neon">pro athlete</span>
          </h2>
          <p className="mt-5 text-foreground/70">
            Pick your battle. Every program is designed by experts and engineered for transformation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative glass rounded-3xl p-6 overflow-hidden hover:border-[#ff00c8]/60 transition-all"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#ff00c8]/0 group-hover:bg-[#ff00c8]/30 blur-3xl transition-all duration-500" />
              <div className="relative">
                <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-neon shadow-neon-pink mb-5">
                  <p.icon className="h-5 w-5 text-background" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
