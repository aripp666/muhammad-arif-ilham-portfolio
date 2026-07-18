"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Camera,
  Calendar,
  ExternalLink,
  Images,
  Sparkles,
  Star,
  Trophy,
  X,
} from "lucide-react";

type GalleryCategory =
  | "Competition"
  | "Internship"
  | "Certification"
  | "Projects"
  | "Campus";

interface GalleryItem {
  id: number;
  title: string;
  location: string;
  date: string;
  category: GalleryCategory;
  image: string;
  description: string;
  featured?: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Best Project Mobile",
    location: "JTI Expo 2025",
    date: "2025",
    category: "Competition",
    image: "/gallery/jti-expo.webp",
    featured: true,
    description:
      "Receiving the Best Mobile Project award during JTI Expo 2025.",
  },
  {
    id: 2,
    title: "BRK Syariah Internship",
    location: "Bank Riau Kepri Syariah",
    date: "2026",
    category: "Internship",
    image: "/gallery/brk.webp",
    description: "Internship experience in Accounting & Tax Division.",
  },
  {
    id: 3,
    title: "Cisco Networking",
    location: "Cisco Academy",
    date: "2024",
    category: "Certification",
    image: "/gallery/cisco.webp",
    description: "CCNAv7 Networking Academy Certification.",
  },
  {
    id: 4,
    title: "MikroTik MTCNA",
    location: "MikroTik",
    date: "2024",
    category: "Certification",
    image: "/gallery/mikrotik.webp",
    description: "MTCNA Certified Network Associate.",
  },
  {
    id: 5,
    title: "Masjid Raya An-Nur",
    location: "Pekanbaru",
    date: "2025",
    category: "Projects",
    image: "/gallery/annur.webp",
    description: "Development of official Masjid Raya An-Nur website.",
  },
  {
    id: 6,
    title: "Diskominfotik",
    location: "Provinsi Riau",
    date: "2026",
    category: "Internship",
    image: "/gallery/diskominfotik.webp",
    description: "Internship documentation and internal project activities.",
  },
];

