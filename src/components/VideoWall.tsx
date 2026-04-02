import { motion } from "framer-motion";
import { useState } from "react";
import videoPlaceholder from "@/assets/video-placeholder.jpg";

interface VideoItem {
  id: number;
  name: string;
  src: string;
  // type: "mp4" | "youtube";hb
}

// const videos: VideoItem[] = Array.from({ length: 14 }, (_, i) => ({
//   id: i + 1,
//   name: `Person ${i + 1}`,
//   src: `src/assets/IMG_301${i}.MP4`,
//   // type: "mp4" as const,
// }));

const videos : VideoItem[] = [
  {
    id: 1,
    name: `Victoria`,
    src: `src/assets/video (3).MP4`,
  },
  {
    id: 2,
    name: `Ngozi`,
    src: `src/assets/video (5).MP4`,
  },
  {
    id: 3,
    name: `Ruth`,
    src: `src/assets/video (4).MP4`,
  },
  {
    id: 4,
    name: `Loretta`,
    src: `src/assets/video (7).MP4`,
  },
  {
    id: 5,
    name: `Oyinkan`,
    src: `src/assets/video (2).MOV`,
  },
  {
    id: 6,
    name: `Subomi`,
    src: `src/assets/video (1).MOV`,
  },
  {
    id: 7,
    name: `Lara`,
    src: `src/assets/video (1).MP4`,
  },
  {
    id: 8,
    name: `Sewa`,
    src: `src/assets/video (9).MP4`,
  },
  {
    id: 9,
    name: `Anu`,
    src: `src/assets/video (10).MP4`,
  },
  {
    id: 10,
    name: `Araoluwa`,
    src: `src/assets/video (2).MP4`,
  },
  {
    id: 11,
    name: `Precious`,
    src: `src/assets/video (8).MP4`,
  },
  {
    id: 12,
    name: `Feranmi`,
    src: `src/assets/video (6).MP4`,
  },
 
 
  
]
const VideoCard = ({ video }: { video: VideoItem }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      className="group rounded-xl overflow-hidden bg-card shadow-md hover:shadow-xl transition-shadow duration-500 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      onClick={() => setPlaying(!playing)}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {!playing ? (
          <div className="relative w-full h-full">
            {/* <img
              src={videoPlaceholder}
              alt={video.name}
              className="w-full h-full object-cover"
            /> */}
            <video
              src={video.src}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              // autoplay
            />
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 group-hover:bg-foreground/5 transition-colors">
              <div className="w-14 h-14 rounded-full bg-warm-white/90 flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-gold ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-foreground/5">
            {/* <p className="font-body text-sm text-muted-foreground text-center px-4">
              Video from {video.name}
              <br />
              <span className="text-xs">(Add video URL to play)</span>
            </p> */}
            <video
              src={video.src}
              className="w-full h-full object-cover"
              autoPlay
              controls
              playsInline
            />
          </div>
        )}
      </div>
      <div className="p-3 text-center">
        <p className="font-display text-lg text-foreground">{video.name}</p>
      </div>
    </motion.div>
  );
};

const VideoWall = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
          Messages From The People
        </h2>
        <p className="font-display text-2xl md:text-3xl text-gold mt-2 italic">
          Who Love You
        </p>
        <div className="mt-6 mx-auto w-20 h-px bg-gold/40" />
      </motion.div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
        {videos.map((video) => (
          <div key={video.id} className="break-insid-avoid">
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoWall;
 