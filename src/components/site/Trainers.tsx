import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook } from "lucide-react";
import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";

const trainers = [
  { img: t1, name: "Arjun Sen", specialty: "Strength & Powerlifting", years: "8 yrs" },
  { img: t2, name: "Riya Kapoor", specialty: "CrossFit & HIIT", years: "6 yrs" },
  { img: t3, name: "Rohan Das", specialty: "Bodybuilding & Nutrition", years: "10 yrs" },
];

export function Trainers() {
  return (
    <section id="trainers" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#ff00c8] mb-4">Coaches</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Meet the <span className="text-gradient-neon">elite squad</span>
          </h2>
          <p className="mt-5 text-foreground/70">Certified pros who've trained champions.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden glass-strong hover:shadow-elite transition-all"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  width={768}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
                <div className="text-xs uppercase tracking-widest text-[#ff00c8]">{t.years} Experience</div>
                <h3 className="text-2xl font-bold mt-1">{t.name}</h3>
                <p className="text-sm text-foreground/70">{t.specialty}</p>
                <div className="flex gap-2 mt-4">
                  {[Instagram, Twitter, Facebook].map((Icon, j) => (
                    <a
                      key={j}
                      href="#"
                      className="grid place-items-center h-9 w-9 rounded-xl glass hover:border-[#ff00c8] hover:shadow-neon-pink transition-all"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-[#ff00c8]/40 transition-all rounded-3xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
