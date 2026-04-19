import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

type Message = {
  id: string;
  name: string;
  text: string;
  color: string;
};

const colors = [
  "from-primary/30 to-accent/30",
  "from-accent/30 to-primary/30",
  "from-primary/20 to-secondary/40",
  "from-secondary/40 to-accent/30",
];

// Tambahkan / edit pesan secara manual di sini
const messages: Message[] = [
  {
    id: "m1",
    name: "Alumni",
    text: "Sukses selalu untuk kelas XII RPL! Kenangan ini akan selalu terkenang ✨",
    color: colors[0],
  },
  {
    id: "m2",
    name: "Adik Kelas",
    text: "Inspiratif kak! Semoga jadi panutan untuk kami semua 💙",
    color: colors[1],
  },
  {
    id: "m3",
    name: "Sahabat",
    text: "Terima kasih untuk semua momen indahnya. Selamat berpisah dan sampai jumpa di puncak kesuksesan!",
    color: colors[2],
  },
];

const MessagesSection = () => {
  return (
    <section id="pesan" className="relative overflow-hidden py-24 md:py-32">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute -top-32 left-1/4 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-32 right-1/4 -z-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold text-foreground/80">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Kenangan terindah
          </div>
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Pesan & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Doa</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Kumpulan ucapan, doa, dan kenangan terbaik untuk kelas XII RPL.
          </p>
        </motion.div>

        {/* Wall of messages */}
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground"
          >
            <Heart className="h-4 w-4 text-primary" />
            {messages.length} pesan
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {messages.map((msg, i) => (
              <motion.article
                key={msg.id}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.06, 0.4) }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${msg.color} p-[1px] shadow-card transition-shadow hover:shadow-elevated`}
              >
                <div className="relative h-full rounded-2xl bg-card/95 p-5 backdrop-blur">
                  <div className="absolute right-3 top-3 opacity-20 transition-opacity group-hover:opacity-40">
                    <Heart className="h-5 w-5 fill-primary text-primary" />
                  </div>

                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-sm font-black text-primary-foreground shadow-sm">
                      {msg.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-foreground">{msg.name}</p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-foreground/85 break-words">
                    "{msg.text}"
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagesSection;
