"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <header className="w-full h-20 flex items-center justify-between px-6 md:px-8 border-b border-white/10 backdrop-blur-md bg-black/30 fixed top-0 z-50">

      {/* LOGO */}
      <a
        href="#hero"
        className="flex items-center font-extrabold tracking-wide text-white whitespace-nowrap"
      >
        {/* LOGO COMPLETO (>= 360px) */}
        <span className="hidden min-[360px]:inline text-base sm:text-lg md:text-2xl">
          &lt;{" "}
          <span className="text-blue-400 font-mono">
            Ewerton Hecsley
          </span>{" "}
          Dev /&gt;
        </span>

        {/* LOGO REDUZIDO (< 360px) */}
        <span className="inline min-[360px]:hidden text-base">
          &lt;{" "}
          <span className="text-blue-400 font-mono">
            EH
          </span>{" "}
          Dev /&gt;
        </span>
      </a>

      {/* NAV DESKTOP */}
      <nav className="hidden min-[660px]:flex gap-8 text-sm font-medium text-gray-300">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="
              relative hover:text-white transition
              after:absolute after:left-0 after:-bottom-1
              after:w-0 after:h-0.5 after:bg-blue-400
              hover:after:w-full after:transition-all
            "
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* BOTÃO HAMBÚRGUER */}
      <button
        onClick={() => setOpen(!open)}
        className="min-[660px]:hidden flex flex-col gap-1"
        aria-label="Abrir menu"
      >
        <span
          className={`w-6 h-0.5 bg-white transition ${
            open ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition ${
            open ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="
              absolute top-20 left-0 w-full
              bg-black/90 backdrop-blur-md
              border-t border-white/10
              min-[660px]:hidden
            "
          >
            <ul className="flex flex-col px-6 py-6 gap-6 text-sm text-gray-300">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block hover:text-white transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
