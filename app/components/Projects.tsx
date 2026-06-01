"use client";

import { motion } from "framer-motion";
import {
  FolderGit2,
  ExternalLink,
  Monitor,
  Smartphone,
} from "lucide-react";

export default function Projects() {
  const projects = [
  {
    title: "Website Masjid Raya An-Nur Provinsi Riau",
    category: "Web Development",
    desc: "Pengembangan website resmi masjid berbasis Laravel dan React JS untuk pengelolaan informasi, artikel, dan galeri.",
    stack: ["Laravel", "React JS", "MySQL", "Tailwind"],
    macColor: "from-cyan-500/30 to-blue-500/10",
    phoneColor: "from-blue-500/30 to-cyan-500/10",
  },
  {
    title: "Sistem Prestasi Mahasiswa",
    category: "Information System",
    desc: "Sistem pencatatan dan pengelolaan prestasi mahasiswa berbasis arsitektur MVC.",
    stack: ["MVC", "Web App", "Database"],
    macColor: "from-blue-500/30 to-cyan-500/10",
    phoneColor: "from-cyan-500/30 to-blue-500/10",
  },
  {
    title: "Apotek Spotter",
    category: "GIS Application",
    desc: "Aplikasi pemetaan lokasi apotek menggunakan GIS OpenLayers dan React JS dengan fitur pencarian dan informasi lokasi.",
    stack: ["React JS", "OpenLayers", "GIS"],
    macColor: "from-green-500/30 to-cyan-500/10",
    phoneColor: "from-cyan-500/30 to-green-500/10",
  },
  {
    title: "Mobile CafeeApp",
    category: "Mobile App",
    desc: "Aplikasi mobile berbasis Android untuk pemesanan dan manajemen operasional kafe.",
    stack: ["Android", "Mobile App", "UI/UX"],
    macColor: "from-pink-500/30 to-cyan-500/10",
    phoneColor: "from-cyan-500/30 to-pink-500/10",
  },
  {
    title: "Sistem Absensi Pegawai",
    category: "Web Application",
    desc: "Aplikasi absensi online berbasis Laravel dan React JS dengan fitur lokasi, cuti, dan riwayat absensi.",
    stack: ["Laravel", "React JS", "MySQL"],
    macColor: "from-orange-500/30 to-cyan-500/10",
    phoneColor: "from-cyan-500/30 to-orange-500/10",
  },
  {
    title: "Stroke Detector",
    category: "AI Project",
    desc: "Sistem deteksi dini stroke menggunakan Deep Learning CNN VGG16 dengan antarmuka berbasis React JS.",
    stack: ["Python", "CNN", "VGG16", "React JS"],
    macColor: "from-red-500/30 to-cyan-500/10",
    phoneColor: "from-cyan-500/30 to-red-500/10",
  },
  {
    title: "Text Summarization Raja Ampat",
    category: "AI NLP Project",
    desc: "Sistem peringkasan opini publik dari Twitter dan YouTube menggunakan model Seq2Seq dengan antarmuka React JS.",
    stack: ["Python", "Seq2Seq", "NLP", "React JS"],
    macColor: "from-indigo-500/30 to-cyan-500/10",
    phoneColor: "from-cyan-500/30 to-indigo-500/10",
  },
  {
    title: "Warden of the Wild",
    category: "Game Development",
    desc: "Game edukatif berbasis Unity tentang penyelamatan hutan untuk platform desktop dan mobile.",
    stack: ["Unity", "Game", "Education"],
    macColor: "from-lime-500/30 to-cyan-500/10",
    phoneColor: "from-cyan-500/30 to-lime-500/10",
  },
  {
    title: "Klasifikasi Sentimen Berita PT Bank Riau Kepri Syari’ah",
    category: "AI Classification",
    desc: "Sistem klasifikasi berita positif dan negatif menggunakan Python dan Deep Learning.",
    stack: ["Python", "Deep Learning", "Classification"],
    macColor: "from-purple-500/30 to-cyan-500/10",
    phoneColor: "from-cyan-500/30 to-purple-500/10",
  },
  {
    title: "Desain Web Aplikasi Pembelian Saham Investasi",
    category: "UI Web Design",
    desc: "Perancangan antarmuka web aplikasi pembelian saham investasi PT Bank Riau Kepri Syari’ah menggunakan React JS.",
    stack: ["React JS", "UI Design", "Frontend"],
    macColor: "from-sky-500/30 to-cyan-500/10",
    phoneColor: "from-cyan-500/30 to-sky-500/10",
  },
  {
    title: "Sistem Internal Komposisi Pemegang Saham",
    category: "Internal System",
    desc: "Website internal daftar urutan komposisi pemegang saham PT Bank Riau Kepri Syari’ah menggunakan Laravel, React, dan Inertia.",
    stack: ["Laravel", "React JS", "Inertia", "MySQL"],
    macColor: "from-violet-500/30 to-cyan-500/10",
    phoneColor: "from-cyan-500/30 to-violet-500/10",
  },
  {
    title: "Sistem Internal Pengelolaan Sponsorship",
    category: "Internal System",
    desc: "Aplikasi internal pengelolaan sponsorship PT Bank Riau Kepri Syari’ah berbasis Laravel, React, dan Inertia.",
    stack: ["Laravel", "React JS", "Inertia", "MySQL"],
    macColor: "from-fuchsia-500/30 to-cyan-500/10",
    phoneColor: "from-cyan-500/30 to-fuchsia-500/10",
  },
  {
    title: "Sistem TJSL dan CSR",
    category: "Internal System",
    desc: "Website internal PT Bank Riau Kepri Syari’ah untuk pengelolaan Tanggung Jawab Sosial dan Lingkungan serta CSR.",
    stack: ["Laravel", "React JS", "Inertia", "MySQL"],
    macColor: "from-emerald-500/30 to-cyan-500/10",
    phoneColor: "from-cyan-500/30 to-emerald-500/10",
  },
  {
    title: "Aplikasi Linear Regression",
    category: "Data Application",
    desc: "Aplikasi analisis Linear Regression menggunakan data Excel berbasis Python dan React JS.",
    stack: ["Python", "React JS", "Excel", "Data Analysis"],
    macColor: "from-yellow-500/30 to-cyan-500/10",
    phoneColor: "from-cyan-500/30 to-yellow-500/10",
  },
  {
    title: "Website Corporate Event PT Bank Riau Kepri Syari’ah",
    category: "Corporate Website",
    desc: "Website corporate event pada shared hosting menggunakan Laravel, React, dan Inertia sebagai Full Stack Developer.",
    stack: ["Laravel", "React JS", "Inertia", "Shared Hosting"],
    macColor: "from-teal-500/30 to-cyan-500/10",
    phoneColor: "from-cyan-500/30 to-teal-500/10",
  },
  {
    title: "Bintang Raga Gym Management & POS System",
    category: "POS System",
    desc: "Sistem manajemen gym dan kasir berbasis Laravel 10, React JS, Inertia, Tailwind CSS, dan MySQL dengan fitur member, membership, private trainer, produk, laporan, stok, notifikasi otomatis, dashboard owner dan kasir, serta PWA.",
    stack: ["Laravel 10", "React JS", "Inertia", "Tailwind", "MySQL", "PWA"],
    macColor: "from-emerald-500/30 to-blue-500/10",
    phoneColor: "from-blue-500/30 to-emerald-500/10",
  },
];

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <p className="mb-3 flex justify-center gap-2 text-cyan-300">
          <FolderGit2 size={18} /> Project Showcase
        </p>

        <h2 className="text-4xl font-black md:text-6xl">
          Project Portfolio
        </h2>

       <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-400">
  Kumpulan project yang telah saya kembangkan sebagai Full Stack Developer,
  mulai dari sistem informasi, aplikasi GIS, machine learning, website
  corporate, hingga aplikasi manajemen dan point of sale berbasis web.
</p>
      </motion.div>

      <div className="space-y-28">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className={`grid items-center gap-12 ${
              index % 2 === 0 ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1.1fr]"
            }`}
          >
            <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
                {project.category}
              </span>

              <h3 className="mt-6 text-3xl font-black text-white md:text-5xl">
                {project.title}
              </h3>

              <p className="mt-5 max-w-xl leading-8 text-slate-400">
                {project.desc}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <button className="mt-8 inline-flex items-center gap-3 rounded-xl border border-cyan-400/30 px-6 py-3 font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950">
                Detail Project
                <ExternalLink size={17} />
              </button>
            </div>

            <div className={`relative ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
              <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/10 blur-3xl" />

              {/* MacBook Mockup */}
              <div className="relative">
                <div className="rounded-t-2xl border border-white/10 bg-slate-800 p-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-4 text-xs text-slate-400">
                      {project.title}
                    </span>
                  </div>
                </div>

                <div
                  className={`relative aspect-[16/10] overflow-hidden border-x-8 border-b-8 border-slate-800 bg-gradient-to-br ${project.macColor}`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <Monitor className="mb-4 text-cyan-300" size={48} />
                    <p className="text-lg font-black text-white">
                      MacBook Preview
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      Screenshot nanti di sini
                    </p>
                  </div>
                </div>

                <div className="mx-auto h-4 w-56 rounded-b-full bg-slate-700" />
              </div>

              {/* iPhone Mockup */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-12 -right-2 w-[145px] rounded-[2rem] border-[8px] border-black bg-black p-2 shadow-2xl shadow-cyan-500/30 md:-right-8 md:w-[180px]"
              >
                <div className="mx-auto mb-2 h-4 w-20 rounded-full bg-slate-900" />

                <div
                  className={`relative aspect-[9/18] overflow-hidden rounded-[1.4rem] bg-gradient-to-br ${project.phoneColor}`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <Smartphone className="mb-2 text-cyan-300" size={28} />
                    <p className="text-xs font-bold text-white">
                      iPhone Preview
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}