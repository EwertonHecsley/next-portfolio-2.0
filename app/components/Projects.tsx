"use client";

import { Reveal } from "@/components/Reveal";

const projects = [
  {
    title: "Médicos e Voluntários",
    description:
      "Plataforma focada em conectar profissionais da saúde e voluntários, com interface responsiva e foco social.",
    image: "/medicosvoluntario.jpeg",
    link: "https://github.com/EwertonHecsley/react-project-medico-dentista",
  },
  {
    title: "Viva Bem",
    description:
      "Projeto com foco em saúde e bem-estar, abordando conteúdos de saúde masculina e feminina com layout acessível.",
    image: "/vivabem.jpeg",
    link: "https://github.com/EwertonHecsley/html-projeto-viva-bem",
  },
  {
    title:"Projeto Social",
    description:"O projeto simula uma plataforma de projetos sociais, contendo páginas como Doação, Voluntariado, Mentoria e Eventos, seguindo um layout responsivo e baseado em componentes reutilizáveis.",
    image:"/projetoSocial.png",
    link:"https://github.com/EwertonHecsley/react-project-social"
  },
  {
    title:"ReciclaTec",
    description:"Uma Landing Page moderna, responsiva e focada na missão de transformar o mercado de eletrônicos usados, promovendo a reciclagem, compra e venda para um futuro mais sustentável.",
    image:"/reciclaTec.png",
    link:"https://github.com/EwertonHecsley/html-project-recicla-tec"
  },
  {
    title:"API Digital Wallet",
    description:"API para simulação de uma carteira digital, permitindo operações de depósito, saque, transferência entre usuários, autenticação, controle de saldo e geração de extrato financeiro, seguindo boas práticas de arquitetura, DDD e padrões de projeto.",
    image:"/apiWallet.jpg",
    link:"https://github.com/EwertonHecsley/nest-digital-wallet"
  },
  {
    title:"API PDV",
    description: "Um dos meus primeiros projetos quando iniciei meus estudos, com orgulho compartilho para mostrar minha evolução no desenvolvimento. Trata-se de uma API para sistema de caixa de ponto de venda",
    image:"/pdv.jpg",
    link:"https://github.com/EwertonHecsley/node-sistema-pdv"
  }
];

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
            front-end, disponíveis no GitHub.
          </p>
        </Reveal>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <a
                href={project.link}
                target="_blank"
                className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition block"
              >
                {/* IMAGEM */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* TEXTO */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold group-hover:text-blue-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  <span className="inline-block text-sm text-blue-400 font-medium">
                    Ver projeto →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* LINK GERAL */}
        <Reveal className="text-center mt-16">
          <a
            href="https://github.com/EwertonHecsley"
            target="_blank"
            className="inline-block px-6 py-3 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition font-medium"
          >
            Ver mais projetos no GitHub
          </a>
        </Reveal>

      </div>
    </section>
  );
}
