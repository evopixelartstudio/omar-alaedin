import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Omar Alaedin Assessoria Jurídica | Soluções Jurídicas com Estratégia",
  description:
    "Atendimento jurídico personalizado para pessoas e empresas, com orientação técnica, atuação estratégica e foco na defesa dos seus direitos.",
  keywords: [
    "advocacia",
    "assessoria jurídica",
    "Omar Alaedin",
    "direito empresarial",
    "direito trabalhista",
    "direito civil",
    "Ribeirão Preto",
  ],
  authors: [{ name: "Omar Alaedin Assessoria Jurídica" }],
  openGraph: {
    title: "Omar Alaedin Assessoria Jurídica",
    description:
      "Soluções jurídicas com estratégia, segurança e compromisso.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <body
        className="font-sans antialiased bg-[#211B19] text-[#F5F0EB]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
