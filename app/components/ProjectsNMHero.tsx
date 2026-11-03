"use client";

import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ExternalLink,
  X,
} from "lucide-react";

const projectLink = "https://github.com/EwertonHecsley/frontend-nm-laser";

const projectImages = [
  {
    src: "/nm-laser/visao-geral-nm-laser.png",
    alt: "Dashboard de visão geral do sistema NM Laser",
    label: "Visão geral",
  },
  {
    src: "/nm-laser/vendas-nm-laser.png",
    alt: "Tela de vendas do sistema NM Laser",
    label: "Vendas",
  },
  {
    src: "/nm-laser/login-nm-laser.png",
    alt: "Tela de login do sistema NM Laser",
    label: "Login",
  },
];

const highlights = [
  { value: "3", label: "perfis de acesso" },
  { value: "29+", label: "rotas da aplicação" },
  { value: "Vitest", label: "testes automatizados" },
];

const technologies = ["Next.js 16", "NestJS", "PostgreSQL", "OAuth2", "RBAC"];

export function ProjectsNMHero() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!galleryOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setGalleryOpen(false);
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveImage((current) => (current + 1) % projectImages.length);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveImage(
          (current) =>
            (current - 1 + projectImages.length) % projectImages.length,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [galleryOpen]);

  function showPreviousImage() {
    setActiveImage(
      (current) => (current - 1 + projectImages.length) % projectImages.length,
    );
  }

  function showNextImage() {
    setActiveImage((current) => (current + 1) % projectImages.length);
  }

  return (
    <>
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
                  <p className="nm-project-feature__label">
                    {highlight.label}
                  </p>
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

          <div className="nm-project-feature__media">
            <div className="nm-project-feature__browser-bar">
              <span />
              <span />
              <span />
              <span className="nm-project-feature__browser-title">
                NM Laser · Visão geral
              </span>
              <ExternalLink aria-hidden="true" size={14} />
            </div>
            <button
              type="button"
              className="nm-project-feature__image-trigger"
              onClick={() => {
                setActiveImage(0);
                setGalleryOpen(true);
              }}
              aria-label="Abrir galeria de imagens do NM Laser"
            >
              <div className="nm-project-feature__image-wrap">
                <Image
                  src={projectImages[0].src}
                  alt={projectImages[0].alt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="nm-project-feature__image"
                />
              </div>
              <span className="nm-project-feature__image-hint">
                Clique para ver as telas
              </span>
            </button>
            <div className="nm-project-feature__caption">
              <div>
                <p>NM Laser</p>
                <span>CRM de gestão para clínica</span>
              </div>
              <span className="nm-project-feature__status">Em produção</span>
            </div>
          </div>
        </div>
      </article>

      {galleryOpen &&
        createPortal(
          <div
            className="nm-project-gallery"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setGalleryOpen(false);
              }
            }}
          >
            <section
              className="nm-project-gallery__dialog"
              role="dialog"
              aria-modal="true"
              aria-label="Galeria de imagens do NM Laser"
              aria-describedby="nm-project-gallery-caption"
            >
              <header className="nm-project-gallery__header">
                <div>
                  <p>NM Laser</p>
                  <span id="nm-project-gallery-caption">
                    {projectImages[activeImage].label} · {activeImage + 1} de{" "}
                    {projectImages.length}
                  </span>
                </div>
                <button
                  type="button"
                  className="nm-project-gallery__close"
                  onClick={() => setGalleryOpen(false)}
                  aria-label="Fechar galeria"
                >
                  <X aria-hidden="true" size={22} />
                </button>
              </header>

              <div className="nm-project-gallery__stage">
                <Image
                  src={projectImages[activeImage].src}
                  alt={projectImages[activeImage].alt}
                  fill
                  sizes="(min-width: 1200px) 1100px, 94vw"
                  className="nm-project-gallery__image"
                />
                <span className="nm-project-gallery__counter" aria-hidden="true">
                  {activeImage + 1} / {projectImages.length}
                </span>
                <button
                  type="button"
                  className="nm-project-gallery__arrow nm-project-gallery__arrow--previous"
                  onClick={showPreviousImage}
                  aria-label="Imagem anterior"
                >
                  <ArrowLeft aria-hidden="true" size={22} />
                </button>
                <button
                  type="button"
                  className="nm-project-gallery__arrow nm-project-gallery__arrow--next"
                  onClick={showNextImage}
                  aria-label="Próxima imagem"
                >
                  <ArrowRight aria-hidden="true" size={22} />
                </button>
              </div>

              <nav
                className="nm-project-gallery__thumbnails"
                aria-label="Selecionar imagem"
              >
                {projectImages.map((image, index) => (
                  <button
                    type="button"
                    key={image.src}
                    className={`nm-project-gallery__thumbnail${index === activeImage ? " is-active" : ""}`}
                    onClick={() => setActiveImage(index)}
                    aria-label={`Ver imagem: ${image.label}`}
                    aria-current={index === activeImage ? "true" : undefined}
                  >
                    <span>{image.label}</span>
                  </button>
                ))}
              </nav>
            </section>
          </div>,
          document.body,
        )}
    </>
  );
}
