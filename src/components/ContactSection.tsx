import { motion } from "framer-motion";
import { Mail, Instagram, Heart } from "lucide-react";

const ContactSection = () => (
  <section id="kontak" className="py-20 gradient-primary">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
          Terima Kasih 🙏
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80 text-lg">
          Terima kasih untuk semua guru, teman, dan keluarga yang telah mendukung perjalanan kami. 
          Semoga kita semua sukses di masa depan!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-6"
      >
        <a
          href="mailto:xiirpl@sekolah.id"
          className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/20 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/30 backdrop-blur-sm"
        >
          <Mail className="h-4 w-4" />
          xiirpl@sekolah.id
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/20 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/30 backdrop-blur-sm"
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
        className="mt-16 flex items-center justify-center gap-1 text-primary-foreground/60 text-sm"
      >
        Dibuat dengan <Heart className="h-4 w-4 text-red-300" /> oleh XII RPL
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
