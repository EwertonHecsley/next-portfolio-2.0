"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
        borderBottom: scrolled ? "1px solid rgba(0,255,136,0.12)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        background: scrolled ? "rgba(5,10,14,0.88)" : "transparent",
      }}
    >
      {/* Inner bar */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "4.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* ── LOGO (left) ── */}
        <a
          href="#hero"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              color: "var(--text-primary)",
              whiteSpace: "nowrap",
            }}
          >
            {"< "}
            <span
              style={{
                color: "var(--neon)",
                textShadow: "0 0 12px rgba(0,255,136,0.45)",
              }}
            >
              Ewerton Hecsley
            </span>
            {" Dev />"}
          </span>
        </a>

        {/* ── NAV DESKTOP (right) — hidden below 660px ── */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="hidden min-[660px]:flex"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="btn-neon"
            style={{ padding: "0.45rem 1.1rem", fontSize: "0.8rem" }}
          >
            Contrate-me
          </a>
        </nav>

        {/* ── HAMBURGER (mobile) ── */}
        <button
          id="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
          }}
          className="min-[660px]:hidden"
        >
          {[
            open ? "rotate(45deg) translateY(7px)" : "none",
            undefined, // middle bar — controlled by opacity
            open ? "rotate(-45deg) translateY(-7px)" : "none",
          ].map((transform, i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "var(--neon)",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                transform: i !== 1 ? transform : undefined,
                opacity: i === 1 ? (open ? 0 : 1) : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              background: "rgba(5,10,14,0.97)",
              borderBottom: "1px solid var(--border-subtle)",
              backdropFilter: "blur(20px)",
            }}
          >
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "1.25rem 1.5rem",
                gap: "1rem",
                listStyle: "none",
                margin: 0,
              }}
            >
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "block",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      transition: "color 0.25s ease, padding-left 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--neon)";
                      e.currentTarget.style.paddingLeft = "0.5rem";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-muted)";
                      e.currentTarget.style.paddingLeft = "0";
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "monospace",
                        color: "var(--neon)",
                        marginRight: "0.5rem",
                        opacity: 0.7,
                      }}
                    >
                      →
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-neon"
                  style={{
                    display: "flex",
                    marginTop: "0.5rem",
                    justifyContent: "center",
                    fontSize: "0.9rem",
                    padding: "0.6rem 1rem",
                  }}
                >
                  Contate-me
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
