import { motion } from "framer-motion";
import { Mail, Instagram, Heart, Sparkles } from "lucide-react";

const ContactSection = () => (
  <section id="kontak" className="relative py-24 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 gradient-primary" />
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }} />

    <div className="container relative mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl glass text-3xl"
        >
          🙏
        </motion.div>
        <h2 className="text-4xl font-black text-primary-foreground sm:text-5xl">
          Terima Kasih
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/70">
          Terima kasih untuk semua guru, teman, dan keluarga yang telah mendukung perjalanan kami.
          Semoga kita semua sukses di masa depan!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="mailto:xiirpl@sekolah.id"
          className="glass inline-flex items-center gap-2.5 rounded-2xl px-7 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/20"
        >
          <Mail className="h-4 w-4" />
          xiirpl@sekolah.id
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="glass inline-flex items-center gap-2.5 rounded-2xl px-7 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/20"
        >
          <Instagram className="h-4 w-4" />
          @xiirpl_2025
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-20 flex items-center justify-center gap-2 text-primary-foreground/50 text-sm"
      >
        <Sparkles className="h-3.5 w-3.5" />
        Dibuat dengan <Heart className="h-3.5 w-3.5 text-red-300" /> oleh XII RPL
        <Sparkles className="h-3.5 w-3.5" />
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
