"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LOGO / NOME */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-white font-bold text-lg hover:text-blue-400 transition cursor-pointer"
          aria-label="Voltar ao topo"
        >
          &lt; Ewerton Hecsley / &gt;
          <ArrowUp
            size={18}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
        </button>

        {/* COPY */}
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Ewerton Hecsley. Desenvolvido com foco em
          performance, acessibilidade e boas práticas.
        </p>

        {/* REDES SOCIAIS */}
        <div className="flex gap-4">
          <a
            href="https://github.com/EwertonHecsley"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/ewerton-hecsley-8a613992/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:ewerton.martinscomercial@gmail.com"
            aria-label="Email"
            className="hover:text-white transition"
          >
            <Mail size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}
