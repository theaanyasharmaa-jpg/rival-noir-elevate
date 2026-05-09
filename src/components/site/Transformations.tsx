import { useRef, useState } from "react";
import { motion } from "framer-motion";
import t1 from "@/assets/transform-1.jpg";
import t2 from "@/assets/transform-2.jpg";

function CompareSlider({ src, alt }: { src: string; alt: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-strong cursor-ew-resize select-none"
      onMouseMove={(e) => e.buttons === 1 && onMove(e.clientX)}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
      onClick={(e) => onMove(e.clientX)}
    >
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#6f00ff]/30 to-transparent mix-blend-overlay" />
      </div>
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-gradient-neon shadow-neon-pink"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 grid place-items-center h-10 w-10 rounded-full bg-gradient-neon text-background font-bold text-xs shadow-neon-pink">
          ⇄
        </div>
      </div>
      <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass-strong text-xs font-semibold uppercase tracking-wider">Before</div>
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-neon text-background text-xs font-semibold uppercase tracking-wider">After</div>
    </div>
  );
}

const stats = [
  { v: "-22kg", l: "Avg Weight Loss" },
  { v: "+8kg", l: "Lean Muscle Gain" },
  { v: "+45%", l: "Strength Progress" },
];

const bubbles = [
  { name: "Aniket", quote: "Lost 18kg in 5 months. Best decision ever." },
  { name: "Priya", quote: "Got my confidence back. Coaches are unreal." },
];

export function Transformations() {
  return (
    <section id="transform" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#ff00c8] mb-4">Real Results</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Before & after <span className="text-gradient-neon">transformations</span>
          </h2>
          <p className="mt-5 text-foreground/70">Drag the slider. The proof is in the progress.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <CompareSlider src={t1} alt="Male body transformation" />
          <CompareSlider src={t2} alt="Female body transformation" />
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:shadow-neon-pink transition-shadow"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-neon">{s.v}</div>
              <div className="text-xs sm:text-sm text-foreground/60 mt-2">{s.l}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {bubbles.map((b) => (
            <div key={b.name} className="glass rounded-full px-5 py-3 text-sm max-w-xs animate-float">
              <span className="text-[#ff00c8] font-semibold">{b.name}:</span>{" "}
              <span className="text-foreground/80">"{b.quote}"</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
