import { motion } from "framer-motion";
import roseFloat from "@/assets/rose-float.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating rose */}
      <motion.img
        src={roseFloat}
        alt="Floating rose"
        className="absolute top-16 right-8 md:top-20 md:right-20 w-24 md:w-40 opacity-70"
        animate={{ y: [0, -15, -8, 0], rotate: [0, 2, -1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="text-center z-20 px-4">
        <motion.h1
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold text-foreground text-glow-gold tracking-wide"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Aretha
        </motion.h1>

        <motion.p
          className="font-display text-xl sm:text-2xl md:text-3xl text-gold mt-4 md:mt-6 italic tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Happy 20th Birthday My Baby 🌸
        </motion.p>

        <motion.div
          className="mt-10 md:mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground">
            scroll to begin
          </span>
          <motion.div
            className="mt-3 mx-auto w-px h-10 bg-gold/30"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
