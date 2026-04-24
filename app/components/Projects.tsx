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
  },
  {
    title: "API SOS Chuvas",
    description:
      "A SOS Chuva API é um backend para coordenação de ajuda em enchentes, conectando voluntários e pessoas afetadas. Desenvolvida com Node.js, Express e PostgreSQL, utiliza JWT, Argon2 e Joi para segurança e validação. Segue o padrão MSC e gerencia usuários, necessidades, voluntários e pedidos de ajuda.",
    image: "/js-API2.png",
    link: "https://github.com/EwertonHecsley/node-backend-sos-chuva",
  },
  {
    title: "Médicos e Voluntários",
    description:
      "Plataforma focada em conectar profissionais da saúde e voluntários, com interface responsiva e foco social.",
    image: "/medicosvoluntario.jpeg",
    link: "https://github.com/EwertonHecsley/react-project-medico-dentista",
  },
  {
    title: "Database SQL & Modelagem de Dados",
    description:
      "O Lanchonete VNW é um projeto de banco de dados relacional desenvolvido em PostgreSQL para gerenciar operações de uma lanchonete, desde clientes e produtos até pedidos e pagamentos. Focado em integridade, organização e consultas eficientes, substitui processos manuais por uma estrutura robusta com regras de negócio, relacionamentos e suporte a análises e relatórios.",
    image: "/diagram.png",
    link: "https://github.com/EwertonHecsley/sql-project-lanchonete-vnw",
  },
  {
    title: "Gestão de Produtos e Restaurantes",
    description:
      "API para gerenciamento de produtos e restaurantes, com funcionalidades de CRUD, autenticação, controle de estoque e integração com banco de dados, seguindo boas práticas de desenvolvimento.",
    image: "/goomer.png",
    link: "https://github.com/EwertonHecsley/nest-desafio-goomer",
  },
  {
    title: "Landing Page para Marah Personalizados",
    description:
      "Landing page para empresa de produtos personalizados, com foco em design responsivo e experiência do usuário.",
    image: "/marah.png",
    link: "https://github.com/EwertonHecsley/marah-personalizados-landing",
  },
  {
    title: "ReciclaTec",
    description:
      "Uma Landing Page moderna, responsiva e focada na missão de transformar o mercado de eletrônicos usados, promovendo a reciclagem, compra e venda para um futuro mais sustentável.",
    image: "/reciclaTec.png",
    link: "https://github.com/EwertonHecsley/html-project-recicla-tec",
  },
  {
    title: "API Digital Wallet",
    description:
      "API para simulação de uma carteira digital, permitindo operações de depósito, saque, transferência entre usuários, autenticação, controle de saldo e geração de extrato financeiro, seguindo boas práticas de arquitetura, DDD e padrões de projeto.",
    image: "/apiWallet.jpg",
    link: "https://github.com/EwertonHecsley/nest-digital-wallet",
  },
  {
    title: "API PDV",
    description:
      "Um dos meus primeiros projetos quando iniciei meus estudos, com orgulho compartilho para mostrar minha evolução no desenvolvimento. Trata-se de uma API para sistema de caixa de ponto de venda",
    image: "/pdv.jpg",
    link: "https://github.com/EwertonHecsley/node-sistema-pdv",
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
    <div className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition flex flex-col h-full">
      {/* IMAGEM */}
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
      </a>

      {/* CONTEÚDO */}
      <div className="p-6 flex flex-col flex-1 gap-3">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <h3 className="text-xl font-semibold group-hover:text-blue-400 transition">
            {project.title}
          </h3>
        </a>

        {/* DESCRIÇÃO COM TOGGLE */}
        <div className="flex-1">
          <p className="text-sm text-gray-400 leading-relaxed">{displayText}</p>
          {isLong && (
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-1 text-xs text-blue-400 hover:text-blue-300 transition font-medium cursor-pointer focus:outline-none"
            >
              {expanded ? "Ver menos ↑" : "Ver mais ↓"}
            </button>
          )}
        </div>

        {/* LINK */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm text-blue-400 font-medium hover:text-blue-300 transition mt-auto"
        >
          Ver projeto →
        </a>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-28 bg-slate-900 text-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* TÍTULO */}
        <Reveal className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Projetos em destaque
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Alguns projetos desenvolvidos durante meus estudos e prática em
            desenvolvimento full stack, disponíveis no GitHub.
          </p>
        </Reveal>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => (
            <Reveal key={project.title} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* LINK GERAL */}
        <Reveal className="text-center mt-16">
          <a
            href="https://github.com/EwertonHecsley"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition font-medium"
          >
            Ver mais projetos no GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
