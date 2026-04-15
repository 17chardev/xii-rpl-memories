import { motion } from "framer-motion";
import heroImg from "@/assets/hero-graduation.jpg";

const HeroSection = () => (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Kenangan Kelulusan XII RPL"
      className="absolute inset-0 h-full w-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

    <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="mb-2 inline-block rounded-full bg-primary-foreground/20 px-4 py-1 text-sm font-medium text-primary-foreground backdrop-blur-sm">
          🎓 Kelulusan 2025
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl md:text-7xl"
      >
        Kenang-Kenangan
        <br />
        <span className="opacity-80">Kelas XII RPL</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-xl text-lg text-primary-foreground/80"
      >
        Momen-momen indah yang telah kita lewati bersama. Terima kasih atas tawa, perjuangan, dan persahabatan.
      </motion.p>

      <motion.a
        href="#kenangan"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-3 text-sm font-semibold text-primary shadow-elevated transition-shadow hover:shadow-lg"
      >
        Lihat Kenangan Kelas ↓
      </motion.a>
    </div>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60"
    >
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </motion.div>
  </section>
);

export default HeroSection;
