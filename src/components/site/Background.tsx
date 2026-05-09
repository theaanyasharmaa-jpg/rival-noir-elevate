export function NeonBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 neon-grid opacity-40" />
      <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-[#ff00c8] opacity-20 blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-[#6f00ff] opacity-25 blur-[120px] animate-blob-slow" />
      <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-[#ff00c8] opacity-15 blur-[140px] animate-blob" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
    </div>
  );
}
