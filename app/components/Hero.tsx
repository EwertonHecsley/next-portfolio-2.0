"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

/* ── Typewriter ─────────────────────────────────────── */
const ROLES = [
  "Desenvolvedor Backend",
  "Desenvolvedor Frontend",
  "Desenvolvedor FullStack",
];

function TypewriterText() {
  type TState = { displayed: string; roleIndex: number; phase: "typing" | "pausing" | "deleting" };
  const [state, setState] = useState<TState>({ displayed: "", roleIndex: 0, phase: "typing" });
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { displayed, roleIndex, phase } = state;

  useEffect(() => {
    const role = ROLES[roleIndex];

    if (phase === "typing") {
      if (displayed.length < role.length) {
        timer.current = setTimeout(
          () => setState((s) => ({ ...s, displayed: role.slice(0, s.displayed.length + 1) })),
          65
        );
      } else {
        timer.current = setTimeout(
          () => setState((s) => ({ ...s, phase: "pausing" })),
          1800
        );
      }
    } else if (phase === "pausing") {
      if (roleIndex === ROLES.length - 1) return;
      timer.current = setTimeout(
        () => setState((s) => ({ ...s, phase: "deleting" })),
        600
      );
    } else {
      if (displayed.length > 0) {
        timer.current = setTimeout(
          () => setState((s) => ({ ...s, displayed: s.displayed.slice(0, -1) })),
          38
        );
      } else {
        timer.current = setTimeout(
          () => setState((s) => ({ ...s, roleIndex: s.roleIndex + 1, phase: "typing", displayed: "" })),
          80
        );
      }
    }

    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [displayed, phase, roleIndex]);

  return (
    <span
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        color: "var(--neon)",
        textShadow: "0 0 24px rgba(0,255,136,0.45)",
      }}
    >
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: "3px",
          height: "1em",
          background: "var(--neon)",
          marginLeft: "3px",
          verticalAlign: "middle",
          boxShadow: "0 0 8px var(--neon)",
          animation: "blink 0.8s step-end infinite",
        }}
      />
    </span>
  );
}

/* ── Matrix rain canvas ─────────────────────────────── */
function MatrixBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const cols = Math.floor(canvas.width / 20);
    const drops: number[] = Array(cols).fill(1);
    const chars = "01アイウエオカキクケコサシスセソ{}[]<>/\\|;:";

    const draw = () => {
      ctx.fillStyle = "rgba(5,10,14,0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0,255,136,0.55)";
      ctx.font = "14px 'JetBrains Mono', monospace";
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * 20, drops[i] * 20);
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 55);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        opacity: 0.045,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

/* ── Hero ───────────────────────────────────────────── */
export function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--bg-primary)",
        paddingTop: "4.5rem", /* header height */
      }}
    >
      <MatrixBg />

      {/* Radial ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          maxWidth: "800px",
          maxHeight: "800px",
          background: "radial-gradient(ellipse, rgba(0,255,136,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content wrapper */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "5rem 1.5rem 6rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* ── TEXT COLUMN ── */}
        <Reveal delay={0.1}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* Label */}
            <div className="section-label">
              <span>Bem-vindo ao meu portfólio</span>
            </div>

            {/* Greeting */}
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", fontWeight: 500 }}>
              👋 Olá, eu sou{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                Ewerton Hecsley
              </span>
            </p>

            {/* Typewriter title */}
            <h1
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "var(--text-primary)",
                minHeight: "3.8rem", /* prevents layout shift */
              }}
            >
              <TypewriterText />
            </h1>

            {/* Description */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.85,
                  maxWidth: "520px",
                  fontSize: "0.975rem",
                }}
              >
                Desenvolvedor Full Stack focado em criar soluções eficientes para
                o mundo real, unindo arquitetura, regras de negócio bem definidas
                e código limpo.
              </p>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.85,
                  maxWidth: "520px",
                  fontSize: "0.975rem",
                }}
              >
                Com mais de 10 anos de experiência na área comercial, aplico forte
                visão de negócio no desenvolvimento de sistemas completos, APIs
                robustas e escaláveis, alinhados a problemas reais do mercado.
              </p>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", paddingTop: "0.5rem" }}>
              <a href="#projects" className="btn-neon-filled" id="hero-cta-projects">
                Ver projetos
              </a>
              <a href="/cv.pdf" download className="btn-neon" id="hero-cta-cv">
                Baixar CV
              </a>
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "1.5rem", paddingTop: "0.25rem" }}>
              {[
                { label: "GitHub ↗", href: "https://github.com/EwertonHecsley" },
                { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/ewerton-hecsley-8a613992/" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.25s, text-shadow 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--neon)";
                    e.currentTarget.style.textShadow = "0 0 10px rgba(0,255,136,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.textShadow = "none";
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── IMAGE COLUMN ── */}
        <Reveal delay={0.3} direction="right">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              width: "100%",
            }}
            className="hero-image-container"
          >
            {/* Spinning ring - flush with photo size */}
            <div
              style={{
                position: "absolute",
                width: "clamp(242px, 33vw, 412px)",
                height: "clamp(242px, 33vw, 412px)",
                borderRadius: "50%",
                border: "1px solid rgba(0,255,136,0.22)",
                animation: "rotateBorder 14s linear infinite",
                zIndex: 0,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-4px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "var(--neon)",
                  boxShadow: "0 0 14px var(--neon), 0 0 28px rgba(0,255,136,0.4)",
                }}
              />
            </div>

            {/* Ambient glow - centered */}
            <div
              style={{
                position: "absolute",
                width: "clamp(200px, 28vw, 360px)",
                height: "clamp(200px, 28vw, 360px)",
                borderRadius: "50%",
                background: "radial-gradient(ellipse, rgba(0,255,136,0.2) 0%, transparent 70%)",
                filter: "blur(24px)",
                zIndex: 0,
              }}
            />

            {/* Photo */}
            <motion.img
              src="/eu.png"
              alt="Ewerton Hecsley — Desenvolvedor Full Stack"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "relative",
                zIndex: 1,
                width: "clamp(230px, 32vw, 400px)",
                height: "clamp(230px, 32vw, 400px)",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid rgba(0,255,136,0.35)",
                boxShadow: "0 0 40px rgba(0,255,136,0.18), 0 0 80px rgba(0,255,136,0.07)",
                display: "block",
                flexShrink: 0,
              }}
            />
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            color: "var(--text-dim)",
            letterSpacing: "0.25em",
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: "1px",
            height: "36px",
            background: "linear-gradient(to bottom, var(--neon), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
