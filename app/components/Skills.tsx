"use client";

import { Reveal } from "@/components/Reveal";

const skills = [
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
  {
    name: "Git & GitHub",
    icon: "🔧",
    description: "Versionamento e colaboração",
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TÍTULO */}
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Minhas Skills
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Tecnologias e ferramentas que venho estudando e utilizando
            no desenvolvimento de projetos front-end.
          </p>
        </Reveal>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
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
                <div className="text-4xl mb-4">
                  {skill.icon}
                </div>

                <h3 className="font-semibold text-slate-900">
                  {skill.name}
                </h3>

                <p className="text-sm text-slate-600 mt-2">
                  {skill.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
