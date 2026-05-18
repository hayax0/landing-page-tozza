import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

// Fonte premium para títulos — geométrica e sofisticada
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Fonte neutra para corpo de texto
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tozza Boutique | Estética Pet de Alto Padrão — Tijuca, RJ",
  description:
    "Banho especial, tosa de raça, tosa higiênica e hidratação profissional para o seu pet na Tijuca, Rio de Janeiro. Agende agora pelo WhatsApp.",
  icons: {
    icon: [
      { url: "/iconpetshop.png", type: "image/png" },
    ],
    apple: [
      { url: "/iconpetshop.png" },
    ],
    shortcut: ["/iconpetshop.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Adicionamos o translate="no" aqui na html para bloquear o Google Tradutor
    <html
      lang="pt-br"
      translate="no"
      suppressHydrationWarning
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      {/* ...e mantemos o suppressHydrationWarning na body também! */}
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
