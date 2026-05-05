import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Ewerton Hecsley | Full Stack Developer",
  description:
    "Portfólio de Ewerton Hecsley — Desenvolvedor Full Stack focado em React, Next.js e Node.js. Soluções modernas, arquitetura limpa e código de alto nível.",
  keywords: [
    "desenvolvedor full stack",
    "react",
    "next.js",
    "node.js",
    "typescript",
    "portfólio",
  ],
  authors: [{ name: "Ewerton Hecsley" }],
  openGraph: {
    title: "Ewerton Hecsley | Full Stack Developer",
    description:
      "Desenvolvedor Full Stack focado em criar soluções eficientes com React, Next.js e Node.js.",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{
          background: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        <Header />
        <main>{children}</main>
        <SpeedInsights />
      </body>
    </html>
  );
}
