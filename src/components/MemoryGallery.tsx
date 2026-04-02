import { motion } from "framer-motion";
import { useRef } from "react";
import galleryImg from "@/assets/gallery-1.jpg";

// const photos = Array.from({ length: 8 }, (_, i) => ({
//   id: i + 1,
//   src: galleryImg,
//   caption: `Memory ${i + 1}`,
// }));

const photos = [
  
  
  {
     id: 2,
  src: 'src/assets/photo (1).JPG',
  caption: ``,
  },
  {
     id: 3,
  src: 'src/assets/photo (4).JPG',
  caption: ``,
  },
  {
     id: 4,
  src: 'src/assets/photo (3).JPG',
  caption: ``,
  },
  {
     id: 1,
  src: 'src/assets/photo (2).JPG',
  caption: ``,
  },
  {
     id: 5,
  src: 'src/assets/photo (6).JPG',
  caption: ``,
  },
  {
     id: 6,
  src: 'src/assets/photo (5).JPG',
  caption: ``,
  },

]

const MemoryGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 md:py-32">
      <motion.div
        className="text-center mb-12 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
          Memories
        </h2>
        <p className="font-display text-2xl md:text-3xl text-gold mt-2 italic">
          That We Treasure
        </p>
        <div className="mt-6 mx-auto w-20 h-px bg-gold/40" />
      </motion.div>

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto px-4 md:px-8 pb-6 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            className="flex-shrink-0 snap-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="w-56 md:w-72 overflow-hidden rounded-xl shadow-lg">
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>
            <p className="text-center mt-3 font-display text-base text-muted-foreground italic">
              {photo.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MemoryGallery;
