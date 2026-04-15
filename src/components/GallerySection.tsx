import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Image as ImageIcon, Film } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: g1, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: g2, alt: "Praktik di lab komputer", w: 800, h: 600 },
  { src: g3, alt: "Hari olahraga", w: 800, h: 600 },
  { src: g4, alt: "Foto bersama di sekolah", w: 800, h: 600 },
  { src: g5, alt: "Study tour", w: 600, h: 800 },
  { src: g6, alt: "Perayaan kelulusan", w: 800, h: 600 },
];

// Demo videos using free sample videos
const videos = [
  {
    title: "Keseruan di Kelas",
    thumbnail: g1,
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Praktik Lab Komputer",
    thumbnail: g2,
    url: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    title: "Hari Olahraga",
    thumbnail: g3,
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Study Tour Bersama",
    thumbnail: g4,
    url: "https://www.w3schools.com/html/movie.mp4",
  },
];

/* ── Photo Grid with Lightbox ── */
const PhotoGrid = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () =>
    setLightbox((v) => (v !== null ? (v + photos.length - 1) % photos.length : null));
  const next = () =>
    setLightbox((v) => (v !== null ? (v + 1) % photos.length : null));

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer overflow-hidden rounded-xl shadow-card"
            onClick={() => setLightbox(i)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              width={photo.w}
              height={photo.h}
              className="h-64 w-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 text-primary-foreground hover:opacity-80"
            >
              <X className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:opacity-80"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:opacity-80"
            >
              <ChevronRight className="h-10 w-10" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ── Video Grid with Player Modal ── */
const VideoGrid = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {videos.map((video, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="group relative cursor-pointer overflow-hidden rounded-xl shadow-card"
            onClick={() => setActiveVideo(i)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              loading="lazy"
              className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Play overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/30 transition-colors group-hover:bg-foreground/50">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elevated">
                <Play className="h-6 w-6 ml-0.5" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
              <p className="text-sm font-semibold text-primary-foreground">{video.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Player Modal */}
      <AnimatePresence>
        {activeVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute right-4 top-4 text-primary-foreground hover:opacity-80"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-3xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={videos[activeVideo].url}
                controls
                autoPlay
                className="w-full rounded-lg"
              />
              <p className="mt-3 text-center text-sm font-medium text-primary-foreground">
                {videos[activeVideo].title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ── Carousel (mixed photos & videos) ── */
const GalleryCarousel = () => {
  const allItems = [
    ...photos.map((p) => ({ type: "photo" as const, ...p })),
    ...videos.map((v) => ({ type: "video" as const, ...v })),
  ];

  return (
    <div className="mx-auto max-w-4xl px-12">
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {allItems.map((item, i) => (
            <CarouselItem key={i}>
              <div className="overflow-hidden rounded-xl shadow-card">
                {item.type === "photo" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-72 w-full object-cover sm:h-96"
                  />
                ) : (
                  <video
                    src={item.url}
                    controls
                    poster={item.thumbnail}
                    className="h-72 w-full object-cover sm:h-96"
                  />
                )}
              </div>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                {item.type === "photo" ? item.alt : item.title}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

/* ── Main Section ── */
const GallerySection = () => (
  <section id="kenangan" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">📸 Kenangan Kelas</h2>
        <p className="mt-3 text-muted-foreground">Galeri foto & video momen-momen berharga kita bersama</p>
      </motion.div>

      {/* Carousel highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <h3 className="mb-6 text-center text-lg font-semibold text-foreground">🎞️ Sorotan</h3>
        <GalleryCarousel />
      </motion.div>

      {/* Tabbed gallery */}
      <Tabs defaultValue="foto" className="w-full">
        <TabsList className="mx-auto mb-8 flex w-fit">
          <TabsTrigger value="foto" className="flex items-center gap-2">
            <ImageIcon className="h-4 w-4" /> Foto
          </TabsTrigger>
          <TabsTrigger value="video" className="flex items-center gap-2">
            <Film className="h-4 w-4" /> Video
          </TabsTrigger>
        </TabsList>

        <TabsContent value="foto">
          <PhotoGrid />
        </TabsContent>
        <TabsContent value="video">
          <VideoGrid />
        </TabsContent>
      </Tabs>
    </div>
  </section>
);

export default GallerySection;
