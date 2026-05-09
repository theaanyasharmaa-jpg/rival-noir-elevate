import { motion } from "framer-motion";
import { Dumbbell, Activity, Flame, UserCheck, Zap } from "lucide-react";
import aboutImg from "@/assets/about-gym.jpg";

const features = [
  { icon: Dumbbell, label: "Strength Training" },
  { icon: Activity, label: "CrossFit" },
  { icon: Flame, label: "Fat Loss" },
  { icon: UserCheck, label: "Personal Coaching" },
  { icon: Zap, label: "Functional Fitness" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden glass-strong shadow-elite aspect-[4/5]">
            <img
              src={aboutImg}
              alt="Rival Fitness Studio interior"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6f00ff]/30 via-transparent to-[#ff00c8]/20" />
          </div>
          <div className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-5 shadow-neon-pink hidden sm:block">
            <div className="text-3xl font-bold text-gradient-neon">5+ Yrs</div>
            <div className="text-xs text-foreground/60">Transforming Lives</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-[#ff00c8] mb-4">About Rival</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            A premium <span className="text-gradient-neon">transformation-focused</span> gym in Kolkata
          </h2>
          <p className="mt-6 text-foreground/70 text-lg leading-relaxed">
            Rival Fitness Studio in Behala Chowrasta is built for people who refuse
            the average. We blend elite coaching, world-class equipment, and a
            relentless community to help you build strength, confidence, and a
            body you're proud of.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, rotate: -1 }}
                className="glass rounded-2xl p-4 hover:border-[#ff00c8]/50 transition-colors cursor-default"
              >
                <f.icon className="h-5 w-5 text-[#ff00c8] mb-2" />
                <div className="text-sm font-semibold">{f.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
