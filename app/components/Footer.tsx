"use client";

import { motion } from "framer-motion";
import {
  Code2,
  ArrowUp,
  Mail,
  MapPin,
  Rocket,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      icon: <FaGithub />,
      href: "#",
    },
    {
      icon: <FaLinkedin />,
      href: "#",
    },
    {
      icon: <FaInstagram />,
      href: "#",
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/6282282025656",
    },
  ];

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-white/10">
      <div className="absolute left-0 top-0 h-72 w-72 bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-72 w-72 bg-purple-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                <Rocket size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">
                  Muhammad Arif Ilham
                </h3>

                <p className="text-sm text-cyan-300">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="max-w-md leading-8 text-slate-400">
              Membangun aplikasi web modern menggunakan Laravel,
              React JS, Next.js, Inertia, Tailwind CSS,
              MySQL, GIS, AI, dan berbagai teknologi modern lainnya.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={16} />
                <span>ariifilhamm@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={16} />
                <span>Pekanbaru, Indonesia</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-5 text-lg font-black text-white">
              Navigation
            </h4>

            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 transition hover:text-cyan-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-5 text-lg font-black text-white">
              Built With
            </h4>

            <div className="flex flex-wrap gap-3">
              {[
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Framer Motion",
                "GSAP",
                "Lenis",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  whileHover={{
                    y: -6,
                    scale: 1.1,
                    rotate: 5,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <p className="text-center text-sm text-slate-500">
            © 2026 Muhammad Arif Ilham. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            Built with
            <Code2 size={16} className="text-cyan-300" />
            Next.js & Tailwind CSS
          </div>

          <motion.a
            href="#"
            whileHover={{
              y: -4,
            }}
            className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300"
          >
            <ArrowUp size={16} />
            Back To Top
          </motion.a>
        </div>
      </div>
    </footer>
  );
}