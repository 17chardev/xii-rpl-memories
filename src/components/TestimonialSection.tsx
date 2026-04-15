import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmad Rizki",
    message: "Tiga tahun bersama XII RPL adalah pengalaman terbaik. Terima kasih atas semua kenangan indah!",
  },
  {
    name: "Siti Nurhaliza",
    message: "Dari yang tidak bisa coding sama sekali, sekarang jadi bisa bikin website. Terima kasih teman-teman dan guru!",
  },
  {
    name: "Budi Santoso",
    message: "Kelas RPL mengajarkanku arti kerja keras dan kerja sama. Semoga kita semua sukses di masa depan!",
  },
  {
    name: "Dewi Anggraini",
    message: "Momen-momen begadang bareng ngerjain project, presentasi bareng, semua itu nggak akan terlupakan.",
  },
  {
    name: "Fajar Pratama",
    message: "Sukses selalu untuk XII RPL! Kita membuktikan bahwa anak RPL bisa berprestasi di banyak bidang.",
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c + testimonials.length - 1) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimoni" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">💬 Testimoni Siswa</h2>
          <p className="mt-3 text-muted-foreground">Pesan dan kesan dari teman-teman kelas</p>
        </motion.div>

        <div className="relative mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-card p-8 shadow-card text-center"
            >
              <Quote className="mx-auto mb-4 h-8 w-8 text-primary/40" />
              <p className="text-lg leading-relaxed text-foreground/80 italic">
                "{testimonials[current].message}"
              </p>
              <p className="mt-6 font-semibold text-primary">
                — {testimonials[current].name}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === current ? "w-8 bg-primary" : "w-2.5 bg-primary/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
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
