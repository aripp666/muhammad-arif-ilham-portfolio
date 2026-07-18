"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Calendar,
  ExternalLink,
  GraduationCap,
  Medal,
  ShieldCheck,
  Star,
  Trophy,
  X,
} from "lucide-react";

type Category =
  | "Achievement"
  | "Certification"
  | "Internship"
  | "Development";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  category: Category;
  image: string;
  description: string;
  verified: boolean;
  featured?: boolean;
  credential?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Best Project Mobile",
    issuer: "JTI Expo 2025",
    year: "2025",
    category: "Achievement",
    image: "/certificates/Best-Mobile.png",
    verified: true,
    featured: true,
    description:
      "Best Mobile Project Award for innovative mobile application.",
  },
  {
    id: 2,
    title: "CCNAv7 Introduction to Networks",
    issuer: "Cisco Networking Academy",
    year: "2024",
    category: "Certification",
    image: "/certificates/CCNA-INT.png",
    verified: true,
    credential: "Cisco",
    description:
      "Networking fundamentals, IPv4, IPv6, routing, switching and subnetting.",
  },
  {
    id: 3,
    title: "CCNAv7 SRWE",
    issuer: "Cisco Networking Academy",
    year: "2024",
    category: "Certification",
    image: "/certificates/CCNA-SW.png",
    verified: true,
    credential: "Cisco",
    description:
      "Switching, Routing and Wireless Essentials certification.",
  },
  {
    id: 4,
    title: "MTCNA",
    issuer: "MikroTik",
    year: "2024",
    category: "Certification",
    image: "/certificates/MTCNA.png",
    verified: true,
    credential: "MTCNA",
    description:
      "MikroTik Certified Network Associate.",
  },
  {
    id: 5,
    title: "Internship",
    issuer: "Bank Riau Kepri Syariah",
    year: "2026",
    category: "Internship",
    image: "/certificates/serti-brk.png",
    verified: true,
    description:
      "Internship in Accounting and Tax Division.",
  },
  {
    id: 6,
    title: "Career Development Program",
    issuer: "Professional Career",
    year: "2026",
    category: "Development",
    image: "/certificates/SCC.png",
    verified: true,
    description:
      "Public Speaking for Professional Career.",
  },
];

const filters: ("All" | Category)[] = [
  "All",
  "Achievement",
  "Certification",
  "Internship",
  "Development",
];

const categoryIcon = {
  Achievement: Trophy,
  Certification: ShieldCheck,
  Internship: BriefcaseBusiness,
  Development: GraduationCap,
};

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

