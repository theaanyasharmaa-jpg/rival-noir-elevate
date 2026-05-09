import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed -z-10 h-[500px] w-[500px] rounded-full opacity-30 blur-[100px] transition-transform duration-300 hidden md:block"
      style={{
        background: "radial-gradient(circle, #ff00c8 0%, transparent 70%)",
        transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)`,
      }}
    />
  );
}
