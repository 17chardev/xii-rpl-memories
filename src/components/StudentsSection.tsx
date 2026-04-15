import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

import s1 from "@/assets/student-1.jpg";
import s2 from "@/assets/student-2.jpg";
import s3 from "@/assets/student-3.jpg";
import s4 from "@/assets/student-4.jpg";

const students = [
  { name: "Ahmad Fauzi", motto: "Koding adalah seni!", photo: s1, ig: "#" },
  { name: "Siti Nurhaliza", motto: "Terus belajar, terus berkembang.", photo: s2, ig: "#" },
  { name: "Rizky Pratama", motto: "Debug life, compile dreams.", photo: s3, ig: "#" },
  { name: "Aisyah Putri", motto: "Semangat tanpa batas!", photo: s4, ig: "#" },
  { name: "Budi Santoso", motto: "RPL for life!", photo: s1, ig: "#" },
  { name: "Dewi Lestari", motto: "Never stop learning.", photo: s2, ig: "#" },
  { name: "Fajar Ramadhan", motto: "Hello World, Hello Future.", photo: s3, ig: "#" },
  { name: "Nur Aini", motto: "Code with passion.", photo: s4, ig: "#" },
  { name: "Galih Permana", motto: "Sukses itu proses.", photo: s1, ig: "#" },
  { name: "Rina Marlina", motto: "Dream big, start small.", photo: s2, ig: "#" },
  { name: "Hendra Wijaya", motto: "Keep calm and code on.", photo: s3, ig: "#" },
  { name: "Fitri Handayani", motto: "Bersama kita bisa!", photo: s4, ig: "#" },
];

const StudentsSection = () => (
  <section id="siswa" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">👥 Siswa Kelas XII RPL</h2>
        <p className="mt-3 text-muted-foreground">
          {students.length} siswa yang telah berjuang bersama selama 3 tahun
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {students.map((student, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col items-center rounded-xl bg-card p-4 shadow-card transition-shadow hover:shadow-elevated"
          >
            <div className="relative mb-3 h-24 w-24 overflow-hidden rounded-full border-2 border-primary/20">
              <img
                src={student.photo}
                alt={student.name}
                loading="lazy"
                width={96}
                height={96}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-sm font-semibold text-foreground text-center leading-tight">
              {student.name}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground text-center italic line-clamp-2">
              "{student.motto}"
            </p>
            <a
              href={student.ig}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-muted-foreground transition-colors hover:text-primary"
              aria-label={`Instagram ${student.name}`}
            >
              <Instagram className="h-4 w-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StudentsSection;
