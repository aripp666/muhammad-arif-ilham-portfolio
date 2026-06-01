"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Rocket,
  Download,
  Trophy,
  BriefcaseBusiness,
  Code2,
  MapPin,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const stats = [
    {
      icon: <BriefcaseBusiness />,
      value: "15+",
      label: "Project Portfolio",
    },
    {
      icon: <Trophy />,
      value: "Juara 1",
      label: "Best Mobile App JTI Expo 2024",
    },
    {
      icon: <Code2 />,
      value: "Full Stack",
      label: "Laravel, React, Inertia",
    },
  ];

  return (
<section className="relative flex min-h-screen items-center justify-center px-6 pb-28 pt-40 md:pt-44">
              <div className="aurora absolute inset-0 -z-10 opacity-80" />

      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute left-6 top-32 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute bottom-24 right-6 h-60 w-60 rounded-full bg-purple-500/20 blur-3xl"
      />

<div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
            <div>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300"
          >
            <Rocket size={16} />
            Available for Freelance & Web Project
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glow-text text-5xl font-black leading-tight md:text-7xl"
          >
            Muhammad Arif{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ilham
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-5 text-2xl font-bold text-slate-200 md:text-4xl"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
          >
            Saya membangun aplikasi web modern menggunakan Laravel, React JS,
            Inertia, Next.js, Tailwind CSS, MySQL, REST API, GIS, dan teknologi
            data modern.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="rounded-xl bg-cyan-400 px-8 py-4 text-center font-bold text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              Lihat Project
            </a>

            <a
              href="/CV ATS MODE SERIUS.pdf"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-cyan-400/40 px-8 py-4 font-bold text-cyan-300 transition hover:-translate-y-1 hover:bg-cyan-400/10"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-9 flex gap-4"
          >
            {[FaGithub, FaLinkedin, FaInstagram, FaWhatsapp].map((Icon, i) => (
              <a
                key={i}
                className="glass-card rounded-full p-4 text-xl text-slate-300 transition hover:-translate-y-2 hover:text-cyan-300"
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-r from-cyan-400/30 via-blue-500/20 to-purple-500/30 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/60 p-5 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">
            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-950">
              <Image
                src="/profile.jpg"
                alt="Muhammad Arif Ilham"
                width={520}
                height={620}
                priority
className="h-[390px] w-full object-cover md:h-[420px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-2xl border border-white/10 bg-slate-950/75 p-4 backdrop-blur-xl">
                  <p className="text-xl font-black text-white">
                    Muhammad Arif Ilham
                  </p>

                  <p className="mt-1 text-sm text-cyan-300">
                    Full Stack Developer
                  </p>

                  <p className="mt-3 flex items-center gap-2 text-sm text-slate-300">
                    <MapPin size={15} />
                    Pekanbaru, Indonesia
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-2 top-10 rounded-2xl border border-cyan-400/30 bg-slate-950/80 px-4 py-3 text-sm font-bold text-cyan-300 backdrop-blur-xl"
            >
              🚀 Available
            </motion.div>
          </div>

          <div className="mt-7 grid gap-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.15 }}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white">
                    {item.value}
                  </h3>
                  <p className="text-sm text-slate-400">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}