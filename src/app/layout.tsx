import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pagina de perfil | Carlos Gomes",
  description: "Generado con Next.js y TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
