"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/EwertonHecsley",
    icon: <Github size={17} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ewerton-hecsley-8a613992/",
    icon: <Linkedin size={17} />,
  },
  {
    label: "Email",
    href: "mailto:ewerton.martinscomercial@gmail.com",
    icon: <Mail size={17} />,
  },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      {/* Neon gradient line */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(0,255,136,0.4), transparent)",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "2rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          alignItems: "center",
        }}
      >
        {/* Main row: Logo | Social icons | Back to top */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          {/* Logo / Name */}
          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "var(--text-primary)",
                transition: "color 0.25s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--neon)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
            >
              {"< "}
              <span style={{ color: "var(--neon)", textShadow: "0 0 10px rgba(0,255,136,0.4)" }}>
                Ewerton Hecsley
              </span>
              {" Dev />"}
            </span>
          </button>

          {/* Social icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                style={{
                  color: "var(--text-muted)",
                  transition: "color 0.25s ease, filter 0.25s ease",
                  display: "flex",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--neon)";
                  e.currentTarget.style.filter =
                    "drop-shadow(0 0 6px rgba(0,255,136,0.55))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.filter = "none";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p
          style={{
            fontSize: "0.72rem",
            textAlign: "center",
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--text-dim)",
            lineHeight: 1.6,
          }}
        >
          © {new Date().getFullYear()}{" "}
          <span style={{ color: "var(--text-muted)" }}>Ewerton Hecsley</span>
          {" · "}Desenvolvido com foco em performance, acessibilidade e boas práticas.
        </p>
      </div>
    </footer>
  );
}
