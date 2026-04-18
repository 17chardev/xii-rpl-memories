import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

import s1 from "@/assets/1-adel.jpeg";
import s2 from "@/assets/1-aldo.jpeg";
import s3 from "@/assets/1-andre.jpeg";
import s4 from "@/assets/1-arin.jpeg";
import s5 from "@/assets/1-ayub.jpeg";
import s6 from "@/assets/1-charles.jpeg";
// import s7 from "@/assets/1-ela.jpeg";
import s8 from "@/assets/1-fabian.jpeg";
import s9 from "@/assets/1-faiz.jpeg";
import s10 from "@/assets/1-fito.jpeg";
// import s11 from "@/assets/1-fyto.jpeg";
import s12 from "@/assets/1-ghio.jpeg";
import s13 from "@/assets/1-moh yakin.jpeg";
import s14 from "@/assets/1-raihan.jpeg";
import s15 from "@/assets/1-refanza.jpeg";
import s16 from "@/assets/1-reganza.jpeg";
import s17 from "@/assets/1-sherin.jpeg";
import s18 from "@/assets/1-sherly.jpeg";
import s19 from "@/assets/1-siti nur.jpeg";

const students = [
  { name: "ADELIA NURFATMAWATI", motto: "Koding adalah seni!", photo: s1, ig: "https://www.instagram.com/uarmyddell/" },
  { name: "ALDO ALGIFARI", motto: "Terus belajar, terus berkembang.", photo: s2, ig: "#" },
  { name: "ANDRE DWI SAPUTRA", motto: "Debug life, compile dreams.", photo: s3, ig: "https://www.instagram.com/4ndr3333/" },
  { name: "ARINDA CHELSA AULIA", motto: "Semangat tanpa batas!", photo: s4, ig: "https://www.instagram.com/rin.arinnn_/" },
  { name: "AYUB SAPUTRO", motto: "RPL for life!", photo: s5, ig: "https://www.instagram.com/ayub_saputro01/" },
  { name: "CHARLES AGUSTIAN PUTRA", motto: "Never stop learning.", photo: s6, ig: "https://www.instagram.com/charp.ete/" },
  { name: "ELA DWI PURWATI", motto: "Hello World, Hello Future.", photo: s1, ig: "#" },
  { name: "FABIAN VIGO HARDIANSYAH", motto: "Code with passion.", photo: s8, ig: "https://www.instagram.com/fbianvgo__/" },
  { name: "FAIZ ARSYA NAFIZA", motto: "Sukses itu proses.", photo: s9, ig: "#" },
  { name: "FITO REHANES FIRMANSAH", motto: "Dream big, start small.", photo: s10, ig: "https://www.instagram.com/fitokejedotsusu/" },
  { name: "FYTO SURYA PRATAMA", motto: "Keep calm and code on.", photo: s1, ig: "#" },
  { name: "GHIO PRAMANA AINURI", motto: "Bersama kita bisa!", photo: s12, ig: "https://www.instagram.com/ghiioo_717/" },
  { name: "MOHAMAD YAKIN NUR ROHMAN", motto: "Bersama kita bisa!", photo: s13, ig: "https://www.instagram.com/stranger.k1n/" },
  { name: "RAIHAN ROUSYANUL FIKRI", motto: "Bersama kita bisa!", photo: s14, ig: "https://www.instagram.com/raihnfqr/" },
  { name: "REFANZA ANDRA PUTRA PUJANA", motto: "Bersama kita bisa!", photo: s15, ig: "https://www.instagram.com/rfnzandraa._/" },
  { name: "REGANZA ANDRE PUTRA PUJANA", motto: "Bersama kita bisa!", photo: s16, ig: "https://www.instagram.com/reganz.ndre/" },
  { name: "SHERIN ANGELIKA SIGTIAMARTA", motto: "Bersama kita bisa!", photo: s17, ig: "https://www.instagram.com/shrnmrtaa/" },
  { name: "SHERLYANA SALSABILA PUTRI ANWAR", motto: "Bersama kita bisa!", photo: s18, ig: "https://www.instagram.com/sherlyana_official/" },
  { name: "SITI NURHAZIZAH SARAH", motto: "Bersama kita bisa!", photo: s19, ig: "#" },
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
