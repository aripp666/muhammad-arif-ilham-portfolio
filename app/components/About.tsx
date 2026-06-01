"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layers3,
  Sparkles,
  Server,
  Rocket,
  MapPinned,
  BrainCircuit,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Code2 size={26} />,
      title: "Frontend Development",
      text: "Membangun tampilan web modern, responsif, dan interaktif menggunakan React JS, Next.js, Tailwind CSS, dan Inertia.",
      tags: ["React", "Next.js", "Tailwind"],
    },
    {
      icon: <Server size={26} />,
      title: "Backend Development",
      text: "Mengembangkan sistem backend, REST API, autentikasi, CRUD, dan integrasi database menggunakan Laravel dan MySQL.",
      tags: ["Laravel", "REST API", "MySQL"],
    },
    {
      icon: <Layers3 size={26} />,
      title: "Full Stack System",
      text: "Terbiasa membangun aplikasi dari perancangan fitur, frontend, backend, database, sampai deployment.",
      tags: ["Fullstack", "Deploy", "PWA"],
    },
    {
      icon: <BrainCircuit size={26} />,
      title: "AI & Data Project",
      text: "Memiliki pengalaman pada project CNN, Seq2Seq, klasifikasi sentimen, linear regression, dan pengolahan data.",
      tags: ["Python", "CNN", "Seq2Seq"],
    },
  ];

  const highlights = [
    "Full Stack Developer dengan fokus Laravel, React JS, dan Inertia",
    "Berpengalaman mengembangkan website resmi Masjid Raya An-Nur Provinsi Riau",
    "Mengerjakan sistem internal PT Bank Riau Kepri Syari’ah",
    "Membangun sistem POS dan manajemen Bintang Raga Gym",
    "Memiliki project GIS, AI, mobile app, dan game edukatif",
  ];

  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 -z-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center"
      >
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-bold text-cyan-300">
          <Sparkles size={18} />
          About Me
        </p>

        <h2 className="text-4xl font-black leading-tight md:text-6xl">
          Developer yang Membangun{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Solusi Digital
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Saya berfokus pada pengembangan aplikasi web full stack yang modern,
          responsif, dan mudah digunakan untuk kebutuhan bisnis, instansi,
          sistem internal, GIS, AI, hingga aplikasi operasional.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card relative overflow-hidden rounded-[2rem] p-8"
        >
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-6 inline-flex rounded-2xl bg-cyan-400/10 p-4 text-cyan-300">
              <Rocket size={28} />
            </div>

            <h3 className="mb-5 text-3xl font-black text-white">
              Saya Muhammad Arif Ilham
            </h3>

            <p className="leading-8 text-slate-300">
              Saya adalah Full Stack Developer yang terbiasa membangun aplikasi
              dari sisi frontend hingga backend. Saya menggunakan teknologi
              seperti Laravel, React JS, Inertia, Next.js, Tailwind CSS, MySQL,
              MongoDB, REST API, Python, dan beberapa teknologi pendukung lain
              untuk membuat sistem yang rapi, fungsional, dan siap digunakan.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <h4 className="text-3xl font-black text-cyan-400">16+</h4>
                <p className="mt-1 text-sm text-slate-400">Project</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <h4 className="text-3xl font-black text-purple-400">3+</h4>
                <p className="mt-1 text-sm text-slate-400">Experience</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <h4 className="text-3xl font-black text-emerald-400">1st</h4>
                <p className="mt-1 text-sm text-slate-400">JTI Expo</p>
              </div>
            </div>

            <div className="mt-8 grid gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex gap-3 text-slate-300">
                  <CheckCircle2 className="mt-1 shrink-0 text-cyan-300" size={18} />
                  <p className="leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: 45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              whileHover={{ scale: 1.025, y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-2xl bg-cyan-400/10 p-4 text-cyan-300 transition group-hover:rotate-6 group-hover:scale-110">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-black text-white">
                  {card.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {card.text}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 grid gap-5 md:grid-cols-2"
      >
        <div className="glass-card rounded-3xl p-6">
          <div className="mb-4 inline-flex rounded-2xl bg-cyan-400/10 p-4 text-cyan-300">
            <MapPinned size={24} />
          </div>
          <h3 className="text-2xl font-black text-white">GIS & Mapping</h3>
          <p className="mt-3 leading-7 text-slate-400">
            Mengembangkan aplikasi pemetaan lokasi menggunakan OpenLayers,
            React JS, dan data lokasi untuk kebutuhan sistem informasi geografis.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-6">
          <div className="mb-4 inline-flex rounded-2xl bg-cyan-400/10 p-4 text-cyan-300">
            <Database size={24} />
          </div>
          <h3 className="text-2xl font-black text-white">Database & API</h3>
          <p className="mt-3 leading-7 text-slate-400">
            Mengelola database MySQL dan MongoDB, membuat REST API, serta
            membangun integrasi data antara frontend dan backend.
          </p>
        </div>
      </motion.div>
    </section>
  );
}