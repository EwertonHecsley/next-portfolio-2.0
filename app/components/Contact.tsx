"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function validate(data: {
    name: string;
    email: string;
    message: string;
  }) {
    const newErrors: Errors = {};

    if (data.name.trim().length < 2) {
      newErrors.name = "Informe um nome válido.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Informe um email válido.";
    }

    if (data.message.trim().length < 10) {
      newErrors.message = "A mensagem deve ter pelo menos 10 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function sendToWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(false);

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const project = String(formData.get("project_type") || "");
    const message = String(formData.get("message") || "").trim();

    if (!validate({ name, email, message })) return;

    setLoading(true);

    const whatsappMessage = `
Olá, meu nome é ${name}!

📧 Email: ${email}
💼 Tipo de projeto: ${project}

📝 Mensagem:
${message}
    `;

    const phone = "5583998507503";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setLoading(false);
      setSuccess(true);
      formRef.current?.reset();
      setErrors({});
    }, 800);
  }

  return (
    <section
      id="contact"
      className="py-28 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* TEXTO / INFO */}
        <Reveal>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Transforme sua ideia em <br />
              <span className="text-blue-400">realidade digital.</span>
            </h2>

            <p className="text-gray-400 max-w-xl">
              Vagas Full-time, Freelance ou parcerias. Vamos conversar e tirar sua
              ideia do papel.
            </p>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                Disponibilidade
              </h3>
              <p className="text-gray-300">
                Disponível para Freelance & Projetos
              </p>
              <p className="text-gray-400 text-sm">
                Ajudo a construir sites performáticos e interfaces acessíveis.
              </p>
            </div>
                        <div className="space-y-4 text-gray-300">
              <p>✔ Sites institucionais modernos</p>
              <p>✔ Landing pages focadas em conversão</p>
              <p>✔ Aplicações Web com React e Next.js</p>
              <p>✔ Projetos responsivos e acessíveis</p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                Email
              </h3>
              <a
                href="mailto:thiagosimas1@gmail.com"
                className="text-blue-400 hover:underline"
              >
                ewerton.martinscomercial@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                Social
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="https://www.linkedin.com/in/ewerton-hecsley-8a613992/"
                    target="_blank"
                    className="hover:text-blue-400 transition"
                  >
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/EwertonHecsley"
                    target="_blank"
                    className="hover:text-blue-400 transition"
                  >
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a href="/cv.pdf" target="_blank" className="hover:text-blue-400 transition">
                    CV ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        {/* FORMULÁRIO */}
        <Reveal>
          <form
            ref={formRef}
            onSubmit={sendToWhatsApp}
            className="bg-slate-900/60 backdrop-blur border border-slate-800 rounded-2xl p-8 space-y-6"
          >
            {/* Nome */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Seu nome
              </label>
              <input
                type="text"
                name="name"
                placeholder="Como devo te chamar?"
                className={`w-full px-4 py-3 rounded-lg bg-slate-950 border text-white focus:outline-none
                  ${
                    errors.name
                      ? "border-red-500"
                      : "border-slate-800 focus:border-blue-500"
                  }
                `}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Seu email
              </label>
              <input
                type="email"
                name="email"
                placeholder="nome@exemplo.com"
                className={`w-full px-4 py-3 rounded-lg bg-slate-950 border text-white focus:outline-none
                  ${
                    errors.email
                      ? "border-red-500"
                      : "border-slate-800 focus:border-blue-500"
                  }
                `}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Tipo de projeto */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Tipo de projeto
              </label>
              <select
                name="project_type"
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="">Selecione uma opção...</option>
                <option>Site institucional</option>
                <option>Landing page</option>
                <option>Aplicação Web</option>
                <option>API Rest</option>
                <option>Freelance / Parceria</option>
                <option>Contato / Dúvidas</option>
              </select>
            </div>

            {/* Mensagem */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Mensagem
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Me conte um pouco sobre sua ideia..."
                className={`w-full px-4 py-3 rounded-lg bg-slate-950 border text-white resize-none focus:outline-none
                  ${
                    errors.message
                      ? "border-red-500"
                      : "border-slate-800 focus:border-blue-500"
                  }
                `}
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-medium transition
                ${
                  loading
                    ? "bg-blue-500/60 cursor-not-allowed animate-pulse"
                    : "bg-blue-600 hover:bg-blue-700"
                }
              `}
            >
              {loading ? "Abrindo WhatsApp..." : "Enviar mensagem"}
            </button>

            {success && (
              <p className="text-green-400 text-sm">
                ✅ Mensagem enviada! Continue no WhatsApp 👋
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
