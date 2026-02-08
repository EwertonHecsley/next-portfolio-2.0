"use client";

import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-28 py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* IMAGEM */}
        <Reveal>
          <div className="flex justify-center md:justify-start">
            <img
              src="/img-about.jpg"
              alt="imagem ilustrativa desenvolvimento web"
              className="w-64 md:w-120 rounded-full object-cover"
            />
          </div>
        </Reveal>

        {/* TEXTO */}
        <Reveal>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Sobre mim
            </h2>

            <p className="text-slate-600 leading-relaxed md:leading-8 text-left md:text-justify">
              Sou <strong>Ewerton Hecsley</strong>, estudante de{" "}
              <strong>Engenharia de Software</strong> e desenvolvedor Full Stack
              em transição de carreira.
            </p>

            <p className="text-slate-600 leading-relaxed md:leading-8 text-left md:text-justify">
              No <strong>front-end</strong>, desenvolvo interfaces modernas,
              responsivas e acessíveis utilizando <strong>React</strong>,{" "}
              <strong>Next.js</strong> e <strong>TypeScript</strong>, sempre com atenção à
              usabilidade, performance e consistência visual.
            </p>

            <p className="text-slate-600 leading-relaxed md:leading-8 text-left md:text-justify">
              No <strong>back-end</strong>, trabalho com <strong>Node.js</strong>,{" "}
              <strong>NestJS</strong> e <strong>Fastify</strong>, aplicando
              princípios de <strong>Clean Architecture</strong> e{" "}
              <strong>Domain-Driven Design (DDD)</strong>. Tenho experiência no
              desenvolvimento de <strong>APIs REST</strong>, regras de negócio
              bem definidas, autenticação e integração entre serviços.
            </p>

            <p className="text-slate-600 leading-relaxed md:leading-8 text-left md:text-justify">
              Possuo experiência com bancos de dados{" "}
              <strong>relacionais</strong> (PostgreSQL, MySQL) e{" "}
              <strong>não relacionais</strong> (MongoDB, Redis), além do uso de{" "}
              <strong>Docker</strong> para padronização de ambientes e apoio no
              processo de deploy e escalabilidade das aplicações.
            </p>

            <p className="text-slate-600 leading-relaxed md:leading-8 text-left md:text-justify">
              Atualmente busco uma oportunidade como{" "}
              <strong>Desenvolvedor Full Stack</strong>, onde eu possa contribuir
              com código limpo, arquitetura bem definida e soluções alinhadas às
              necessidades reais do produto e do negócio.
            </p>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
            >
              ⬇ Baixar CV
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
