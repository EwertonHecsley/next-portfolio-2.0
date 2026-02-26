import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import {SpeedInsights} from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Ewerton Hecsley | Dev",
  description: "Portfólio de Ewerton Hecsley — Desenvolvedor Front End",
  icons: {
    icon: [
      { url: "/ts-logo.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white antialiased">npm i @vercel/speed-insights
        <Header />
        {children}
        <SpeedInsights/>
      </body>
    </html>
  );
}

