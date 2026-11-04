import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Áreas de Atuação", href: "#areas-de-atuacao" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Processo", href: "#processo" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl =
    "https://wa.me/5516988206075?text=" +
    encodeURIComponent(
      "Olá, encontrei o site da Omar Alaedin Assessoria Jurídica e gostaria de falar com a equipe."
    );

  return (
    <footer className="relative w-full bg-[#181413] text-[#F5F0EB] pt-16 sm:pt-20 pb-8 sm:pb-10 border-t border-[#473A34]/50 overflow-hidden">
      {/* Monograma Watermark em Marca d'Água no fundo à direita */}
      <div
        className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 w-[340px] h-[340px] opacity-[0.05] select-none"
        aria-hidden="true"
      >
        <Image
          src="/logo-monograma.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        {/* Grade de 4 Colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 reveal-on-scroll">
          {/* Coluna 1 — Logotipo em Bege e Antracite */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link
              href="#inicio"
              className="relative block h-[76px] sm:h-[90px] w-[140px] sm:w-[165px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A586]"
              aria-label="Omar Alaedin Assessoria Jurídica - Início"
            >
              <Image
                src="/logo-footer.png"
                alt="Omar Alaedin Assessoria Jurídica"
                fill
                sizes="(max-width: 640px) 140px, 165px"
                className="object-contain object-left"
              />
            </Link>
          </div>

          {/* Coluna 2 — Navegação */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-[15px] font-semibold text-[#F5F0EB] mb-4 tracking-tight">
              Navegação
            </h3>

            <nav
              className="flex flex-col space-y-2.5"
              aria-label="Navegação do rodapé"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans text-[13px] sm:text-[14px] text-[#BDB2AC] hover:text-[#C9A586] transition-colors duration-200 inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A586]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Coluna 3 — Contato */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="font-sans text-[15px] font-semibold text-[#F5F0EB] mb-4 tracking-tight">
              Contato
            </h3>

            <div className="flex flex-col space-y-3 font-sans text-[13px] sm:text-[14px] text-[#BDB2AC]">
              {/* Telefone / WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telefone (16) 98820-6075"
                className="inline-flex items-center gap-2.5 text-[#BDB2AC] hover:text-[#F5F0EB] transition-colors duration-200 group"
              >
                <Phone className="w-4 h-4 text-[#C9A586] shrink-0" />
                <span>(16) 98820-6075</span>
              </a>

              {/* E-mail */}
              <a
                href="mailto:contato@omaralaedin.adv.br"
                className="inline-flex items-center gap-2.5 text-[#BDB2AC] hover:text-[#F5F0EB] transition-colors duration-200 group"
                aria-label="Enviar e-mail para contato@omaralaedin.adv.br"
              >
                <Mail className="w-4 h-4 text-[#C9A586] shrink-0" />
                <span>contato@omaralaedin.adv.br</span>
              </a>

              {/* Localização */}
              <div className="inline-flex items-start gap-2.5 text-[#BDB2AC]">
                <MapPin className="w-4 h-4 text-[#C9A586] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#F5F0EB]/90">Ribeirão Preto – SP</p>
                  <p className="text-[12px] text-[#BDB2AC]/75">
                    Atendimento presencial e online
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 4 — Redes Sociais */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-[15px] font-semibold text-[#F5F0EB] mb-4 tracking-tight">
              Redes Sociais
            </h3>

            <div className="flex items-center gap-3 text-[#C9A586]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Omar Alaedin"
                className="text-[#C9A586] hover:text-[#E4C5A7] transition-colors duration-200 p-1 -ml-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A586]"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Omar Alaedin"
                className="text-[#C9A586] hover:text-[#E4C5A7] transition-colors duration-200 p-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A586]"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divisória Inferior */}
        <div className="w-full h-[1px] bg-[#473A34]/60 mb-6" aria-hidden="true" />

        {/* Barra Inferior com Copyright, OAB e Crédito EvoPixel */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 font-sans text-[11px] sm:text-[12px] text-[#8C7E77]">
          <p className="text-center sm:text-left">
            © {currentYear} Omar Alaedin Assessoria Jurídica. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4 text-center sm:text-right">
            <span>OAB/SP (a confirmar)</span>
            <span>•</span>
            <span>
              Desenvolvido por{" "}
              <a
                href="https://evopixel.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A586] hover:text-[#E4C5A7] font-medium transition-colors duration-200 hover:underline"
              >
                EvoPixel
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
