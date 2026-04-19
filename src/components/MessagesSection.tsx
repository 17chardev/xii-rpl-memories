import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Send, MessageCircleHeart, Sparkles } from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

type Message = {
  id: string;
  name: string;
  text: string;
  color: string;
  createdAt: number;
};

const STORAGE_KEY = "xii-rpl-messages-v1";

const colors = [
  "from-primary/30 to-accent/30",
  "from-accent/30 to-primary/30",
  "from-primary/20 to-secondary/40",
  "from-secondary/40 to-accent/30",
];

const seed: Message[] = [
  {
    id: "s1",
    name: "Alumni",
    text: "Sukses selalu untuk kelas XII RPL! Kenangan ini akan selalu terkenang ✨",
    color: colors[0],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 3,
  },
  {
    id: "s2",
    name: "Adik Kelas",
    text: "Inspiratif kak! Semoga jadi panutan untuk kami semua 💙",
    color: colors[1],
    createdAt: Date.now() - 1000 * 60 * 60 * 12,
  },
  {
    id: "s3",
    name: "Sahabat",
    text: "Terima kasih untuk semua momen indahnya. Selamat berpisah dan sampai jumpa di puncak kesuksesan!",
    color: colors[2],
    createdAt: Date.now() - 1000 * 60 * 30,
  },
];

const messageSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Nama tidak boleh kosong" })
    .max(50, { message: "Nama maksimal 50 karakter" }),
  text: z
    .string()
    .trim()
    .nonempty({ message: "Pesan tidak boleh kosong" })
    .max(280, { message: "Pesan maksimal 280 karakter" }),
});

const formatTime = (ts: number) => {
  const diff = Date.now() - ts;
  const m = Math.floor(diff / 60000);
  if (m < 1) return "baru saja";
  if (m < 60) return `${m} menit lalu`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} jam lalu`;
  const d = Math.floor(h / 24);
  return `${d} hari lalu`;
};

const MessagesSection = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setMessages(JSON.parse(raw));
      } else {
        setMessages(seed);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
      }
    } catch {
      setMessages(seed);
    }
  }, []);

  const persist = (list: Message[]) => {
    setMessages(list);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {
      // ignore
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = messageSchema.safeParse({ name, text });
    if (!result.success) {
      toast({
        title: "Pesan belum valid",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    const newMsg: Message = {
      id: crypto.randomUUID(),
      name: result.data.name,
      text: result.data.text,
      color: colors[Math.floor(Math.random() * colors.length)],
      createdAt: Date.now(),
    };
    persist([newMsg, ...messages]);
    setName("");
    setText("");
    setTimeout(() => setSubmitting(false), 300);
    toast({
      title: "Pesan terkirim 💙",
      description: "Terima kasih sudah meninggalkan pesan untuk XII RPL",
    });
  };

  return (
    <section
      id="pesan"
      className="relative overflow-hidden py-24 md:py-32"
    >
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
            Tinggalkan jejakmu
          </div>
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Pesan & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Doa</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Tulis kenangan, ucapan, atau doa terbaikmu untuk kelas XII RPL. Setiap pesan jadi bagian cerita kami.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:sticky lg:top-24 self-start"
          >
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-3xl glass p-6 shadow-elevated md:p-8"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-2xl" />

              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary shadow-glow">
                    <MessageCircleHeart className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Tulis Pesan</h3>
                    <p className="text-xs text-muted-foreground">Untuk teman-teman XII RPL</p>
                  </div>
                </div>

                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Nama
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={50}
                  placeholder="Nama atau panggilanmu"
                  className="mb-4 w-full rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-sm font-medium outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20"
                />

                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Pesan
                </label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  maxLength={280}
                  rows={4}
                  placeholder="Tulis ucapan, doa, atau kenangan terbaikmu..."
                  className="w-full resize-none rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20"
                />
                <div className="mt-1 mb-5 text-right text-[11px] font-medium text-muted-foreground">
                  {text.length}/280
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={submitting}
                  className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl gradient-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-glow transition-all hover:shadow-elevated disabled:opacity-60"
                >
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  Kirim Pesan
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Wall of messages */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5 flex items-center justify-between"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                <Heart className="h-4 w-4 text-primary" />
                {messages.length} pesan
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.article
                    key={msg.id}
                    layout
                    initial={{ opacity: 0, y: 24, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.4) }}
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
                          <p className="text-[11px] font-medium text-muted-foreground">{formatTime(msg.createdAt)}</p>
                        </div>
                      </div>

                      <p className="text-sm leading-relaxed text-foreground/85 break-words">
                        "{msg.text}"
                      </p>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagesSection;
