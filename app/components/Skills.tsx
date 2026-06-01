"use client";

import { motion } from "framer-motion";
import {
  FaLaravel,
  FaReact,
  FaPhp,
  FaJs,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import {
  Cpu,
  Code2,
  Database,
  BrainCircuit,
  MapPinned,
  Server,
} from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "Laravel", icon: <FaLaravel />, type: "Backend" },
    { name: "React JS", icon: <FaReact />, type: "Frontend" },
    { name: "Next.js", icon: <SiNextdotjs />, type: "Frontend" },
    { name: "Inertia.js", icon: <FaReact />, type: "Frontend" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, type: "Frontend" },
    { name: "MySQL", icon: <SiMysql />, type: "Database" },
    { name: "MongoDB", icon: <SiMongodb />, type: "Database" },
    { name: "PHP", icon: <FaPhp />, type: "Backend" },
    { name: "JavaScript", icon: <FaJs />, type: "Language" },
    { name: "TypeScript", icon: <SiTypescript />, type: "Language" },
    { name: "Python", icon: <FaPython />, type: "AI & Data" },
    { name: "Machine Learning", icon: <BrainCircuit />, type: "AI & Data" },
    { name: "GIS OpenLayers", icon: <MapPinned />, type: "GIS" },
    { name: "Tableau", icon: <Database />, type: "Data Viz" },
    { name: "Git", icon: <FaGitAlt />, type: "Tools" },
  ];

  const categories = [
    {
      title: "Frontend",
      desc: "Membangun UI modern, responsif, dan interaktif.",
      icon: <Code2 size={24} />,
      items: ["React JS", "Next.js", "Inertia.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      desc: "Membangun sistem, API, autentikasi, dan logic aplikasi.",
      icon: <Server size={24} />,
      items: ["Laravel", "PHP", "REST API"],
    },
    {
      title: "Database",
      desc: "Mengelola data aplikasi dan integrasi backend.",
      icon: <Database size={24} />,
      items: ["MySQL", "MongoDB"],
    },
    {
      title: "AI, Data & GIS",
      desc: "Project machine learning, data analysis, dan peta digital.",
      icon: <BrainCircuit size={24} />,
      items: ["Python", "Machine Learning", "GIS", "Tableau"],
    },
  ];

  const loopSkills = [...skills, ...skills];

  return (
    <section id="skills" className="relative overflow-hidden py-32">
      <div className="absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-20 right-0 -z-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-20 max-w-7xl px-6 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-cyan-300">
          <Cpu size={18} />
          Tech Stack
        </div>

        <h2 className="mt-6 text-4xl font-black md:text-6xl">
          Skill &{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Teknologi yang saya gunakan untuk membangun aplikasi full stack,
          sistem informasi, dashboard, GIS, machine learning, dan aplikasi
          modern berbasis web.
        </p>
      </motion.div>

      <div className="mx-auto mb-16 grid max-w-6xl gap-5 px-6 md:grid-cols-4">
        {[
          { value: "15+", label: "Technologies" },
          { value: "16+", label: "Projects" },
          { value: "4+", label: "Core Areas" },
          { value: "Full Stack", label: "Focus" },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl shadow-2xl shadow-cyan-500/5"
          >
            <h3 className="text-3xl font-black text-cyan-300">
              {item.value}
            </h3>
            <p className="mt-2 text-sm text-slate-400">{item.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto mb-20 grid max-w-7xl gap-6 px-6 lg:grid-cols-4">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl"
          >
            <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/25" />

            <div className="relative z-10">
              <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-4 text-cyan-300 transition group-hover:rotate-6 group-hover:scale-110">
                {category.icon}
              </div>

              <h3 className="text-2xl font-black text-white">
                {category.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {category.desc}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-slate-950 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-slate-950 to-transparent" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-5"
        >
          {loopSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="group relative flex min-w-[250px] items-center gap-4 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 px-6 py-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/10 opacity-0 blur-2xl transition group-hover:opacity-100" />

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-3xl text-cyan-300 transition group-hover:rotate-6 group-hover:scale-110">
                {skill.icon}
              </div>

              <div className="relative z-10">
                <h3 className="whitespace-nowrap font-bold text-white">
                  {skill.name}
                </h3>

                <p className="mt-1 text-sm text-slate-400">{skill.type}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}