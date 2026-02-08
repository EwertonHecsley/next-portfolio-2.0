"use client";

import { Reveal } from "@/components/Reveal";

const skillCategories = [
  {
    title: "Front-end",
    skills: [
      {
        name: "HTML5",
        icon: "🌐",
        description: "Estruturação semântica de páginas web",
      },
      {
        name: "CSS3",
        icon: "🎨",
        description: "Layouts responsivos e estilização moderna",
      },
      {
        name: "JavaScript",
        icon: "⚡",
        description: "Lógica, eventos e consumo de APIs",
      },
      {
        name: "React",
        icon: "⚛️",
        description: "Componentização e hooks",
      },
      {
        name: "Next.js",
        icon: "🚀",
        description: "SSR, rotas e performance",
      },
      {
        name: "Tailwind CSS",
        icon: "💨",
        description: "Estilização rápida e consistente",
      },
    ],
  },
  {
    title: "Back-end",
    skills: [
      {
        name: "Nest.js",
        icon: "🧱",
        description:
          "Arquitetura escalável com TypeScript e injeção de dependência",
      },
      {
        name: "Fastify",
        icon: "⚡",
        description: "Framework backend focado em alta performance",
      },
      {
        name: "Express",
        icon: "🚂",
        description: "Framework minimalista para criação de APIs Node.js",
      },
    ],
  },
  {
    title: "Banco de Dados",
    skills: [
      {
        name: "SQL",
        icon: "🗃️",
        description: "Modelagem relacional e consultas estruturadas",
      },
      {
        name: "NoSQL",
        icon: "🍃",
        description: "Bancos não relacionais e dados flexíveis",
      },
    ],
  },
  {
    title: "DevOps & Arquitetura",
    skills: [
      {
        name: "Docker",
        icon: "🐳",
        description: "Containerização e padronização de ambientes",
      },
      {
        name: "Cloud",
        icon: "☁️",
        description: "Conceitos de computação em nuvem e deploy de aplicações",
      },
      {
        name: "Design Patterns",
        icon: "🧩",
        description: "Padrões de projeto e boas práticas de arquitetura",
      },
      {
        name: "Git & GitHub",
        icon: "🔧",
        description: "Versionamento e colaboração",
      },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* TÍTULO */}
        <Reveal className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Minhas Skills
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Tecnologias e ferramentas que venho estudando e utilizando no
            desenvolvimento de aplicações modernas, tanto no front-end quanto
            no back-end.
          </p>
        </Reveal>

        {/* CATEGORIAS */}
        <div className="space-y-20">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <Reveal>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-10 text-center md:text-left">
                  {category.title}
                </h3>
              </Reveal>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {category.skills.map((skill) => (
                  <Reveal key={skill.name}>
                    <div
                      className="
                        bg-slate-50
                        border border-slate-200
                        rounded-2xl p-6
                        text-center
                        hover:shadow-lg
                        transition
                      "
                    >
                      <div className="text-4xl mb-4">{skill.icon}</div>

                      <h4 className="font-semibold text-slate-900">
                        {skill.name}
                      </h4>

                      <p className="text-sm text-slate-600 mt-2">
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
