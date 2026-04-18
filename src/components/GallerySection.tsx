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

import p1 from "@/assets/gallery/1.jpg";
import p2 from "@/assets/gallery/2.jpg";
import p3 from "@/assets/gallery/3.jpg";
import p4 from "@/assets/gallery/4.jpg";
import p5 from "@/assets/gallery/5.jpg";
import p6 from "@/assets/gallery/6.jpg";
import p7 from "@/assets/gallery/7.jpg";
import p8 from "@/assets/gallery/8.jpg";
import p9 from "@/assets/gallery/9.jpg";
import p10 from "@/assets/gallery/10.jpg";
import p11 from "@/assets/gallery/11.jpg";
import p12 from "@/assets/gallery/12.jpg";
import p13 from "@/assets/gallery/13.jpg";
import p15 from "@/assets/gallery/15.jpg";
import p16 from "@/assets/gallery/16.jpg";
import p17 from "@/assets/gallery/17.jpg";
import p18 from "@/assets/gallery/18.jpg";
import p19 from "@/assets/gallery/19.jpg";
import p20 from "@/assets/gallery/20.jpg";
import p21 from "@/assets/gallery/21.jpg";
import p22 from "@/assets/gallery/22.jpg";
import p23 from "@/assets/gallery/23.jpg";
import p24 from "@/assets/gallery/24.jpg";
import p25 from "@/assets/gallery/25.jpg";
import p26 from "@/assets/gallery/26.jpg";
import p27 from "@/assets/gallery/27.jpg";
import p28 from "@/assets/gallery/28.jpg";
import p29 from "@/assets/gallery/29.jpeg";
import p30 from "@/assets/gallery/30.jpeg";
import p31 from "@/assets/gallery/31.jpeg";
import p32 from "@/assets/gallery/32.jpeg";
import p33 from "@/assets/gallery/33.jpeg";
import p34 from "@/assets/gallery/34.jpeg";
import p35 from "@/assets/gallery/35.jpeg";
import p36 from "@/assets/gallery/36.jpeg";
import p37 from "@/assets/gallery/37.jpeg";
import p38 from "@/assets/gallery/38.jpeg";
import p39 from "@/assets/gallery/39.jpeg";
import p40 from "@/assets/gallery/40.jpeg";
import p41 from "@/assets/gallery/41.jpeg";
import p42 from "@/assets/gallery/42.jpeg";
import p43 from "@/assets/gallery/43.jpeg";
import p44 from "@/assets/gallery/44.jpeg";
import p45 from "@/assets/gallery/45.jpeg";
import p46 from "@/assets/gallery/46.jpeg";
import p47 from "@/assets/gallery/47.jpeg";
import p48 from "@/assets/gallery/48.jpeg";
import p49 from "@/assets/gallery/49.jpeg";
import p50 from "@/assets/gallery/50.jpeg";
import p51 from "@/assets/gallery/51.jpeg";
import p52 from "@/assets/gallery/52.jpeg";
import p53 from "@/assets/gallery/53.jpg";
import p54 from "@/assets/gallery/54.jpeg";
import p55 from "@/assets/gallery/55.jpg";
import p56 from "@/assets/gallery/56.jpg";
import p57 from "@/assets/gallery/57.jpg";
import p58 from "@/assets/gallery/58.jpeg";
import p59 from "@/assets/gallery/59.jpeg";
import p60 from "@/assets/gallery/60.jpeg";
import p61 from "@/assets/gallery/61.jpeg";
import p62 from "@/assets/gallery/62.jpeg";
import p63 from "@/assets/gallery/63.jpeg";
import p65 from "@/assets/gallery/65.jpeg";
import p66 from "@/assets/gallery/66.jpeg";
import p67 from "@/assets/gallery/67.jpeg";
import p68 from "@/assets/gallery/68.jpeg";
import p69 from "@/assets/gallery/69.jpeg";
import p70 from "@/assets/gallery/70.jpeg";
import p71 from "@/assets/gallery/71.jpeg";
import p72 from "@/assets/gallery/72.jpeg";
import p73 from "@/assets/gallery/73.jpeg";
import p74 from "@/assets/gallery/74.jpeg";
import p76 from "@/assets/gallery/76.jpeg";
import p77 from "@/assets/gallery/77.jpeg";
import p78 from "@/assets/gallery/78.jpeg";
import p79 from "@/assets/gallery/79.jpeg";
import p80 from "@/assets/gallery/80.jpeg";
import p81 from "@/assets/gallery/81.jpg";
import p82 from "@/assets/gallery/82.jpeg";
import p83 from "@/assets/gallery/83.jpeg";
import p84 from "@/assets/gallery/84.jpg";
import p85 from "@/assets/gallery/85.jpg";
import p86 from "@/assets/gallery/86.jpg";
import p87 from "@/assets/gallery/87.jpg";



const photoss = [
  { src: g1, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: g2, alt: "Praktik di lab komputer", w: 800, h: 600 },
  { src: g3, alt: "Hari olahraga", w: 800, h: 600 },
  { src: g4, alt: "Foto bersama di sekolah", w: 800, h: 600 },
  { src: g5, alt: "Study tour", w: 600, h: 800 },
  { src: g6, alt: "Perayaan kelulusan", w: 800, h: 600 },
];

const photos = [
  { src: p1, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p2, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p3, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p4, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p5, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p6, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p7, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p8, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p9, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p10, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p11, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p12, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p13, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p15, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p16, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p17, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p18, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p19, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p20, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p21, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p22, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p23, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p24, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p25, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p26, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p27, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p28, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p29, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p30, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p31, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p32, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p33, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p34, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p35, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p36, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p37, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p38, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p39, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p40, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p41, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p42, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p43, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p44, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p45, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p46, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p47, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p48, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p49, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p50, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p51, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p52, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p53, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p54, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p55, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p56, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p57, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p58, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p59, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p60, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p61, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p62, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p63, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p65, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p66, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p67, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p68, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p69, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p70, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p71, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p72, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p73, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p74, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p76, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p77, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p78, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p79, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p80, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p81, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p82, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p83, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p84, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p85, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p86, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p87, alt: "Di kelas bersama", w: 800, h: 600 }
]

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
  { title: "Keseruan di Kelas", thumbnail: g1, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/q_auto/f_auto/v1744029952/samples/cld-sample-video.mp4" },
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
