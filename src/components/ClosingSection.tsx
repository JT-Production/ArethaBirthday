import { motion } from "framer-motion";
import { useState, useRef } from "react";

const Sparkle = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    className="absolute text-gold"
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatDelay: 1,
    }}
  >
    ✦
  </motion.div>
);

const ClosingSection = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
      setMusicPlaying(!musicPlaying);
    }
  };

  const sparkles = [
    { delay: 0, x: 20, y: 15 },
    { delay: 0.5, x: 75, y: 10 },
    { delay: 1, x: 10, y: 70 },
    { delay: 1.5, x: 85, y: 65 },
    { delay: 0.8, x: 50, y: 5 },
    { delay: 1.2, x: 30, y: 80 },
    { delay: 0.3, x: 65, y: 85 },
    { delay: 1.8, x: 90, y: 35 },
  ];

  return (
    <section className="relative py-32 md:py-48 px-4 overflow-hidden">
      {/* Sparkles */}
      <div className="absolute inset-0">
        {sparkles.map((s, i) => (
          <Sparkle key={i} {...s} />
        ))}
      </div>

      <div className="relative z-20 text-center">
        <motion.div
          className="text-8xl md:text-[12rem] font-display font-bold text-gold text-glow-gold leading-none"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          20
        </motion.div>

        <motion.p
          className="mt-4 text-3xl md:text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          🎂 ✨
        </motion.p>

        <motion.p
          className="mt-8 font-display text-2xl md:text-3xl text-foreground italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Here's to you, forever 🥂
        </motion.p>

        {/* Music toggle */}
        <motion.button
          onClick={toggleMusic}
          className="mt-12 px-6 py-3 rounded-full border border-gold/30 bg-card/50 backdrop-blur-sm font-body text-sm text-muted-foreground hover:text-foreground hover:border-gold/60 transition-all duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {musicPlaying ? "♪ Pause Music" : "♪ Play Music"}
        </motion.button>

        {/* Audio element - replace src with actual music file */}
        <audio ref={audioRef} loop preload="none">
          <source src="/Banky_W_-_Made_For_You_tooXclusive.Com_.mp3" type="audio/mp3" />
        </audio>
      </div>
    </section>
  );
};

export default ClosingSection;
