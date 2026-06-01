"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Trophy,
  BriefcaseBusiness,
  Code2,
  FolderGit2,
} from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <FolderGit2 size={28} />,
      value: 16,
      suffix: "+",
      label: "Project Portfolio",
      color: "text-cyan-300",
    },
    {
      icon: <BriefcaseBusiness size={28} />,
      value: 3,
      suffix: "+",
      label: "Professional Experience",
      color: "text-purple-300",
    },
    {
      icon: <Trophy size={28} />,
      value: 1,
      suffix: "st",
      label: "JTI Expo Champion",
      color: "text-yellow-300",
    },
    {
      icon: <Code2 size={28} />,
      value: 100,
      suffix: "%",
      label: "Full Stack Developer",
      color: "text-emerald-300",
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="absolute left-0 top-0 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <p className="mb-3 text-cyan-300">
          Statistics
        </p>

        <h2 className="text-4xl font-black md:text-6xl">
          Portfolio Overview
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-slate-400">
          Ringkasan pengalaman, project, dan pencapaian yang telah saya
          kerjakan selama perjalanan sebagai Full Stack Developer.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-slate-900/60
              p-7
              backdrop-blur-xl
            "
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

            <div
              className="
                mb-5
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-cyan-400/10
                text-cyan-300
                transition
                group-hover:scale-110
                group-hover:rotate-6
              "
            >
              {item.icon}
            </div>

            <h3
              className={`text-5xl font-black ${item.color}`}
            >
              <CountUp
                end={item.value}
                duration={2.5}
                enableScrollSpy
                scrollSpyOnce
              />
              {item.suffix}
            </h3>

            <p className="mt-3 text-slate-400">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}