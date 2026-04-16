import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, MessageCircle } from "lucide-react";

const testimonials = [
  { name: "Ahmad Rizki", message: "Tiga tahun bersama XII RPL adalah pengalaman terbaik. Terima kasih atas semua kenangan indah!" },
  { name: "Siti Nurhaliza", message: "Dari yang tidak bisa coding sama sekali, sekarang jadi bisa bikin website. Terima kasih teman-teman dan guru!" },
  { name: "Budi Santoso", message: "Kelas RPL mengajarkanku arti kerja keras dan kerja sama. Semoga kita semua sukses di masa depan!" },
  { name: "Dewi Anggraini", message: "Momen-momen begadang bareng ngerjain project, presentasi bareng, semua itu nggak akan terlupakan." },
  { name: "Fajar Pratama", message: "Sukses selalu untuk XII RPL! Kita membuktikan bahwa anak RPL bisa berprestasi di banyak bidang." },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c + testimonials.length - 1) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimoni" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <MessageCircle className="h-3.5 w-3.5" />
            Testimoni
          </span>
          <h2 className="mt-4 text-4xl font-black text-foreground sm:text-5xl">Pesan & Kesan</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">Kata-kata dari teman-teman kelas</p>
        </motion.div>

        <div className="relative mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl bg-card p-10 shadow-card"
            >
              <div className="absolute -top-5 left-10 flex h-10 w-10 items-center justify-center rounded-2xl gradient-primary shadow-glow">
                <Quote className="h-5 w-5 text-primary-foreground" />
              </div>
              <p className="mt-2 text-lg leading-relaxed text-foreground/80 italic">
                "{testimonials[current].message}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {testimonials[current].name.charAt(0)}
                </div>
                <p className="font-bold text-foreground">
                  {testimonials[current].name}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-card text-foreground shadow-card transition-all hover:shadow-elevated"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-10 gradient-primary" : "w-2.5 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-card text-foreground shadow-card transition-all hover:shadow-elevated"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
