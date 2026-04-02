import { motion } from "framer-motion";

const LoveLetter = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8">
      <motion.div
        className="max-w-3xl mx-auto parchment-bg rounded-2xl p-8 md:p-14 shadow-xl relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Decorative corner flourishes */}
        <div className="absolute top-4 left-4 text-gold/30 text-4xl font-display">✦</div>
        <div className="absolute bottom-4 right-4 text-gold/30 text-4xl font-display">✦</div>

        <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-8">
          A Letter From Me
        </h2>
        <div className="mx-auto w-16 h-px bg-gold/40 mb-10" />

        <div className="font-handwritten text-xl md:text-2xl leading-relaxed text-foreground/85 space-y-6">
          <p>My dearest Aretha,</p>
          <p>
            Twenty years of you in this world, and every single one of them has made
            it brighter. I don't have enough words to tell you how much you mean to
            me but I'll never stop trying.
          </p>
          <p>
            You are my favorite person, my safest place, my greatest adventure. 
            Watching you grow into the incredible woman you are today has been the 
            most beautiful thing I've ever witnessed.
          </p>
          <p>
            I hope this birthday fills your heart the way you fill mine with so 
            much warmth that it overflows. You deserve the world and then some.
          </p>
          <p>
            Here's to 20. Here's to you. Here's to us.
          </p>
          <p className="text-right mt-8">
            Forever yours, Joseph ♥
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default LoveLetter;
