import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const events = [
  { year: "2022", title: "Awal Perjalanan", desc: "Hari pertama masuk kelas X RPL. Perkenalan dan mulai belajar dasar pemrograman.", emoji: "🎒" },
  { year: "2023", title: "Kelas XI — Berkembang", desc: "Mulai membuat project nyata, ikut lomba, dan magang di industri IT.", emoji: "💻" },
  { year: "2024", title: "Study Tour", desc: "Kunjungan ke perusahaan teknologi dan wisata bersama teman-teman sekelas.", emoji: "✈️" },
  { year: "2024", title: "Ujian & Presentasi", desc: "Mengerjakan project akhir dan presentasi di depan dewan guru.", emoji: "📊" },
  { year: "2025", title: "Kelulusan", desc: "Hari yang ditunggu-tunggu. Selamat kepada seluruh siswa XII RPL!", emoji: "🎓" },
];

const TimelineSection = () => (
  <section id="timeline" className="relative py-24 overflow-hidden">
    <div className="absolute -right-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />

    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          <Clock className="h-3.5 w-3.5" />
          Perjalanan
        </span>
        <h2 className="mt-4 text-4xl font-black text-foreground sm:text-5xl">Timeline Kelas</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">Dari awal hingga kelulusan</p>
      </motion.div>

      <div className="relative mx-auto max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:left-1/2" />

        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative mb-12 flex items-start gap-6 md:gap-0 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-6 top-2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-xl gradient-primary text-sm shadow-glow md:left-1/2">
              {event.emoji}
            </div>

            {/* Content */}
            <div className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
              <span className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                {event.year}
              </span>
              <h3 className="mt-3 text-xl font-bold text-foreground">{event.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{event.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TimelineSection;
