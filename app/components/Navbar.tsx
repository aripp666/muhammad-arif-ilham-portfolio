"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Download, Sparkles } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  const menus = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Certification", href: "#certification", id: "certification" },
    { label: "Gallery", href: "#gallery", id: "gallery" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = menus
        .map((menu) => document.getElementById(menu.id))
        .filter(Boolean) as HTMLElement[];

      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 160 && rect.bottom >= 160;
      });

      if (current) setActive(current.id);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0, scale: 0.92 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed left-0 top-5 z-50 flex w-full justify-center px-4"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className={`
          relative overflow-hidden border border-white/10
          bg-slate-950/75 backdrop-blur-2xl
          shadow-2xl shadow-cyan-500/10
          ${
            open
              ? "w-full max-w-xl rounded-[2rem]"
              : scrolled
              ? "w-auto rounded-full"
              : "w-auto rounded-full"
          }
        `}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-purple-500/10" />

        <div className="relative z-10 flex items-center gap-3 px-3 py-3">
          <a href="#" className="flex items-center gap-3 pr-2">
            <motion.div
              whileHover={{ rotate: 8, scale: 1.08 }}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/30"
            >
              <Code2 size={20} />
            </motion.div>

            <div className="hidden sm:block">
              <span className="glow-text block text-sm font-black tracking-[0.25em] text-cyan-400">
                ILHAM.DEV
              </span>
              <span className="block text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                Full Stack
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-1 rounded-full bg-white/5 p-1 lg:flex">
            {menus.map((menu) => {
              const isActive = active === menu.id;

              return (
                <a
                  key={menu.href}
                  href={menu.href}
                  className={`relative rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition ${
                    isActive
                      ? "text-slate-950"
                      : "text-slate-300 hover:text-cyan-300"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="dynamicActiveMenu"
                      className="absolute inset-0 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/25"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">{menu.label}</span>
                </a>
              );
            })}
          </div>

          <a
            href="/CV ATS MODE SERIUS.pdf"
            className="group hidden items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-black text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950 lg:inline-flex"
          >
            <Download size={15} />
            CV
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="ml-auto rounded-full border border-white/10 bg-white/5 p-3 text-cyan-300 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, height: "auto", filter: "blur(0px)" }}
              exit={{ opacity: 0, height: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.25 }}
              className="lg:hidden"
            >
              <div className="relative z-10 px-4 pb-5">
                <div className="mb-4 flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-cyan-300">
                  <Sparkles size={18} />
                  <span className="text-sm font-bold">Navigate Portfolio</span>
                </div>

                <div className="grid gap-2">
                  {menus.map((menu, index) => (
                    <motion.a
                      key={menu.href}
                      href={menu.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                      className={`rounded-2xl px-5 py-4 font-bold transition ${
                        active === menu.id
                          ? "bg-cyan-400 text-slate-950"
                          : "text-slate-200 hover:bg-cyan-400/10 hover:text-cyan-300"
                      }`}
                    >
                      {menu.label}
                    </motion.a>
                  ))}

                  <a
                    href="/CV ATS MODE SERIUS.pdf"
                    onClick={() => setOpen(false)}
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-4 text-center font-black text-slate-950 shadow-lg shadow-cyan-400/30"
                  >
                    <Download size={18} />
                    Download CV
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
}