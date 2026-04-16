import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, RotateCcw } from "lucide-react";
import song from "../assets/song.mp3";

const AudioPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    playing ? audio.pause() : audio.play();
    setPlaying(!playing);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !muted;
    setMuted(!muted);
  };

  const replay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    setPlaying(true);
  };

  return (
    <>
      <audio ref={audioRef} loop src={song} />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-1.5 rounded-2xl bg-card/90 p-2 shadow-elevated backdrop-blur-xl border border-border/50"
      >
        {[
          { action: togglePlay, icon: playing ? Pause : Play, label: playing ? "Pause" : "Play" },
          { action: toggleMute, icon: muted ? VolumeX : Volume2, label: muted ? "Unmute" : "Mute" },
          { action: replay, icon: RotateCcw, label: "Replay" },
        ].map(({ action, icon: Icon, label }) => (
          <motion.button
            key={label}
            onClick={action}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors hover:bg-primary/20"
            aria-label={label}
          >
            <Icon className="h-4 w-4" />
          </motion.button>
        ))}
      </motion.div>
    </>
  );
};

export default AudioPlayer;
