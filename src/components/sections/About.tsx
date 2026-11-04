import React from "react";
import Image from "next/image";
import { GraduationCap, ShieldCheck, UserRound, ArrowRight } from "lucide-react";

export function About() {
  const whatsappBioUrl =
    "https://wa.me/5516988206075?text=" +
    encodeURIComponent(
      "Olá, gostaria de conhecer mais sobre a atuação do Dr. Omar Alaedin."
    );

  return (
    <section
      id="sobre"
      className="relative w-full bg-[#211B19] text-[#F5F0EB] scroll-mt-20 overflow-hidden"
    >
      <div className="w-full flex flex-col lg:flex-row min-h-[460px] lg:h-[520px]">
        {/* Coluna Esquerda — Fotografia do Advogado */}
        <div className="relative w-full lg:w-1/2 h-[380px] sm:h-[460px] lg:h-full overflow-hidden select-none reveal-on-scroll">
          <Image
            src="/omar-sobre.png"
            alt="Dr. Omar Alaedin em seu escritório de advocacia"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={95}
            className="object-cover object-[center_20%] lg:object-[center_16%]"
          />

          <div
            className="hidden lg:block absolute inset-y-0 right-0 w-36 bg-gradient-to-r from-transparent to-[#211B19]"
            aria-hidden="true"
          />

          <div
            className="lg:hidden absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#211B19] to-transparent"
            aria-hidden="true"
          />
        </div>

        {/* Coluna Direita — Informações Institucionais */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-20 py-12 lg:py-0 bg-[#211B19] reveal-on-scroll delay-150">
          <div className="max-w-[540px] flex flex-col items-start">
            {/* Identificador Superior */}
            <div className="flex items-center gap-3 mb-3">
              <span
                className="w-6 h-[2px] bg-[#C9A586] shrink-0"
                aria-hidden="true"
              />
              <span className="text-[12px] font-sans font-semibold tracking-[0.2em] uppercase text-[#F5F0EB]/90">
                SOBRE
              </span>
            </div>

            {/* Título Principal */}
            <h2 className="font-serif text-[#F5F0EB] text-[38px] sm:text-[46px] lg:text-[52px] font-medium leading-[1.05] tracking-tight mb-1">
              Omar Alaedin
            </h2>

            {/* Subtítulo */}
            <p className="font-sans text-[14px] text-[#C9A586] font-medium mb-4">
              Advogado e Assessor Jurídico
            </p>

            {/* Texto Institucional */}
            <p className="font-sans text-[14px] sm:text-[15px] text-[#D8CFCA] leading-[1.68] mb-6 font-normal">
              Com sólida formação acadêmica e experiência na área jurídica, Omar
              Alaedin atua com foco na defesa dos direitos de seus clientes,
              aliando conhecimento técnico, visão estratégica e atendimento
              próximo e transparente.
            </p>

            {/* Três Destaques / Badges */}
            <div className="grid grid-cols-3 gap-3 w-full mb-7 pt-1">
              <div className="flex flex-col items-start gap-1.5">
                <GraduationCap className="w-5 h-5 text-[#C9A586]" />
                <span className="font-sans text-[11px] sm:text-[12px] font-medium text-[#F5F0EB]/90 leading-tight">
                  Formação Sólida
                </span>
              </div>

              <div className="flex flex-col items-start gap-1.5">
                <ShieldCheck className="w-5 h-5 text-[#C9A586]" />
                <span className="font-sans text-[11px] sm:text-[12px] font-medium text-[#F5F0EB]/90 leading-tight">
                  Experiência Comprovada
                </span>
              </div>

              <div className="flex flex-col items-start gap-1.5">
                <UserRound className="w-5 h-5 text-[#C9A586]" />
                <span className="font-sans text-[11px] sm:text-[12px] font-medium text-[#F5F0EB]/90 leading-tight">
                  Atendimento Personalizado
                </span>
              </div>
            </div>

            {/* Botão */}
            <a
              href={whatsappBioUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Saiba mais sobre a trajetória de Omar Alaedin"
              className="inline-flex items-center gap-2 text-[#C9A586] hover:text-[#E4C5A7] font-sans text-[14px] font-medium transition-colors group"
            >
              <span className="border-b border-[#C9A586]/50 group-hover:border-[#E4C5A7] pb-0.5 transition-colors">
                Saiba mais sobre minha trajetória
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
