"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Building2,
  Landmark,
  BriefcaseBusiness,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      year: "Maret 2026 - Juli 2026",
      title: "Magang",
      place: "Dinas Komunikasi Informatika dan Statistik Provinsi Riau",
      desc: "Mendukung kegiatan pengembangan dan pengelolaan sistem informasi, dokumentasi digital, serta kebutuhan teknologi informasi di lingkungan instansi pemerintahan.",
      icon: <BriefcaseBusiness size={22} />,
    },
    {
      year: "Januari 2025 - Januari 2026",
      title: "Tenaga Ahli IT",
      place: "Masjid Raya An-Nur Provinsi Riau",
      desc: "Mengembangkan dan memelihara aplikasi web full stack menggunakan Laravel dan React JS.",
      icon: <Building2 size={22} />,
    },
    {
      year: "September 2025 - Januari 2026",
      title: "Magang",
      place: "Bank Riau Kepri Syari’ah",
      desc: "Membantu pengelolaan user, dokumen resmi, surat menyurat, dan aplikasi internal perusahaan.",
      icon: <Landmark size={22} />,
    },
    {
      year: "2022 - Sekarang",
      title: "D4 Teknik Informatika",
      place: "Politeknik Caltex Riau",
      desc: "Mahasiswa aktif dengan fokus pada pengembangan aplikasi web dan teknologi informasi.",
      icon: <GraduationCap size={22} />,
    },
  ];

  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="mb-20 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
          Experience
        </p>

        <h2 className="text-4xl font-black md:text-6xl">
          Pengalaman & Pendidikan
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
          Perjalanan pengalaman profesional, magang, dan pendidikan yang
          mendukung fokus saya sebagai Full Stack Developer.
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 md:left-1/2 md:-translate-x-1/2" />

        {experiences.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={`${item.year}-${item.title}-${item.place}`}
              initial={{ opacity: 0, x: isLeft ? -70 : 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="relative mb-16 flex w-full md:mb-20"
            >
              <div
                className={`ml-20 w-full md:ml-0 md:w-[44%] ${
                  isLeft ? "md:mr-auto md:pr-14" : "md:ml-auto md:pl-14"
                }`}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-7 backdrop-blur-xl shadow-2xl shadow-cyan-500/5"
                >
                  <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-400/25" />
                  <div className="absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-purple-500/10 blur-3xl transition duration-500 group-hover:bg-purple-500/20" />

                  <div className="relative z-10">
                    <p className="mb-3 text-sm font-bold text-cyan-300">
                      {item.year}
                    </p>

                    <h3 className="text-2xl font-black text-white md:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 font-medium text-slate-300">
                      {item.place}
                    </p>

                    <p className="mt-5 leading-8 text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-0 top-8 z-20 flex h-12 w-12 items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/50 md:left-1/2 md:-translate-x-1/2"
              >
                {item.icon}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}