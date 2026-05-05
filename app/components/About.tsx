"use client";

import { Reveal } from "@/components/Reveal";

const highlights = [
  { icon: "⚛️", label: "React & Next.js", desc: "Interfaces modernas e performáticas" },
  { icon: "🧱", label: "Node.js & NestJS", desc: "APIs robustas e escaláveis" },
  { icon: "🗃️", label: "PostgreSQL & MongoDB", desc: "Dados relacionais e não relacionais" },
  { icon: "🐳", label: "Docker & Cloud", desc: "Ambientes padronizados e deploy" },
];

export function About() {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--bg-secondary)",
        scrollMarginTop: "5rem",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      {/* Grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      <div className="section-container" style={{ position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* IMAGE */}
          <Reveal direction="left">
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                {/* Corner brackets */}
                <div
                  style={{
                    position: "absolute", top: "-8px", left: "-8px",
                    width: "24px", height: "24px",
                    borderTop: "2px solid var(--neon)",
                    borderLeft: "2px solid var(--neon)",
                    borderRadius: "2px 0 0 0", zIndex: 2,
                  }}
                />
                <div
                  style={{
                    position: "absolute", bottom: "-8px", right: "-8px",
                    width: "24px", height: "24px",
                    borderBottom: "2px solid var(--neon)",
                    borderRight: "2px solid var(--neon)",
                    borderRadius: "0 0 2px 0", zIndex: 2,
                  }}
                />
                <img
                  src="/img-about.jpg"
                  alt="Ewerton Hecsley — desenvolvimento web"
                  loading="lazy"
                  style={{
                    width: "clamp(220px, 32vw, 440px)",
                    borderRadius: "0.75rem",
                    objectFit: "cover",
                    border: "1px solid var(--border-subtle)",
                    boxShadow: "0 0 40px rgba(0,255,136,0.08)",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute", inset: 0, borderRadius: "0.75rem",
                    background: "linear-gradient(135deg, rgba(0,255,136,0.05) 0%, transparent 60%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          </Reveal>

          {/* TEXT */}
          <Reveal delay={0.15}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <div className="section-label">Sobre mim</div>
                <h2 className="section-title" style={{ marginTop: "0.5rem" }}>
                  Quem sou <span>eu?</span>
                </h2>
              </div>

              <p style={{ color: "var(--text-muted)", lineHeight: 1.9, fontSize: "0.975rem" }}>
                Sou <strong style={{ color: "var(--text-primary)" }}>Ewerton Hecsley</strong>,
                estudante de{" "}
                <strong style={{ color: "var(--text-primary)" }}>Engenharia de Software</strong> e
                desenvolvedor Full Stack em transição de carreira.
              </p>

              <p style={{ color: "var(--text-muted)", lineHeight: 1.9, fontSize: "0.975rem" }}>
                No <strong style={{ color: "var(--neon)" }}>front-end</strong>, desenvolvo
                interfaces modernas, responsivas e acessíveis com{" "}
                <strong style={{ color: "var(--text-primary)" }}>React</strong>,{" "}
                <strong style={{ color: "var(--text-primary)" }}>Next.js</strong> e{" "}
                <strong style={{ color: "var(--text-primary)" }}>TypeScript</strong>.
              </p>

              <p style={{ color: "var(--text-muted)", lineHeight: 1.9, fontSize: "0.975rem" }}>
                No <strong style={{ color: "var(--neon)" }}>back-end</strong>, trabalho com{" "}
                <strong style={{ color: "var(--text-primary)" }}>Node.js</strong>,{" "}
                <strong style={{ color: "var(--text-primary)" }}>NestJS</strong> e{" "}
                <strong style={{ color: "var(--text-primary)" }}>Fastify</strong>, aplicando{" "}
                <strong style={{ color: "var(--text-primary)" }}>Clean Architecture</strong> e{" "}
                <strong style={{ color: "var(--text-primary)" }}>DDD</strong>.
              </p>

              <p style={{ color: "var(--text-muted)", lineHeight: 1.9, fontSize: "0.975rem" }}>
                Busco uma oportunidade como{" "}
                <strong style={{ color: "var(--neon)" }}>Desenvolvedor Full Stack</strong>, onde
                possa contribuir com código limpo, arquitetura bem definida e soluções alinhadas
                às necessidades reais do negócio.
              </p>

              {/* Tech highlights grid */}
              <div
                className="tech-highlights-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                  marginTop: "0.5rem",
                }}
              >
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      padding: "0.875rem",
                      borderRadius: "0.5rem",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                      transition: "border-color 0.3s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor = "rgba(0,255,136,0.35)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor = "var(--border-subtle)")
                    }
                  >
                    <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{h.icon}</span>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--text-primary)" }}>
                        {h.label}
                      </p>
                      <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px" }}>
                        {h.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div style={{ paddingTop: "0.5rem" }}>
                <a href="/cv.pdf" download className="btn-neon" id="about-cv-btn">
                  ⬇ Baixar CV
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
