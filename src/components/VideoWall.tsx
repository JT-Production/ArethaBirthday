import { motion } from "framer-motion";
import { useState } from "react";
import videoPlaceholder from "@/assets/video-placeholder.jpg";

interface VideoItem {
  id: number;
  name: string;
  src: string;
  thumbImg: string;
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
    src: `https://res.cloudinary.com/dmvwjmy23/video/upload/v1775092074/PESS%20images/IMG_3021_2_umxodm.mp4`,
    thumbImg: 'https://res.cloudinary.com/dmvwjmy23/image/upload/v1775094328/PESS%20images/Screenshot_2026-04-02_023940_emmdal.png'
  },
  {
    id: 2,
    name: `Ngozi`,
    src: `https://res.cloudinary.com/dmvwjmy23/video/upload/v1775091966/PESS%20images/IMG_3019_umv44a.mp4`,
    thumbImg: 'https://res.cloudinary.com/dmvwjmy23/image/upload/v1775094370/PESS%20images/Screenshot_2026-04-02_024034_oaicqz.png'
  },
  {
    id: 3,
    name: `Ruth`,
    src: `https://res.cloudinary.com/dmvwjmy23/video/upload/v1775091977/PESS%20images/IMG_3020_2_rq9zow.mp4`,
    thumbImg: 'https://res.cloudinary.com/dmvwjmy23/image/upload/v1775094360/PESS%20images/Screenshot_2026-04-02_024014_a3vsyd.png'
  },
  {
    id: 4,
    name: `Loretta`,
    src: `https://res.cloudinary.com/dmvwjmy23/video/upload/v1775091839/PESS%20images/IMG_3017_afymf6.mp4`,
    thumbImg: 'https://res.cloudinary.com/dmvwjmy23/image/upload/v1775094374/PESS%20images/Screenshot_2026-04-02_024138_loeggm.png'
  },
  {
    id: 5,
    name: `Oyinkan`,
    src: `https://res.cloudinary.com/dmvwjmy23/video/upload/v1775091843/PESS%20images/IMG_3010_dkqbot.mp4`,
    thumbImg: 'https://res.cloudinary.com/dmvwjmy23/image/upload/v1775094391/PESS%20images/Screenshot_2026-04-02_024328_pp5n5a.png'
  },
  {
    id: 6,
    name: `Subomi`,
    src: `https://res.cloudinary.com/dmvwjmy23/video/upload/v1775091838/PESS%20images/IMG_3011_xf9vpe.mp4`,
    thumbImg: 'https://res.cloudinary.com/dmvwjmy23/image/upload/v1775094386/PESS%20images/Screenshot_2026-04-02_024251_zk0kaj.png'
  },
   {
    id: 13,
    name: `Desire`,
    src: `https://res.cloudinary.com/dmvwjmy23/video/upload/v1775162512/PESS%20images/IMG_3037_zz2rb5.mp4`,
    thumbImg: 'https://res.cloudinary.com/dmvwjmy23/image/upload/v1775162580/PESS%20images/Screenshot_2026-04-02_214237_s3wmfl.png'
  },
  {
    id: 7,
    name: `Lara`,
    src: `https://res.cloudinary.com/dmvwjmy23/video/upload/v1775091840/PESS%20images/IMG_3012_tq9res.mp4`,
    thumbImg: 'https://res.cloudinary.com/dmvwjmy23/image/upload/v1775094397/PESS%20images/Screenshot_2026-04-02_024458_ti7ycn.png'
  },
  {
    id: 8,
    name: `Sewa`,
    src: `https://res.cloudinary.com/dmvwjmy23/video/upload/v1775091837/PESS%20images/IMG_3015_tjj5gh.mp4`,
    thumbImg: 'https://res.cloudinary.com/dmvwjmy23/image/upload/v1775094392/PESS%20images/Screenshot_2026-04-02_024349_d9nv2o.png'
  },
  {
    id: 9,
    name: `Anu`,
    src: `https://res.cloudinary.com/dmvwjmy23/video/upload/v1775091838/PESS%20images/IMG_3013_ll6rqz.mp4`,
    thumbImg: 'https://res.cloudinary.com/dmvwjmy23/image/upload/v1775094395/PESS%20images/Screenshot_2026-04-02_024435_rxkhlv.png'
  },
  {
    id: 10,
    name: `Areoluwa`,
    src: `https://res.cloudinary.com/dmvwjmy23/video/upload/v1775091842/PESS%20images/IMG_3014_hzdtzo.mp4`,
    thumbImg: 'https://res.cloudinary.com/dmvwjmy23/image/upload/v1775094398/PESS%20images/Screenshot_2026-04-02_024514_fs3qzl.png'
  },
  {
    id: 11,
    name: `Precious`,
    src: `https://res.cloudinary.com/dmvwjmy23/video/upload/v1775091865/PESS%20images/IMG_3016_zvo0kn.mp4`,
    thumbImg: 'https://res.cloudinary.com/dmvwjmy23/image/upload/v1775094381/PESS%20images/Screenshot_2026-04-02_024223_znuzte.png'
  },
  {
    id: 12,
    name: `Feranmi`,
    src: `https://res.cloudinary.com/dmvwjmy23/video/upload/v1775091836/PESS%20images/IMG_3018_msdcpc.mp4`,
    thumbImg: 'https://res.cloudinary.com/dmvwjmy23/image/upload/v1775094372/PESS%20images/Screenshot_2026-04-02_024105_h4yygc.png'
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
      onClick={() => setPlaying(true)}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {!playing ? (
          <div className="relative w-full h-full">
            <img
              src={video.thumbImg || videoPlaceholder}
              alt={video.name}
              className="w-full h-full object-cover"
            />
            {/* <video
              src={video.src}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              // autoplay
            /> */}
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
 