export default function Certification() {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [filter, setFilter] = useState<"All" | Category>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return certificates;
    return certificates.filter((item) => item.category === filter);
  }, [filter]);

  const total = certificates.length;

  const verified = certificates.filter((item) => item.verified).length;

  const featured = certificates.find((item) => item.featured);

  return (
    <section id="certification" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      {/* Aurora */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[150px]" />
        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
            <Award className="h-4 w-4" />
            Achievements & Certifications
          </div>

          <h2 className="mx-auto max-w-4xl text-3xl font-black tracking-tight text-white sm:text-4xl md:text-6xl">
            Recognition,
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              {" "}
              Certifications{" "}
            </span>
            & Professional Growth
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            A collection of professional certifications, achievements,
            competitions, internships, and continuous learning that reflect my
            commitment to technology and innovation.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-6 md:grid-cols-4"
        >
          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:rounded-3xl sm:p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 sm:text-sm">Total Certificates</p>
                <h3 className="mt-2 text-2xl font-black text-white sm:text-4xl">
                  {total}
                </h3>
              </div>

              <div className="rounded-xl bg-cyan-500/15 p-2.5 sm:rounded-2xl sm:p-4">
                <Medal className="h-5 w-5 text-cyan-400 sm:h-7 sm:w-7" />
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:rounded-3xl sm:p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 sm:text-sm">Verified</p>
                <h3 className="mt-2 text-2xl font-black text-white sm:text-4xl">
                  {verified}
                </h3>
              </div>

              <div className="rounded-xl bg-emerald-500/15 p-2.5 sm:rounded-2xl sm:p-4">
                <BadgeCheck className="h-5 w-5 text-emerald-400 sm:h-7 sm:w-7" />
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:rounded-3xl sm:p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 sm:text-sm">Awards</p>
                <h3 className="mt-2 text-2xl font-black text-white sm:text-4xl">
                  {
                    certificates.filter((i) => i.category === "Achievement")
                      .length
                  }
                </h3>
              </div>

              <div className="rounded-xl bg-yellow-500/15 p-2.5 sm:rounded-2xl sm:p-4">
                <Trophy className="h-5 w-5 text-yellow-400 sm:h-7 sm:w-7" />
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:rounded-3xl sm:p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 sm:text-sm">Experience</p>
                <h3 className="mt-2 text-2xl font-black text-white sm:text-4xl">3+</h3>
              </div>

              <div className="rounded-xl bg-violet-500/15 p-2.5 sm:rounded-2xl sm:p-4">
                <Star className="h-5 w-5 text-violet-400 sm:h-7 sm:w-7" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Featured Achievement */}
        {featured && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-14 overflow-hidden rounded-[28px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900/70 to-slate-950 sm:mt-20 sm:rounded-[36px]"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative p-6 sm:p-10 lg:p-14">
                <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/20 px-4 py-2 text-xs font-semibold text-yellow-300 sm:text-sm">
                  <Trophy className="h-4 w-4" />
                  Featured Achievement
                </div>

                <h2 className="mt-6 text-2xl font-black text-white sm:mt-8 sm:text-4xl">
                  {featured.title}
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
                  {featured.description}
                </p>

                <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
                  <div className="flex items-center gap-4">
                    <Calendar className="h-5 w-5 flex-shrink-0 text-cyan-400" />
                    <span className="text-slate-300">{featured.year}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <BadgeCheck className="h-5 w-5 flex-shrink-0 text-emerald-400" />
                    <span className="text-slate-300">{featured.issuer}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelected(featured)}
                  className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-105 sm:mt-12 sm:px-7 sm:py-4 sm:text-base"
                >
                  View Certificate
                  <ExternalLink className="h-5 w-5" />
                </button>
              </div>

              <div className="relative flex items-center justify-center p-6 sm:p-10">
                <motion.div
                  whileHover={{
                    rotate: 0,
                    scale: 1.03,
                  }}
                  initial={{
                    rotate: -4,
                  }}
                  className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-2xl sm:rounded-[32px]"
                >
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    width={900}
                    height={650}
                    className="h-auto w-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filters */}
        <div className="mt-14 flex flex-wrap justify-center gap-3 sm:mt-20 sm:gap-4">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all sm:px-6 sm:py-3 sm:text-sm ${
                filter === item
                  ? "bg-cyan-500 text-slate-950"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-500/40"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Certificate Grid */}
        <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((certificate, index) => {
            const Icon = categoryIcon[certificate.category];

            return (
              <motion.div
                key={certificate.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-xl sm:rounded-[32px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />

                  <div className="absolute left-4 top-4 flex flex-wrap gap-2 sm:left-5 sm:top-5">
                    <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      <Icon className="mr-1 inline h-3 w-3" />
                      {certificate.category}
                    </span>

                    {certificate.verified && (
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                        Verified
                      </span>
                    )}
                  </div>
                </div>

                <div className="relative p-5 sm:p-7">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {certificate.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-400 sm:text-base">
                    {certificate.description}
                  </p>

                  <div className="mt-6 space-y-3 sm:mt-8">
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <BadgeCheck className="h-4 w-4 flex-shrink-0 text-cyan-400" />
                      {certificate.issuer}
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <Calendar className="h-4 w-4 flex-shrink-0 text-cyan-400" />
                      {certificate.year}
                    </div>

                    {certificate.credential && (
                      <div className="flex items-center gap-3 text-sm text-slate-300">
                        <ShieldCheck className="h-4 w-4 flex-shrink-0 text-cyan-400" />
                        {certificate.credential}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => setSelected(certificate)}
                    className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:scale-105 sm:mt-8 sm:px-5 sm:py-3"
                  >
                    View Certificate
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>

                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

                <div className="pointer-events-none absolute -bottom-24 -left-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-all duration-700 group-hover:scale-150" />
              </motion.div>
            );
          })}
        </div>

        {/* ===== Modal (fully responsive) ===== */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/80 p-0 backdrop-blur-xl sm:p-4 md:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  y: 24,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  y: 20,
                }}
                transition={{
                  duration: 0.3,
                }}
                onClick={(e) => e.stopPropagation()}
                className="relative flex h-full w-full max-w-6xl flex-col overflow-y-auto rounded-none border-0 border-white/10 bg-slate-900 shadow-[0_0_80px_rgba(34,211,238,.15)] sm:h-auto sm:max-h-[90vh] sm:rounded-[28px] sm:border md:rounded-[40px]"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-slate-800/80 p-2.5 text-white transition hover:bg-red-500 sm:right-6 sm:top-6 sm:p-3"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>

                <div className="grid flex-1 grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-[45vh] min-h-[260px] w-full overflow-hidden bg-black sm:h-[50vh] lg:h-auto lg:min-h-[500px]">
                    <Image
                      src={selected.image}
                      alt={selected.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>

                  <div className="relative flex flex-col justify-between gap-8 p-6 sm:p-8 md:p-10">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-4 py-2 text-xs font-semibold text-cyan-300 sm:text-sm">
                        <BadgeCheck className="h-4 w-4" />
                        {selected.category}
                      </div>

                      <h2 className="mt-6 text-2xl font-black text-white sm:mt-8 sm:text-3xl md:text-4xl">
                        {selected.title}
                      </h2>

                      <p className="mt-4 text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8">
                        {selected.description}
                      </p>

                      <div className="mt-6 space-y-4 sm:mt-10 sm:space-y-5">
                        <div className="flex items-center gap-4">
                          <BadgeCheck className="h-5 w-5 flex-shrink-0 text-cyan-400" />
                          <span className="text-sm text-slate-300 sm:text-base">
                            {selected.issuer}
                          </span>
                        </div>

                        <div className="flex items-center gap-4">
                          <Calendar className="h-5 w-5 flex-shrink-0 text-cyan-400" />
                          <span className="text-sm text-slate-300 sm:text-base">
                            {selected.year}
                          </span>
                        </div>

                        {selected.credential && (
                          <div className="flex items-center gap-4">
                            <ShieldCheck className="h-5 w-5 flex-shrink-0 text-cyan-400" />
                            <span className="text-sm text-slate-300 sm:text-base">
                              {selected.credential}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4 sm:rounded-3xl sm:p-6">
                      <div className="flex items-center gap-3">
                        <BadgeCheck className="h-5 w-5 flex-shrink-0 text-emerald-400 sm:h-6 sm:w-6" />

                        <div>
                          <h4 className="text-sm font-bold text-white sm:text-base">
                            Verified Achievement
                          </h4>

                          <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                            This certificate represents verified learning,
                            competition achievement, internship experience, or
                            professional development.
                          </p>
                        </div>
                      </div>
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