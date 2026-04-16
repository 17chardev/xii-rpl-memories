import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-graduation.jpg";

const FloatingOrb = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{ repeat: Infinity, duration: 6, delay, ease: "easeInOut" }}
    className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
  />
);

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.img
        style={{ y }}
        src={heroImg}
        alt="Kenangan Kelulusan XII RPL"
        className="absolute inset-0 h-[120%] w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      {/* Floating orbs */}
      <FloatingOrb className="left-[10%] top-[20%] h-64 w-64 bg-primary" delay={0} />
      <FloatingOrb className="right-[15%] top-[30%] h-48 w-48 bg-accent" delay={2} />
      <FloatingOrb className="left-[40%] bottom-[20%] h-56 w-56 bg-primary" delay={4} />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 flex flex-col items-center gap-8 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-primary-foreground">
            <Sparkles className="h-4 w-4" />
            Kelulusan 2025
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl font-black leading-[1.1] tracking-tight text-primary-foreground sm:text-6xl md:text-8xl"
        >
          Kenang
          <span className="mx-3 inline-block bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
            Kenangan
          </span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl font-light tracking-widest uppercase opacity-70 sm:text-4xl md:text-5xl"
          >
            Kelas XII RPL
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-lg text-lg leading-relaxed text-primary-foreground/70"
        >
          Momen-momen indah yang telah kita lewati bersama.
          <br className="hidden sm:block" />
          Terima kasih atas tawa, perjuangan, dan persahabatan.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass mt-2 flex divide-x divide-primary-foreground/20 rounded-2xl px-2"
        >
          {[
            { value: "12", label: "Siswa" },
            { value: "3", label: "Tahun" },
            { value: "∞", label: "Kenangan" },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-4 text-center sm:px-8">
              <div className="text-2xl font-bold text-primary-foreground sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.a
          href="#siswa"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsla(230,80%,56%,0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-10 py-4 text-sm font-bold text-foreground shadow-elevated transition-all"
        >
          Jelajahi Kenangan
          <ChevronDown className="h-4 w-4" />
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary-foreground/30 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-2 w-1.5 rounded-full bg-primary-foreground/60"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
