import { useState } from "react";
import { MapPin, Clock, Phone, MessageCircle, Mail, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-[#ff00c8] mb-4">Get In Touch</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Start your <span className="text-gradient-neon">transformation</span>
          </h2>
          <p className="mt-5 text-foreground/70">
            Book a free trial or chat with us on WhatsApp. We respond fast.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { icon: MapPin, label: "Location", val: "Behala Chowrasta, Kolkata" },
              { icon: Clock, label: "Open Till", val: "11:00 PM Daily" },
              { icon: Phone, label: "Call Us", val: "+91 99999 99999" },
              { icon: Mail, label: "Email", val: "hello@rivalfitness.in" },
            ].map((c) => (
              <div key={c.label} className="glass rounded-2xl p-4 flex items-start gap-3 hover:border-[#ff00c8]/50 transition-colors">
                <div className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-neon shrink-0">
                  <c.icon className="h-4 w-4 text-background" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-foreground/60">{c.label}</div>
                  <div className="text-sm font-semibold mt-0.5">{c.val}</div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-neon text-background font-semibold shadow-neon-pink hover:scale-105 transition-transform"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us Now
          </a>

          <div className="mt-8 rounded-3xl overflow-hidden glass-strong aspect-[16/10]">
            <iframe
              title="Rival Fitness Studio location"
              src="https://www.google.com/maps?q=Behala+Chowrasta,+Kolkata&output=embed"
              className="w-full h-full grayscale-[60%] contrast-125"
              loading="lazy"
            />
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 4000);
          }}
          className="glass-strong rounded-3xl p-8 shadow-elite h-fit lg:sticky lg:top-28"
        >
          <h3 className="text-2xl font-bold">Book Your Free Trial</h3>
          <p className="text-sm text-foreground/60 mt-1">Fill the form. We'll call you within 24h.</p>

          <div className="mt-6 space-y-4">
            {[
              { label: "Name", type: "text", placeholder: "Your full name" },
              { label: "Phone", type: "tel", placeholder: "+91 99999 99999" },
              { label: "Email", type: "email", placeholder: "you@example.com" },
            ].map((f) => (
              <div key={f.label}>
                <label className="text-xs uppercase tracking-wider text-foreground/60">{f.label}</label>
                <input
                  required
                  type={f.type}
                  placeholder={f.placeholder}
                  className="mt-2 w-full px-4 py-3 rounded-xl glass border-white/10 focus:border-[#ff00c8] focus:outline-none transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="text-xs uppercase tracking-wider text-foreground/60">Fitness Goal</label>
              <select
                required
                className="mt-2 w-full px-4 py-3 rounded-xl glass border-white/10 focus:border-[#ff00c8] focus:outline-none transition-colors bg-background/50"
              >
                <option>Weight Loss</option>
                <option>Muscle Building</option>
                <option>CrossFit Training</option>
                <option>General Fitness</option>
                <option>Strength Training</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-neon text-background font-semibold shadow-neon-pink hover:scale-[1.02] transition-transform"
          >
            <Send className="h-4 w-4" />
            {sent ? "Sent! We'll call you soon." : "Book Free Trial"}
          </button>
        </form>
      </div>
    </section>
  );
}
