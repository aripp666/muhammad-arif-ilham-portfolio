"use client";

import { motion } from "framer-motion";
import {
  FolderGit2,
  ExternalLink,
  Monitor,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Website Masjid Raya An-Nur Provinsi Riau",
      category: "Web Development",
      device: "desktop",
      desc: "...",
      stack: ["Laravel", "React JS", "MySQL", "Tailwind"],
      image: "/Projects/Annur.png",
      macColor: "from-cyan-500/30 to-blue-500/10",
      phoneColor: "from-blue-500/30 to-cyan-500/10",
    },
    {
      title: "Sistem Prestasi Mahasiswa",
      category: "Information System",
      device: "desktop",
      desc: "Sistem pencatatan dan pengelolaan prestasi mahasiswa berbasis arsitektur MVC.",
      stack: ["MVC", "Web App", "Database"],
      image: "/Projects/Prestasi.png",
      macColor: "from-blue-500/30 to-cyan-500/10",
      phoneColor: "from-cyan-500/30 to-blue-500/10",
    },
    {
      title: "Apotek Spotter",
      category: "GIS Application",
      device: "desktop",
      desc: "Aplikasi pemetaan lokasi apotek menggunakan GIS OpenLayers dan React JS dengan fitur pencarian dan informasi lokasi.",
      stack: ["React JS", "OpenLayers", "GIS"],
      image: "/Projects/ApotekSpotter.png",
      macColor: "from-green-500/30 to-cyan-500/10",
      phoneColor: "from-cyan-500/30 to-green-500/10",
    },
    {
      title: "Mobile CafeeApp",
      category: "Mobile App",
      device: "mobile",
      desc: "Aplikasi mobile berbasis Android untuk pemesanan dan manajemen operasional kafe.",
      stack: ["Android", "Mobile App", "UI/UX"],
      image: "/Projects/CafeeApp.png",
      macColor: "from-pink-500/30 to-cyan-500/10",
      phoneColor: "from-cyan-500/30 to-pink-500/10",
    },
    {
      title: "Stroke Detector",
      category: "AI Project",
      device: "desktop",
      desc: "Sistem deteksi dini stroke menggunakan Deep Learning CNN VGG16 dengan antarmuka berbasis React JS.",
      stack: ["Python", "CNN", "VGG16", "React JS"],
      image: "/Projects/Stroke.png",
      macColor: "from-red-500/30 to-cyan-500/10",
      phoneColor: "from-cyan-500/30 to-red-500/10",
    },
    {
      title: "Text Summarization Raja Ampat",
      category: "AI NLP Project",
      device: "desktop",
      desc: "Sistem peringkasan opini publik dari Twitter dan YouTube menggunakan model Seq2Seq dengan antarmuka React JS.",
      stack: ["Python", "Seq2Seq", "NLP", "React JS"],
      image: "/Projects/Summarization.png",
      macColor: "from-indigo-500/30 to-cyan-500/10",
      phoneColor: "from-cyan-500/30 to-indigo-500/10",
    },
    {
      title: "Desain Web Aplikasi Pembelian Saham Investasi",
      category: "UI Web Design",
      device: "desktop",
      desc: "Perancangan antarmuka web aplikasi pembelian saham investasi PT Bank Riau Kepri Syari'ah menggunakan React JS.",
      stack: ["React JS", "UI Design", "Frontend"],
      image: "/Projects/Desain.png",
      macColor: "from-sky-500/30 to-cyan-500/10",
      phoneColor: "from-cyan-500/30 to-sky-500/10",
    },
    {
      title: "Sistem Internal Komposisi Pemegang Saham",
      category: "Internal System",
      device: "desktop",
      desc: "Website internal daftar urutan komposisi pemegang saham PT Bank Riau Kepri Syari'ah menggunakan Laravel, React, dan Inertia.",
      stack: ["Laravel", "React JS", "Inertia", "MySQL"],
      image: "/Projects/Komposisi.png",
      macColor: "from-violet-500/30 to-cyan-500/10",
      phoneColor: "from-cyan-500/30 to-violet-500/10",
    },
    {
      title: "Sistem TJSL dan CSR",
      category: "Internal System",
      device: "desktop",
      desc: "Website internal PT Bank Riau Kepri Syari'ah untuk pengelolaan Tanggung Jawab Sosial dan Lingkungan serta CSR.",
      stack: ["Laravel", "React JS", "Inertia", "MySQL"],
      image: "/Projects/TJSL.png",
      macColor: "from-emerald-500/30 to-cyan-500/10",
      phoneColor: "from-cyan-500/30 to-emerald-500/10",
    },
    {
      title: "Website Corporate Event PT Bank Riau Kepri Syari'ah",
      category: "Corporate Website",
      device: "desktop",
      desc: "Website corporate event pada shared hosting menggunakan Laravel, React, dan Inertia sebagai Full Stack Developer.",
      stack: ["Laravel", "React JS", "Inertia", "Shared Hosting"],
      image: "/Projects/Event.png",
      macColor: "from-teal-500/30 to-cyan-500/10",
      phoneColor: "from-cyan-500/30 to-teal-500/10",
    },
    {
      title: "Bintang Raga Gym Management & POS System",
      category: "POS System",
      device: "desktop",
      desc: "Sistem manajemen gym dan kasir berbasis Laravel 10, React JS, Inertia, Tailwind CSS, dan MySQL dengan fitur member, membership, private trainer, produk, laporan, stok, notifikasi otomatis, dashboard owner dan kasir, serta PWA.",
      stack: ["Laravel 10", "React JS", "Inertia", "Tailwind", "MySQL", "PWA"],
      image: "/Projects/BintangRaga.png",
      macColor: "from-emerald-500/30 to-blue-500/10",
      phoneColor: "from-blue-500/30 to-emerald-500/10",
    },
  ];

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center sm:mb-20"
      >
        <p className="mb-3 flex justify-center gap-2 text-cyan-300">
          <FolderGit2 size={18} /> Project Showcase
        </p>

        <h2 className="text-3xl font-black sm:text-4xl md:text-6xl">
          Project Portfolio
        </h2>

        <p className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
          Kumpulan project yang telah saya kembangkan sebagai Full Stack Developer,
          mulai dari sistem informasi, aplikasi GIS, machine learning, website
          corporate, hingga aplikasi manajemen dan point of sale berbasis web.
        </p>
      </motion.div>

      <div className="space-y-20 sm:space-y-24 lg:space-y-28">
        {projects.map((project, index) => {
          const isMobile = project.device === "mobile";

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 items-center gap-10 sm:gap-12 ${
                index % 2 === 0 ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1.1fr]"
              }`}
            >
              <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold text-cyan-300 sm:text-sm">
                  {project.category}
                </span>

                <h3 className="mt-5 text-2xl font-black text-white sm:mt-6 sm:text-3xl md:text-5xl">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base sm:leading-8">
                  {project.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 sm:px-4 sm:py-2 sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <button className="mt-7 inline-flex items-center gap-3 rounded-xl border border-cyan-400/30 px-5 py-2.5 text-sm font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950 sm:mt-8 sm:px-6 sm:py-3 sm:text-base">
                  Detail Project
                  <ExternalLink size={17} />
                </button>
              </div>

              <div className={`relative w-full ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/10 blur-3xl sm:-inset-6" />

                {isMobile ? (
                  /* iPhone Mockup only, centered, image fully visible */
                  <div className="relative flex justify-center">
                    <motion.div
                      animate={{ y: [0, -12, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="relative w-[180px] rounded-[2rem] border-[8px] border-black bg-black p-2 shadow-2xl shadow-cyan-500/30 sm:w-[230px] md:w-[260px]"
                    >
                      <div className="mx-auto mb-2 h-4 w-16 rounded-full bg-slate-900 sm:w-20" />

                      <div
                        className={`relative aspect-[430/932] w-full overflow-hidden rounded-[1.4rem] bg-gradient-to-br ${project.phoneColor}`}
                      >
                     <Image
  src={project.image}
  alt={project.title}
  width={430}
  height={932}
  sizes="(max-width:768px)200px,260px"
  className="
    h-full
    w-full
    object-contain
    object-top
    transition-all
    duration-700
    hover:scale-[1.03]
  "
/>

                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  /* MacBook Mockup only, image fully visible */
                  <div className="relative w-full">
                    <div className="rounded-t-2xl border border-white/10 bg-slate-800 p-2.5 sm:p-3">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3" />
                        <span className="ml-4 truncate text-xs text-slate-400">
                          {project.title}
                        </span>
                      </div>
                    </div>

<div
  className={`relative w-full overflow-hidden border-x-4 border-b-4 border-slate-800 bg-gradient-to-br sm:border-x-8 sm:border-b-8 ${project.macColor}`}
>
  <Image
    src={project.image}
    alt={project.title}
    width={1904}
    height={944}
    sizes="(max-width:1024px)100vw,50vw"
    className="
        w-full
        h-auto
        object-contain
        transition-all
        duration-700
        hover:scale-[1.01]
    "
/>
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/5" />
</div>

                    <div className="mx-auto h-3 w-40 rounded-b-full bg-slate-700 sm:h-4 sm:w-56" />
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}