"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Send,
  MapPin,
  Phone,
  ArrowUpRight,
  Copy,
} from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      title: "Email",
      value: "ariifilhamm@gmail.com",
      href: "mailto:ariifilhamm@gmail.com",
      icon: <Mail size={24} />,
      desc: "Kirim pesan melalui email",
    },
    {
      title: "WhatsApp",
      value: "+62 822-8202-5656",
      href: "https://wa.me/6282282025656",
      icon: <FaWhatsapp size={26} />,
      desc: "Diskusi project lebih cepat",
    },
    {
      title: "Location",
      value: "Pekanbaru, Indonesia",
      href: "#contact",
      icon: <MapPin size={24} />,
      desc: "Available remote & onsite",
    },
    {
      title: "Phone",
      value: "+62 822-8202-5656",
      href: "tel:+6282282025656",
      icon: <Phone size={24} />,
      desc: "Hubungi langsung",
    },
  ];

  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "#",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "#",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      href: "https://wa.me/6282282025656",
    },
  ];

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 -z-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-16 max-w-4xl text-center"
      >
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-bold text-cyan-300">
          <MessageCircle size={18} />
          Contact
        </p>

        <h2 className="text-4xl font-black leading-tight md:text-6xl">
          Mari Bangun{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Project Digital
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Hubungi saya untuk kerja sama pembuatan website, sistem informasi,
          aplikasi kasir, dashboard admin, GIS, AI project, atau aplikasi
          berbasis Laravel, React, dan Next.js.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card relative overflow-hidden rounded-[2rem] p-8"
        >
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-3xl font-black text-white">
              Let’s Connect
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              Saya terbuka untuk peluang magang, freelance, kolaborasi project,
              pengembangan sistem informasi, dan pembuatan aplikasi berbasis web.
            </p>

            <div className="mt-8 space-y-4">
              {contacts.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 transition group-hover:rotate-6 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="break-words text-sm text-slate-300">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-slate-500 transition group-hover:text-cyan-300"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
                    Available Now
                  </p>
                  <h3 className="mt-3 text-3xl font-black text-white">
                    Siap untuk Project Baru
                  </h3>
                </div>

                <div className="hidden rounded-2xl bg-cyan-400/10 p-4 text-cyan-300 md:block">
                  <Send size={28} />
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                <p className="leading-8 text-slate-300">
                  “Saya siap membantu membangun aplikasi web yang modern,
                  responsif, mudah digunakan, dan sesuai kebutuhan bisnis atau
                  instansi.”
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {["Website", "Dashboard", "POS", "GIS", "AI Project"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a
                  href="mailto:ariifilhamm@gmail.com"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-4 font-black text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:-translate-y-1 hover:bg-cyan-300"
                >
                  <Send size={18} />
                  Kirim Email
                </a>

                <a
                  href="https://wa.me/6282282025656"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-cyan-400/30 px-6 py-4 font-black text-cyan-300 transition hover:-translate-y-1 hover:bg-cyan-400/10"
                >
                  <FaWhatsapp />
                  Chat WhatsApp
                </a>
              </div>

              <div className="mt-8">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
                  Social Links
                </p>

                <div className="grid gap-4 sm:grid-cols-4">
                  {socials.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      whileHover={{ y: -8, scale: 1.08, rotate: 3 }}
                      className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
                    >
                      <div className="text-3xl text-slate-300 transition group-hover:text-cyan-300">
                        {item.icon}
                      </div>

                      <p className="mt-3 text-sm font-bold text-slate-300">
                        {item.name}
                      </p>
                    </motion.a>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  navigator.clipboard.writeText("ariifilhamm@gmail.com")
                }
                className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <Copy size={16} />
                Copy Email
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}