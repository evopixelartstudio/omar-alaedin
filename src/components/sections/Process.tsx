import React from "react";
import { ChevronRight } from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const STEPS: StepItem[] = [
  {
    number: "01",
    title: "Primeiro contato",
    description:
      "Você fala conosco e explica sua necessidade. Tiramos suas dúvidas e entendemos seu caso.",
  },
  {
    number: "02",
    title: "Análise do caso",
    description:
      "Estudamos sua situação com atenção avaliando as melhores estratégias jurídicas.",
  },
  {
    number: "03",
    title: "Orientação e acompanhamento",
    description:
      "Você recebe um plano de ação claro e conta com nosso suporte em todas as etapas.",
  },
];

export function Process() {
  return (
    <section
      id="processo"
      className="relative w-full bg-[#F5F0EB] text-[#30231F] py-20 sm:py-24 lg:py-28 scroll-mt-20 overflow-hidden border-b border-[#DED4CA]/50"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Cabeçalho */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="w-7 h-[2px] bg-[#C9A586] shrink-0"
              aria-hidden="true"
            />
            <h2 className="text-[13px] sm:text-[14px] font-sans font-semibold text-[#30231F] tracking-normal">
              Como funciona nossa assessoria?
            </h2>
          </div>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#554A45] max-w-xl font-normal">
            Um processo claro, direto e eficiente para você ter total segurança.
          </p>
        </div>

        {/* Três Etapas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative">
          {STEPS.map((step, index) => {
            const isLast = index === STEPS.length - 1;
            return (
              <div
                key={step.number}
                className="relative flex flex-col items-start pr-4 group"
              >
                {/* Número / Badge */}
                <div className="w-11 h-11 rounded-full bg-[#E4C5A7]/30 border border-[#C9A586]/60 flex items-center justify-center font-sans font-semibold text-[15px] text-[#30231F] mb-6 group-hover:bg-[#C9A586] group-hover:text-[#211B19] transition-colors duration-300">
                  {step.number}
                </div>

                {/* Título */}
                <h3 className="font-serif text-[22px] sm:text-[24px] font-medium text-[#30231F] mb-3 leading-snug">
                  {step.title}
                </h3>

                {/* Descrição */}
                <p className="font-sans text-[14px] sm:text-[15px] text-[#554A45] leading-[1.65]">
                  {step.description}
                </p>

                {/* Indicador de fluxo / Seta para o próximo passo no Desktop */}
                {!isLast && (
                  <div
                    className="hidden md:flex absolute -right-4 top-14 text-[#C9A586]/60 items-center justify-center pointer-events-none"
                    aria-hidden="true"
                  >
                    <ChevronRight className="w-6 h-6 stroke-[1.5]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
