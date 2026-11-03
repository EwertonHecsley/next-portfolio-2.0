import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck, ExternalLink } from "lucide-react";

const projectLink = "https://github.com/EwertonHecsley/frontend-nm-laser";

const highlights = [
  { value: "3", label: "perfis de acesso" },
  { value: "29+", label: "rotas da aplicação" },
  { value: "Vitest", label: "testes automatizados" },
];

const technologies = ["Next.js 16", "NestJS", "PostgreSQL", "OAuth2", "RBAC"];

export function ProjectsNMHero() {
  return (
    <article className="nm-project-feature">
      <div className="nm-project-feature__layout">
        <div className="nm-project-feature__content">
          <div className="nm-project-feature__badge">
            <BadgeCheck aria-hidden="true" size={15} />
            Primeiro projeto em produção
          </div>

          <p className="nm-project-feature__eyebrow">CASE 01 · NM LASER</p>
          <h2 className="nm-project-feature__title">
            Meu primeiro projeto para um cliente real.
          </h2>
          <p className="nm-project-feature__description">
            Um CRM desenvolvido e colocado em produção para uma clínica.
            Organiza a rotina da equipe, os atendimentos e as vendas — uma
            experiência que marcou minha transição de projetos de estudo para
            software usado no dia a dia.
          </p>

          <div className="nm-project-feature__highlights">
            {highlights.map((highlight) => (
              <div
                className="nm-project-feature__highlight"
                key={highlight.label}
              >
                <p className="nm-project-feature__value">{highlight.value}</p>
                <p className="nm-project-feature__label">{highlight.label}</p>
              </div>
            ))}
          </div>

          <div
            className="nm-project-feature__technologies"
            aria-label="Tecnologias utilizadas"
          >
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <Link
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="nm-project-feature__cta"
          >
            Ver projeto no GitHub
            <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>

        <Link
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir o projeto NM Laser no GitHub"
          className="nm-project-feature__media"
        >
          <div className="nm-project-feature__browser-bar">
            <span />
            <span />
            <span />
            <span className="nm-project-feature__browser-title">
              NM Laser · Visão geral
            </span>
            <ExternalLink aria-hidden="true" size={14} />
          </div>
          <div className="nm-project-feature__image-wrap">
            <Image
              src="/nm-laser/visao-geral-nm-laser.png"
              alt="Dashboard de gestão do sistema NM Laser"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="nm-project-feature__image"
            />
          </div>
          <div className="nm-project-feature__caption">
            <div>
              <p>NM Laser</p>
              <span>CRM de gestão para clínica</span>
            </div>
            <span className="nm-project-feature__status">Em produção</span>
          </div>
        </Link>
      </div>
    </article>
  );
}
