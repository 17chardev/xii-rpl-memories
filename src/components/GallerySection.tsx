import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Image as ImageIcon, Film, Camera } from "lucide-react";
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

import c1 from "@/assets/c1.jpg";
import c2 from "@/assets/c2.jpg";
import c3 from "@/assets/c3.jpg";
import c4 from "@/assets/c4.jpg";
import c5 from "@/assets/c5.jpg";
import c6 from "@/assets/c6.jpg";
import c7 from "@/assets/c7.jpg";
import c8 from "@/assets/c8.jpg";
import c9 from "@/assets/c9.jpg";
import c10 from "@/assets/c10.jpg";
import c11 from "@/assets/c11.jpg";
import c12 from "@/assets/c12.jpg";
import c14 from "@/assets/c14.jpeg";

const photos = [
  { src: g1, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: g2, alt: "Praktik di lab komputer", w: 800, h: 600 },
  { src: g3, alt: "Hari olahraga", w: 800, h: 600 },
  { src: g4, alt: "Foto bersama di sekolah", w: 800, h: 600 },
  { src: g5, alt: "Study tour", w: 600, h: 800 },
  { src: g6, alt: "Perayaan kelulusan", w: 800, h: 600 },
];

const carrausel = [
  { src: c1, alt: "Tasyakur di kelas bersama", w: 1440, h: 1080 },
  { src: c2, alt: "Hari Guru kelas 10", w: 1440, h: 1080 },
  { src: c3, alt: "Kunjungan industri di Hummatech Malang", w: 1440, h: 1080 },
  { src: c4, alt: "Foto bersama di sekolah sebelum berangkat PKL", w: 1440, h: 1080 },
  { src: c5, alt: "Study tour", w: 1440, h: 1080 },
  { src: c6, alt: "Study tour", w: 1440, h: 1080 },
  { src: c7, alt: "Fashion show", w: 1440, h: 1080 },
  { src: c8, alt: "Foto bersama bu Retno", w: 1440, h: 1080 },
  { src: c9, alt: "Hari Guru kelas XII", w: 1440, h: 1080 },
  { src: c10, alt: "Isra Mi'raj", w: 1440, h: 1080 },
  { src: c11, alt: "Selesai UKK hehe", w: 1440, h: 1080 },
  { src: c12, alt: "Pembuatan BTS kelulusan", w: 1440, h: 1080 },
  { src: c14, alt: "Foto bersama pak Idin hehe", w: 1440, h: 1080 },
]

const videos = [
  { title: "Keseruan di Kelas", thumbnail: g1, url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Praktik Lab Komputer", thumbnail: g2, url: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Hari Olahraga", thumbnail: g3, url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Study Tour Bersama", thumbnail: g4, url: "https://www.w3schools.com/html/movie.mp4" },
];

/* ── Photo Grid with Lightbox ── */
const PhotoGrid = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const prev = () => setLightbox((v) => (v !== null ? (v + photos.length - 1) % photos.length : null));
  const next = () => setLightbox((v) => (v !== null ? (v + 1) % photos.length : null));

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group cursor-pointer overflow-hidden rounded-2xl bg-card shadow-card transition-shadow hover:shadow-elevated"
            onClick={() => setLightbox(i)}
          >
            <div className="relative overflow-hidden">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                width={photo.w}
                height={photo.h}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 right-3 translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-medium text-primary-foreground">{photo.alt}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 backdrop-blur-xl"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute right-6 top-6 rounded-full glass p-2 text-primary-foreground hover:opacity-80">
              <X className="h-6 w-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full glass p-3 text-primary-foreground hover:opacity-80">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full glass p-3 text-primary-foreground hover:opacity-80">
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-elevated"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                  className={`h-2 rounded-full transition-all ${i === lightbox ? "w-8 bg-primary-foreground" : "w-2 bg-primary-foreground/40"}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ── Video Grid ── */
const VideoGrid = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {videos.map((video, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-card shadow-card transition-shadow hover:shadow-elevated"
            onClick={() => setActiveVideo(i)}
          >
            <img src={video.thumbnail} alt={video.title} loading="lazy" className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 transition-colors group-hover:bg-foreground/40">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex h-16 w-16 items-center justify-center rounded-full glass text-primary-foreground shadow-glow"
              >
                <Play className="h-7 w-7 ml-1" />
              </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-5">
              <p className="text-sm font-bold text-primary-foreground">{video.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 backdrop-blur-xl"
            onClick={() => setActiveVideo(null)}
          >
            <button onClick={() => setActiveVideo(null)} className="absolute right-6 top-6 rounded-full glass p-2 text-primary-foreground hover:opacity-80">
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-3xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <video src={videos[activeVideo].url} controls autoPlay className="w-full rounded-2xl shadow-elevated" />
              <p className="mt-4 text-center text-sm font-semibold text-primary-foreground">{videos[activeVideo].title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ── Carousel ── */
const GalleryCarousel = () => {
  const allItems = [
    ...carrausel.map((p) => ({ type: "photo" as const, ...p })),
    ...videos.map((v) => ({ type: "video" as const, ...v })),
  ];

  return (
    <div className="mx-auto max-w-4xl px-12">
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {allItems.map((item, i) => (
            <CarouselItem key={i}>
              <div className="overflow-hidden rounded-2xl shadow-elevated">
                {item.type === "photo" ? (
                  <img src={item.src} alt={item.alt} className="h-72 w-full object-cover sm:h-[480px] w-[640px]" />
                ) : (
                  <video src={item.url} controls poster={item.thumbnail} className="h-72 w-full object-cover sm:h-[420px]" />
                )}
              </div>
              <p className="mt-3 text-center text-sm font-medium text-muted-foreground">
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
  <section id="kenangan" className="relative py-24 bg-muted/30 overflow-hidden">
    <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-center"
      >
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          <Camera className="h-3.5 w-3.5" />
          Galeri
        </span>
        <h2 className="mt-4 text-4xl font-black text-foreground sm:text-5xl">Kenangan Kelas</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">Foto & video momen-momen berharga kita bersama</p>
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <GalleryCarousel />
      </motion.div>

      {/* Tabs */}
      <Tabs defaultValue="foto" className="w-full">
        <TabsList className="mx-auto mb-10 flex w-fit rounded-xl bg-card p-1 shadow-card">
          <TabsTrigger value="foto" className="flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm">
            <ImageIcon className="h-4 w-4" /> Foto
          </TabsTrigger>
          <TabsTrigger value="video" className="flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm">
            <Film className="h-4 w-4" /> Video
          </TabsTrigger>
        </TabsList>
        <TabsContent value="foto"><PhotoGrid /></TabsContent>
        <TabsContent value="video"><VideoGrid /></TabsContent>
      </Tabs>
    </div>
  </section>
);

export default GallerySection;
