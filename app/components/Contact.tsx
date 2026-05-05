"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "ewerton.martinscomercial@gmail.com",
    href: "mailto:ewerton.martinscomercial@gmail.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "ewerton-hecsley",
    href: "https://www.linkedin.com/in/ewerton-hecsley-8a613992/",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "EwertonHecsley",
    href: "https://github.com/EwertonHecsley",
  },
  {
    icon: "📄",
    label: "Currículo",
    value: "Baixar CV (PDF)",
    href: "/cv.pdf",
  },
];

const services = [
  "Sites institucionais modernos",
  "Landing pages focadas em conversão",
  "Aplicações Web com React e Next.js",
  "APIs REST escaláveis (Node.js / NestJS)",
  "Projetos responsivos e acessíveis",
];

export function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function validate(data: { name: string; email: string; message: string }) {
    const newErrors: Errors = {};
    if (data.name.trim().length < 2) newErrors.name = "Informe um nome válido.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      newErrors.email = "Informe um email válido.";
    if (data.message.trim().length < 10)
      newErrors.message = "A mensagem deve ter pelo menos 10 caracteres.";
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

    const whatsappMessage = `Olá, meu nome é ${name}!\n\n📧 Email: ${email}\n💼 Tipo de projeto: ${project}\n\n📝 Mensagem:\n${message}`;
    const phone = "5583998507503";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;

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
      style={{
        background: "var(--bg-primary)",
        scrollMarginTop: "5rem",
        position: "relative",
        overflow: "hidden",
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
          }}
          className="contact-grid"
        >

          {/* INFO SIDE */}
          <Reveal direction="left">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              <div>
                <div className="section-label">Contato</div>
                <h2 className="section-title mt-2">
                  Vamos <span>trabalhar juntos?</span>
                </h2>
              </div>

              <p style={{ color: "var(--text-muted)", lineHeight: "1.9" }}>
                Vagas Full-time, Freelance ou parcerias. Vamos conversar e tirar
                sua ideia do papel.
              </p>

              {/* Availability badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "9999px",
                  background: "rgba(0,255,136,0.08)",
                  border: "1px solid rgba(0,255,136,0.3)",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--neon)",
                    boxShadow: "0 0 8px var(--neon)",
                    animation: "glowPulse 2s ease-in-out infinite",
                    display: "inline-block",
                  }}
                />
                <span
                  className="font-mono text-sm font-medium"
                  style={{ color: "var(--neon)" }}
                >
                  Disponível para novos projetos
                </span>
              </div>

              {/* Services */}
              <div>
                <h3
                  className="font-mono text-xs uppercase tracking-widest mb-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  Posso te ajudar com:
                </h3>
                <ul className="space-y-2">
                  {services.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span style={{ color: "var(--neon)" }}>▸</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact links */}
              <div className="space-y-3">
                <h3
                  className="font-mono text-xs uppercase tracking-widest mb-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  Onde me encontrar:
                </h3>
                {contactInfo.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      c.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(0,255,136,0.35)";
                      e.currentTarget.style.color = "var(--neon)";
                      e.currentTarget.style.background =
                        "rgba(0,255,136,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                      e.currentTarget.style.color = "var(--text-muted)";
                      e.currentTarget.style.background = "var(--bg-card)";
                    }}
                  >
                    <span>{c.icon}</span>
                    <div>
                      <p
                        className="text-xs font-mono"
                        style={{ color: "var(--text-dim)", marginBottom: "1px" }}
                      >
                        {c.label}
                      </p>
                      <p className="text-sm font-medium">{c.value}</p>
                    </div>
                    <span className="ml-auto text-xs">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* FORM SIDE */}
          <Reveal delay={0.15}>
            <motion.form
              ref={formRef}
              onSubmit={sendToWhatsApp}
              className="card-glass"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <div
                style={{
                  marginBottom: "0.5rem",
                  borderBottom: "1px solid var(--border-subtle)",
                  paddingBottom: "1rem",
                }}
              >
                <h3
                  className="font-bold text-lg"
                  style={{ color: "var(--text-primary)" }}
                >
                  Enviar mensagem
                </h3>
              </div>

              {/* Nome */}
              <div>
                <label
                  className="block text-xs font-mono mb-1.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  nome *
                </label>
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  placeholder="Como devo te chamar?"
                  className={`input-neon ${errors.name ? "error" : ""}`}
                />
                {errors.name && (
                  <p className="text-xs mt-1" style={{ color: "#ff5555" }}>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  className="block text-xs font-mono mb-1.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  placeholder="nome@exemplo.com"
                  className={`input-neon ${errors.email ? "error" : ""}`}
                />
                {errors.email && (
                  <p className="text-xs mt-1" style={{ color: "#ff5555" }}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Tipo de projeto */}
              <div>
                <label
                  className="block text-xs font-mono mb-1.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  tipo de projeto
                </label>
                <select
                  name="project_type"
                  id="contact-project-type"
                  className="input-neon"
                  style={{ cursor: "pointer" }}
                >
                  <option value="" style={{ background: "var(--bg-primary)" }}>
                    Selecione uma opção...
                  </option>
                  <option style={{ background: "var(--bg-primary)" }}>
                    Site institucional
                  </option>
                  <option style={{ background: "var(--bg-primary)" }}>
                    Landing page
                  </option>
                  <option style={{ background: "var(--bg-primary)" }}>
                    Aplicação Web
                  </option>
                  <option style={{ background: "var(--bg-primary)" }}>
                    API Rest
                  </option>
                  <option style={{ background: "var(--bg-primary)" }}>
                    Freelance / Parceria
                  </option>
                  <option style={{ background: "var(--bg-primary)" }}>
                    Contato / Dúvidas
                  </option>
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label
                  className="block text-xs font-mono mb-1.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  mensagem *
                </label>
                <textarea
                  name="message"
                  id="contact-message"
                  rows={4}
                  placeholder="Me conte um pouco sobre sua ideia..."
                  className={`input-neon resize-none ${errors.message ? "error" : ""}`}
                />
                {errors.message && (
                  <p className="text-xs mt-1" style={{ color: "#ff5555" }}>
                    {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                id="contact-submit-btn"
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.01 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className={loading ? "" : "btn-neon-filled"}
                style={{
                  width: "100%",
                  padding: "0.875rem",
                  borderRadius: "0.5rem",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  cursor: loading ? "not-allowed" : "pointer",
                  ...(loading
                    ? {
                        background: "rgba(0,255,136,0.15)",
                        border: "1px solid rgba(0,255,136,0.3)",
                        color: "var(--neon)",
                        animation: "pulse 1.5s ease-in-out infinite",
                      }
                    : {}),
                }}
              >
                {loading ? "⏳ Abrindo WhatsApp..." : "✉ Enviar via WhatsApp"}
              </motion.button>

              {success && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-center font-mono"
                  style={{ color: "var(--neon)" }}
                >
                  ✅ Mensagem pronta! Continue no WhatsApp 👋
                </motion.p>
              )}
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