const filters: ("All" | GalleryCategory)[] = [
  "All",
  "Competition",
  "Internship",
  "Certification",
  "Projects",
  "Campus",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const [filter, setFilter] = useState<"All" | GalleryCategory>("All");

  const filteredGallery = useMemo(() => {
    if (filter === "All") return galleryItems;

    return galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  const featured = galleryItems.find((item) => item.featured);

  return (
    <section id="gallery" className="relative overflow-hidden py-32">
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[150px]" />
        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
            <Camera className="h-4 w-4" />
            Gallery Showcase
          </div>

          <h2 className="mx-auto max-w-4xl text-4xl font-black text-white md:text-6xl">
            Moments,
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              {" "}
              Activities{" "}
            </span>
            & Journey
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            A visual collection of competitions, internships, certifications,
            campus activities, and technology projects throughout my
            professional journey.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 md:grid-cols-4"
        >
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Total Photos</p>

                <h3 className="mt-3 text-4xl font-black text-white">
                  {galleryItems.length}
                </h3>
              </div>

              <div className="rounded-2xl bg-cyan-500/15 p-4">
                <Images className="h-7 w-7 text-cyan-400" />
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Competitions</p>

                <h3 className="mt-3 text-4xl font-black text-white">
                  {
                    galleryItems.filter(
                      (item) => item.category === "Competition"
                    ).length
                  }
                </h3>
              </div>

              <div className="rounded-2xl bg-yellow-500/15 p-4">
                <Trophy className="h-7 w-7 text-yellow-400" />
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Activities</p>

                <h3 className="mt-3 text-4xl font-black text-white">
                  {
                    galleryItems.filter(
                      (item) => item.category === "Internship"
                    ).length
                  }
                </h3>
              </div>

              <div className="rounded-2xl bg-violet-500/15 p-4">
                <Sparkles className="h-7 w-7 text-violet-400" />
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Years</p>

                <h3 className="mt-3 text-4xl font-black text-white">4+</h3>
              </div>

              <div className="rounded-2xl bg-emerald-500/15 p-4">
                <Star className="h-7 w-7 text-emerald-400" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {featured && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative mt-20 overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-slate-900/70 to-slate-950"
          >
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
            <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

            <div className="grid lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  width={900}
                  height={700}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center p-10 lg:p-14">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-cyan-500/15 px-5 py-2 text-sm font-semibold text-cyan-300">
                  <Sparkles className="h-4 w-4" />
                  Featured Gallery
                </div>

                <h2 className="mt-8 text-4xl font-black text-white">
                  {featured.title}
                </h2>

                <p className="mt-6 leading-8 text-slate-300">
                  {featured.description}
                </p>

                <div className="mt-10 flex flex-wrap gap-8">
                  <div className="flex items-center gap-3 text-slate-300">
                    <Calendar className="h-5 w-5 text-cyan-400" />
                    {featured.date}
                  </div>

                  <div className="flex items-center gap-3 text-slate-300">
                    <Camera className="h-5 w-5 text-cyan-400" />
                    {featured.location}
                  </div>
                </div>

                <button
                  onClick={() => setSelected(featured)}
                  className="mt-10 inline-flex w-fit items-center gap-3 rounded-2xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition hover:scale-105"
                >
                  View Photo
                  <ExternalLink className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        <div className="mt-20 flex flex-wrap justify-center gap-4">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                filter === item
                  ? "bg-cyan-500 text-slate-950"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/40"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-16 grid auto-rows-[260px] gap-6 lg:grid-cols-4">
          {filteredGallery.map((item, index) => {
            const large = index === 0 || index === 4 || index === 7;

            const tall = index === 2 || index === 5;

            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -8,
                }}
                className={`
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        cursor-pointer

        ${large ? "lg:col-span-2" : ""}

        ${tall ? "lg:row-span-2" : ""}
      `}
                onClick={() => setSelected(item)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-violet-500/0 transition duration-700 group-hover:from-cyan-500/10 group-hover:to-violet-500/10" />

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur">
                      {item.category}
                    </span>

                    <div className="rounded-full bg-white/10 p-2 opacity-0 transition duration-500 group-hover:opacity-100">
                      <ExternalLink className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Calendar className="h-4 w-4" />
                      {item.date}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Camera className="h-4 w-4" />
                      {item.location}
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.3, 0.15],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                  }}
                />

                <motion.div
                  className="absolute -bottom-20 -right-16 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.15, 0.35, 0.15],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 7,
                  }}
                />

                <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,.12)_45%,transparent_70%)] animate-[shine_2s_linear_infinite]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/90 p-6 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.85,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.85,
                  y: 30,
                }}
                transition={{
                  duration: 0.35,
                }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-slate-900 shadow-[0_0_80px_rgba(34,211,238,.18)]"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-6 top-6 z-30 rounded-full border border-white/10 bg-slate-800/80 p-3 text-white transition-all duration-300 hover:rotate-90 hover:bg-red-500"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="grid min-h-[650px] lg:grid-cols-5">
                  {/* IMAGE */}
                  <div className="relative col-span-3 overflow-hidden bg-black">
                    <Image
                      src={selected.image}
                      alt={selected.title}
                      fill
                      className="object-contain transition duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    <div className="absolute bottom-8 left-8">
                      <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur">
                        {selected.category}
                      </span>
                    </div>
                  </div>

                  {/* DETAIL */}
                  <div className="relative col-span-2 flex flex-col justify-between p-10">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-5 py-2 text-sm font-semibold text-cyan-300">
                        <Camera className="h-4 w-4" />
                        Gallery Details
                      </div>

                      <h2 className="mt-8 text-4xl font-black text-white">
                        {selected.title}
                      </h2>

                      <p className="mt-6 leading-8 text-slate-300">
                        {selected.description}
                      </p>

                      <div className="mt-10 space-y-5">
                        <div className="flex items-center gap-4">
                          <Calendar className="h-5 w-5 text-cyan-400" />
                          <span className="text-slate-300">
                            {selected.date}
                          </span>
                        </div>

                        <div className="flex items-center gap-4">
                          <Images className="h-5 w-5 text-cyan-400" />
                          <span className="text-slate-300">
                            {selected.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-6">
                        <div className="flex items-start gap-4">
                          <Sparkles className="mt-1 h-6 w-6 text-cyan-400" />

                          <div>
                            <h3 className="font-bold text-white">
                              Portfolio Highlight
                            </h3>

                            <p className="mt-2 text-sm leading-7 text-slate-400">
                              This gallery showcases memorable moments,
                              achievements, internships, competitions, and
                              technology projects throughout my academic and
                              professional journey.
                            </p>
                          </div>
                        </div>
                      </div>

                      <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-500 px-6 py-4 font-semibold text-slate-950 transition duration-300 hover:scale-[1.02]">
                        <ExternalLink className="h-5 w-5" />
                        Open Full Resolution
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}