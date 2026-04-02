import { motion } from "framer-motion";

const reasons = [
  "Your laugh lights up every room you walk into",
  "You make me feel seen and loved",
  "Your kindness is effortless and endless",
  "You are beautiful",
  "Your smile could end wars",
  "You always know exactly what to say",
  "You love so deeply and so fearlessly",
  "Your strength is inspiring",
  "You make the ordinary feel extraordinary",
  "You're braver than you know",
  "You carry grace in everything you do",
  "Your hugs feel like home",
  "You make hard days feel softer",
  "You see the beauty in everything",
  "You never give up on the people you love",
  "Your spirit is absolutely magnetic",
  "You inspire everyone who knows you",
  "You make the world more beautiful just by being in it",
  "You deserve every star in the sky",
  "You are loved beyond measure and that will never change",
];

const ReasonsSection = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            20 Reasons
          </h2>
          <p className="font-display text-2xl md:text-3xl text-gold mt-2 italic">
            I Love You
          </p>
          <div className="mt-6 mx-auto w-20 h-px bg-gold/40" />
        </motion.div>

        <div className="space-y-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 md:gap-6 p-4 md:p-6 rounded-xl bg-card/60 backdrop-blur-sm"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <span className="font-display text-3xl md:text-4xl font-bold text-gold shrink-0 leading-none mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-blush text-lg shrink-0">♥</span>
                <p className="font-display text-lg md:text-xl text-foreground italic">
                  {reason}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
