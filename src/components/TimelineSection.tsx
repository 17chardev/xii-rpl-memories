import { motion } from "framer-motion";

const events = [
  { year: "2022", title: "Awal Perjalanan", desc: "Hari pertama masuk kelas X RPL. Perkenalan dan mulai belajar dasar pemrograman." },
  { year: "2023", title: "Kelas XI — Berkembang", desc: "Mulai membuat project nyata, ikut lomba, dan magang di industri IT." },
  { year: "2024", title: "Study Tour", desc: "Kunjungan ke perusahaan teknologi dan wisata bersama teman-teman sekelas." },
  { year: "2024", title: "Ujian & Presentasi", desc: "Mengerjakan project akhir dan presentasi di depan dewan guru." },
  { year: "2025", title: "Kelulusan 🎓", desc: "Hari yang ditunggu-tunggu. Selamat kepada seluruh siswa XII RPL!" },
];

const TimelineSection = () => (
  <section id="timeline" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">📅 Timeline Perjalanan</h2>
        <p className="mt-3 text-muted-foreground">Perjalanan kita dari awal hingga kelulusan</p>
      </motion.div>

      <div className="relative mx-auto max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-px" />

        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`relative mb-10 flex items-start gap-6 md:gap-0 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-6 top-2 z-10 h-4 w-4 -translate-x-1/2 rounded-full gradient-primary shadow-card md:left-1/2" />

            {/* Content */}
            <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {event.year}
              </span>
              <h3 className="mt-2 text-lg font-bold text-foreground">{event.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{event.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TimelineSection;
