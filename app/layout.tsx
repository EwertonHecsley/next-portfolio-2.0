import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

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
      <body className="bg-black text-white antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}

