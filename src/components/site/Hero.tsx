import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star, Users, Clock, Flame } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

const stats = [
  { icon: Star, label: "Rating", value: "4.6★" },
  { icon: Users, label: "Members", value: "100+" },
  { icon: Clock, label: "Open Till", value: "11 PM" },
  { icon: Flame, label: "CrossFit", value: "Daily" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Premium gym interior in Behala Chowrasta with neon lighting"
          width={1536}
          height={1024}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.2em] text-foreground/80">
            <span className="h-2 w-2 rounded-full bg-[#ff00c8] animate-pulse" />
            Behala Chowrasta · Kolkata
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Transform Your Body.
            <br />
            <span className="text-gradient-neon">Unlock Elite</span> Performance.
          </h1>

          <p className="text-lg text-foreground/70 max-w-xl">
            Premium fitness training, strength conditioning, CrossFit, and
            transformation coaching engineered for results.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-neon text-background font-semibold shadow-neon-pink hover:scale-105 transition-transform"
            >
              Book Free Trial
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl glass-strong text-foreground font-semibold hover:border-[#ff00c8]/60 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-4 hover:shadow-neon-pink transition-shadow"
              >
                <s.icon className="h-4 w-4 text-[#ff00c8] mb-2" />
                <div className="text-xl font-bold">{s.value}</div>
                <div className="text-xs text-foreground/60">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative aspect-square rounded-[2.5rem] overflow-hidden glass-strong shadow-elite">
            <img
              src={heroImg}
              alt="Athlete training"
              width={1536}
              height={1024}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-6 left-6 glass-strong rounded-2xl p-3 shadow-neon-pink"
            >
              <div className="text-[10px] uppercase tracking-widest text-foreground/60">Heart Rate</div>
              <div className="text-2xl font-bold text-gradient-neon">142 BPM</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-6 right-6 glass-strong rounded-2xl p-3 shadow-neon-purple"
            >
              <div className="text-[10px] uppercase tracking-widest text-foreground/60">Calories</div>
              <div className="text-2xl font-bold text-gradient-neon">684 kcal</div>
            </motion.div>

            <motion.div
              animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-1/2 right-6 glass rounded-xl px-3 py-2"
            >
              <div className="text-xs text-foreground/80">PR Squat · 180kg</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
