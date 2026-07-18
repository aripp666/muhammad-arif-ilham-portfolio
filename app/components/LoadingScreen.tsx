"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 4;
      });
    }, 45);

    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(18px)" }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-slate-950"
        >
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute left-1/3 top-1/3 h-[260px] w-[260px] rounded-full bg-purple-500/10 blur-3xl" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-80 w-80 rounded-full border border-cyan-400/10"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-96 w-96 rounded-full border border-purple-400/10"
          />

          <div className="relative z-10 text-center">
            <motion.div
  initial={{
    scale: 0.7,
    opacity: 0,
    rotate: -10,
  }}
  animate={{
    scale: 1,
    opacity: 1,
    rotate: 0,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  className="relative mx-auto mb-8 h-32 w-32"
>

  <motion.div
    animate={{
      rotate: 360,
    }}
    transition={{
      repeat: Infinity,
      duration: 18,
      ease: "linear",
    }}
    className="absolute inset-0 rounded-full border border-cyan-400/20"
  />

  <motion.div
    animate={{
      rotate: -360,
    }}
    transition={{
      repeat: Infinity,
      duration: 12,
      ease: "linear",
    }}
    className="absolute inset-2 rounded-full border border-purple-400/20"
  />

  <motion.div
    animate={{
      y: [0, -6, 0],
      scale: [1, 1.03, 1],
    }}
    transition={{
      repeat: Infinity,
      duration: 3,
    }}
    className="absolute inset-4 overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
  >
    <Image
      src="/logocv.png"
      alt="Muhammad Arif Ilham"
      fill
      priority
      className="object-contain p-4"
    />
  </motion.div>

</motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-4 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-slate-400"
            >
              <Sparkles size={16} className="text-cyan-300" />
              Loading Portfolio
            </motion.p>

            <div className="mx-auto mt-8 w-72">
              <div className="mb-3 flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Initializing UI</span>
                <span>{progress}%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full border border-white/10 bg-white/10">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 shadow-[0_0_25px_rgba(34,211,238,0.6)]"
                />
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-600"
            >
              Full Stack Developer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}