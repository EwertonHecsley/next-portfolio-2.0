"use client";

import { Reveal } from "@/components/Reveal";

const skillCategories = [
  {
    title: "Front-end",
    icon: "🖥️",
    skills: [
      { name: "HTML5", icon: "🌐", description: "Estruturação semântica de páginas web" },
      { name: "CSS3", icon: "🎨", description: "Layouts responsivos e estilização moderna" },
      { name: "JavaScript", icon: "⚡", description: "Lógica, eventos e consumo de APIs" },
      { name: "React", icon: "⚛️", description: "Componentização e hooks" },
      { name: "Next.js", icon: "🚀", description: "SSR, rotas e performance" },
      { name: "Tailwind CSS", icon: "💨", description: "Estilização rápida e consistente" },
    ],
  },
  {
    title: "Back-end",
    icon: "⚙️",
    skills: [
      { name: "Nest.js", icon: "🧱", description: "Arquitetura escalável com TypeScript e injeção de dependência" },
      { name: "Fastify", icon: "⚡", description: "Framework backend focado em alta performance" },
      { name: "Express", icon: "🚂", description: "Framework minimalista para criação de APIs Node.js" },
    ],
  },
  {
    title: "Banco de Dados",
    icon: "🗃️",
    skills: [
      { name: "SQL", icon: "🗃️", description: "Modelagem relacional e consultas estruturadas" },
      { name: "NoSQL", icon: "🍃", description: "Bancos não relacionais e dados flexíveis" },
    ],
  },
  {
    title: "DevOps & Arquitetura",
    icon: "🔧",
    skills: [
      { name: "Docker", icon: "🐳", description: "Containerização e padronização de ambientes" },
      { name: "Cloud", icon: "☁️", description: "Computação em nuvem e deploy de aplicações" },
      { name: "Design Patterns", icon: "🧩", description: "Padrões de projeto e boas práticas" },
      { name: "Git & GitHub", icon: "🔧", description: "Versionamento e colaboração" },
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--bg-primary)",
        scrollMarginTop: "5rem",
        borderTop: "1px solid var(--border-subtle)",
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
          pointerEvents: "none",
        }}
      />

      <div className="section-container" style={{ position: "relative" }}>
        {/* Header */}
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div
              className="section-label"
              style={{ justifyContent: "center", display: "inline-flex" }}
            >
              <span>Tecnologias</span>
            </div>
            <h2 className="section-title" style={{ marginTop: "0.5rem" }}>
              Minhas <span>Skills</span>
            </h2>
            <p
              style={{
                marginTop: "1rem",
                maxWidth: "560px",
                marginInline: "auto",
                color: "var(--text-muted)",
                lineHeight: 1.8,
                fontSize: "0.975rem",
              }}
            >
              Tecnologias e ferramentas que venho estudando e utilizando no
              desenvolvimento de aplicações modernas, tanto no front-end quanto
              no back-end.
            </p>
          </div>
        </Reveal>

        {/* Categories */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
          {skillCategories.map((category, catIdx) => (
            <div key={category.title}>
              <Reveal delay={catIdx * 0.06}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.5rem",
                    borderBottom: "1px solid var(--border-subtle)",
                    paddingBottom: "0.75rem",
                  }}
                >
                  <span style={{ fontSize: "1.25rem" }}>{category.icon}</span>
                  <h3
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 600,
                      fontSize: "1.05rem",
                      color: "var(--neon)",
                    }}
                  >
                    {category.title}
                  </h3>
                  <div
                    style={{
                      flex: 1,
                      height: "1px",
                      background: "linear-gradient(to right, rgba(0,255,136,0.2), transparent)",
                    }}
                  />
                </div>
              </Reveal>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                  gap: "1rem",
                }}
              >
                {category.skills.map((skill, skillIdx) => (
                  <Reveal key={skill.name} delay={catIdx * 0.05 + skillIdx * 0.07}>
                    <div
                      className="skill-badge group"
                      id={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    >
                      <div
                        style={{ fontSize: "2rem", lineHeight: 1 }}
                        className="transition-transform duration-300 group-hover:scale-110"
                      >
                        {skill.icon}
                      </div>
                      <h4
                        style={{
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          textAlign: "center",
                          color: "var(--text-primary)",
                        }}
                      >
                        {skill.name}
                      </h4>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          textAlign: "center",
                          lineHeight: 1.4,
                          color: "var(--text-muted)",
                        }}
                      >
                        {skill.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
