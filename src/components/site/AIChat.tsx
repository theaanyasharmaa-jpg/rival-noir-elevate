import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles } from "lucide-react";

type Msg = { role: "ai" | "user"; text: string };

const flow = [
  { ask: "Hey! I'm Rival AI Coach 🤖. What's your name?", key: "name" },
  { ask: "Nice to meet you, {name}! What's your fitness goal? (e.g. weight loss, muscle gain, CrossFit)", key: "goal" },
  { ask: "Got it! Drop your phone number and our team will set up your free trial 📞", key: "phone" },
  { ask: "🔥 Awesome, {name}! Your free trial for {goal} is being booked. We'll WhatsApp you shortly!", key: "done" },
];

export function AIChat() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "ai", text: flow[0].ask }]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Record<string, string>>({});
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing]);

  const send = () => {
    if (!input.trim() || step >= flow.length - 1) return;
    const value = input.trim();
    const newData = { ...data, [flow[step].key]: value };
    setData(newData);
    setMsgs((m) => [...m, { role: "user", text: value }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const next = flow[step + 1].ask
        .replace("{name}", newData.name || "champ")
        .replace("{goal}", newData.goal || "your goal");
      setMsgs((m) => [...m, { role: "ai", text: next }]);
      setStep(step + 1);
      setTyping(false);
    }, 900);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-40 grid place-items-center h-14 w-14 rounded-full bg-gradient-neon shadow-neon-pink animate-pulse-glow ${open ? "hidden" : ""}`}
        aria-label="Open Rival AI Coach"
      >
        <Bot className="h-6 w-6 text-background" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm h-[32rem] glass-strong rounded-3xl shadow-elite overflow-hidden flex flex-col"
          >
            <div className="relative p-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#ff00c8]/10 to-[#6f00ff]/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-neon shadow-neon-pink">
                    <Bot className="h-5 w-5 text-background" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-400 ring-2 ring-background" />
                </div>
                <div>
                  <div className="font-bold flex items-center gap-1.5">
                    Rival AI Coach <Sparkles className="h-3.5 w-3.5 text-[#ff00c8]" />
                  </div>
                  <div className="text-xs text-foreground/60">Online · replies instantly</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-white/10">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {msgs.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                      m.role === "user"
                        ? "bg-gradient-neon text-background rounded-br-sm"
                        : "glass rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="glass rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="h-2 w-2 rounded-full bg-[#ff00c8] animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            <div className="p-3 border-t border-white/10 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder={step >= flow.length - 1 ? "Conversation ended" : "Type your reply..."}
                disabled={step >= flow.length - 1}
                className="flex-1 px-4 py-2.5 rounded-xl glass border-white/10 focus:border-[#ff00c8] focus:outline-none text-sm disabled:opacity-50"
              />
              <button
                onClick={send}
                disabled={step >= flow.length - 1}
                className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-neon shadow-neon-pink disabled:opacity-50"
              >
                <Send className="h-4 w-4 text-background" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
