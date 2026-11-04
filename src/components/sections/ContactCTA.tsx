import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function ContactCTA() {
  const whatsappUrl =
    "https://wa.me/5516988206075?text=" +
    encodeURIComponent(
      "Olá, encontrei o site da Omar Alaedin Assessoria Jurídica e gostaria de agendar uma consulta."
    );

  return (
    <section
      id="contato"
      className="relative w-full bg-[#181413] pb-14 sm:pb-18 lg:pb-24 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        {/* Banner Horizontal */}
        <div className="relative w-full bg-[#211B19] rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[250px] lg:h-[270px] xl:h-[280px] border border-[#473A34]/50 reveal-on-scroll">
          {/* Região Esquerda — Fotografia da Justiça (Têmis) */}
          <div className="relative w-full lg:w-[46%] h-[200px] sm:h-[240px] lg:h-full overflow-hidden select-none">
            <Image
              src="/themis-banner.png"
              alt="Estátua clássica em bronze da Justiça com a balança"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              quality={95}
              className="object-cover object-[center_35%] lg:object-[left_center] transition-transform duration-700 ease-out hover:scale-[1.02]"
            />

            <div
              className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-[#211B19]/40 via-65% to-[#211B19]"
              aria-hidden="true"
            />

            <div
              className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#211B19] via-[#211B19]/60 to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Região Direita — Título, Descrição e Botões */}
          <div className="relative z-10 w-full lg:w-[54%] flex flex-col justify-center px-6 sm:px-10 lg:px-12 py-8 lg:py-0">
            <div className="max-w-[500px] flex flex-col items-start">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 mb-2">
                <span
                  className="w-5 h-[2px] bg-[#C9A586] shrink-0"
                  aria-hidden="true"
                />
                <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.18em] uppercase text-[#C9A586]">
                  ESTÁ COM UMA DÚVIDA OU PRECISA DE ORIENTAÇÃO?
                </span>
              </div>

              {/* Título Principal */}
              <h2 className="font-serif text-[#F5F0EB] text-[30px] sm:text-[36px] lg:text-[40px] font-medium leading-[1.12] tracking-tight mb-2.5">
                Vamos conversar?
              </h2>

              {/* Descrição */}
              <p className="font-sans text-[14px] sm:text-[15px] text-[#D8CFCA] leading-relaxed mb-6">
                Entre em contato e agende uma consulta. Será um prazer atender
                você e encontrar a melhor solução para o seu caso.
              </p>

              {/* Botões */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Falar no WhatsApp com Omar Alaedin Assessoria Jurídica"
                  className="inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-[8px] bg-[#C9A586] hover:bg-[#E4C5A7] text-[#211B19] font-sans font-semibold text-[15px] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#C9A586]/20 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A586]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#211B19] transition-transform duration-300 group-hover:scale-110 shrink-0" />
                  <span>Falar no WhatsApp</span>
                </a>

                <Link
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2 text-[#D8CFCA] hover:text-[#C9A586] text-[13px] font-sans font-medium transition-colors group py-2"
                >
                  <span className="border-b border-[#D8CFCA]/30 group-hover:border-[#C9A586] pb-0.5 transition-colors">
                    Outras formas de contato
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
