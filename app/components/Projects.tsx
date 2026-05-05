"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const projects = [
  {
    title: "Projeto SOS Chuvas",
    description:
      "A SOS Chuva é uma aplicação fullstack que conecta pessoas afetadas por enchentes a voluntários e recursos de forma rápida e eficiente. A plataforma centraliza pedidos de ajuda, gerenciamento de desaparecidos e coordenação de voluntários com base em localização e urgência. Desenvolvida com React, Vite e Tailwind, oferece dashboards interativos e uma experiência moderna, focada em organização, agilidade e impacto social em situações de emergência.",
    image: "/sos_chuva.png",
    link: "https://github.com/EwertonHecsley/project-SOS-chuva",
    tags: ["React", "Vite", "Tailwind"],
  },
  {
    title: "API SOS Chuvas",
    description:
      "A SOS Chuva API é um backend para coordenação de ajuda em enchentes, conectando voluntários e pessoas afetadas. Desenvolvida com Node.js, Express e PostgreSQL, utiliza JWT, Argon2 e Joi para segurança e validação. Segue o padrão MSC e gerencia usuários, necessidades, voluntários e pedidos de ajuda.",
    image: "/js-API2.png",
    link: "https://github.com/EwertonHecsley/node-backend-sos-chuva",
    tags: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "Médicos e Voluntários",
    description:
      "Plataforma focada em conectar profissionais da saúde e voluntários, com interface responsiva e foco social.",
    image: "/medicosvoluntario.jpeg",
    link: "https://github.com/EwertonHecsley/react-project-medico-dentista",
    tags: ["React", "TypeScript"],
  },
  {
    title: "Database SQL & Modelagem",
    description:
      "O Lanchonete VNW é um projeto de banco de dados relacional desenvolvido em PostgreSQL para gerenciar operações de uma lanchonete, desde clientes e produtos até pedidos e pagamentos. Focado em integridade, organização e consultas eficientes.",
    image: "/diagram.png",
    link: "https://github.com/EwertonHecsley/sql-project-lanchonete-vnw",
    tags: ["PostgreSQL", "SQL", "Modelagem"],
  },
  {
    title: "Gestão de Produtos e Restaurantes",
    description:
      "API para gerenciamento de produtos e restaurantes, com funcionalidades de CRUD, autenticação, controle de estoque e integração com banco de dados, seguindo boas práticas de desenvolvimento.",
    image: "/goomer.png",
    link: "https://github.com/EwertonHecsley/nest-desafio-goomer",
    tags: ["NestJS", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Landing Page Marah Personalizados",
    description:
      "Landing page para empresa de produtos personalizados, com foco em design responsivo e experiência do usuário.",
    image: "/marah.png",
    link: "https://github.com/EwertonHecsley/marah-personalizados-landing",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "ReciclaTec",
    description:
      "Uma Landing Page moderna, responsiva e focada na missão de transformar o mercado de eletrônicos usados, promovendo a reciclagem, compra e venda para um futuro mais sustentável.",
    image: "/reciclaTec.png",
    link: "https://github.com/EwertonHecsley/html-project-recicla-tec",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "API Digital Wallet",
    description:
      "API para simulação de uma carteira digital, permitindo operações de depósito, saque, transferência entre usuários, autenticação, controle de saldo e geração de extrato financeiro, seguindo boas práticas de arquitetura, DDD e padrões de projeto.",
    image: "/apiWallet.jpg",
    link: "https://github.com/EwertonHecsley/nest-digital-wallet",
    tags: ["NestJS", "DDD", "TypeScript"],
  },
  {
    title: "API PDV",
    description:
      "Um dos meus primeiros projetos — API para sistema de ponto de venda, com orgulho compartilhado para mostrar minha evolução no desenvolvimento.",
    image: "/pdv.jpg",
    link: "https://github.com/EwertonHecsley/node-sistema-pdv",
    tags: ["Node.js", "Express"],
  },
];

const MAX_CHARS = 120;

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = project.description.length > MAX_CHARS;
  const displayText =
    expanded || !isLong
      ? project.description
      : project.description.slice(0, MAX_CHARS).trimEnd() + "…";

  return (
    <div
      className="project-card card-glass flex flex-col h-full group"
      style={{ borderRadius: "0.875rem", overflow: "hidden" }}
    >
      {/* IMAGE */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden"
        style={{ flexShrink: 0 }}
      >
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
            style={{ height: "190px" }}
          />
          {/* Overlay on hover */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,255,136,0.08)",
              opacity: 0,
              transition: "opacity 0.3s ease",
            }}
            className="group-hover:opacity-100"
          />
        </div>
      </a>

      {/* CONTENT */}
      <div
        className="flex flex-col flex-1 gap-3"
        style={{ padding: "1.25rem 1.25rem 1.5rem" }}
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono"
              style={{
                fontSize: "0.65rem",
                padding: "0.2rem 0.5rem",
                borderRadius: "0.25rem",
                background: "rgba(0,255,136,0.08)",
                color: "var(--neon)",
                border: "1px solid rgba(0,255,136,0.2)",
                letterSpacing: "0.05em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <h3
            className="font-bold text-base leading-snug transition-colors duration-300"
            style={{ color: "var(--text-primary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--neon)")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-primary)")
            }
          >
            {project.title}
          </h3>
        </a>

        {/* Description */}
        <div className="flex-1">
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {displayText}
          </p>
          {isLong && (
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-1.5 text-xs font-mono font-medium cursor-pointer focus:outline-none transition-all duration-300"
              style={{ color: "var(--neon)" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {expanded ? "Ver menos ↑" : "Ver mais ↓"}
            </button>
          )}
        </div>

        {/* Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-mono font-medium transition-all duration-300 mt-auto"
          style={{ color: "var(--text-muted)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--neon)";
            e.currentTarget.style.gap = "0.5rem";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-muted)";
            e.currentTarget.style.gap = "0.25rem";
          }}
        >
          Ver no GitHub <span>→</span>
        </a>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: "var(--bg-secondary)",
        scrollMarginTop: "5rem",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="section-container">
        {/* Header */}
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div
              className="section-label"
              style={{ justifyContent: "center", display: "inline-flex" }}
            >
              <span>Portfólio</span>
            </div>
            <h2 className="section-title" style={{ marginTop: "0.5rem" }}>
              Projetos em <span>destaque</span>
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
              Projetos desenvolvidos durante meus estudos e prática em
              desenvolvimento full stack, disponíveis no GitHub.
            </p>
          </div>
        </Reveal>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
            alignItems: "stretch",
          }}
        >
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.05} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* GitHub CTA */}
        <Reveal>
          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <a
              id="github-all-projects-btn"
              href="https://github.com/EwertonHecsley"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon"
            >
              Ver mais projetos no GitHub ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
