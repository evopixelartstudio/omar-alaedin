import React from "react";
import { Target, Layers, MessageSquare, Award, type LucideIcon } from "lucide-react";

interface DifferentialItem {
  id: string;
  icon: LucideIcon;
  line1: string;
  line2: string;
}

const DIFFERENTIAL_ITEMS: DifferentialItem[] = [
  {
    id: "analise-estrategica",
    icon: Target,
    line1: "Análise estratégica",
    line2: "do seu caso",
  },
  {
    id: "solucoes-personalizadas",
    icon: Layers,
    line1: "Soluções personalizadas",
    line2: "para sua necessidade",
  },
  {
    id: "acompanhamento-proximo",
    icon: MessageSquare,
    line1: "Acompanhamento",
    line2: "próximo e transparente",
  },
  {
    id: "experiencia-credibilidade",
    icon: Award,
    line1: "Experiência e",
    line2: "credibilidade na atuação",
  },
];

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative w-full bg-[#F5F0EB] text-[#30231F] py-14 sm:py-16 lg:py-20 scroll-mt-20 border-t border-[#DED4CA]/50"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        {/* Cabeçalho da Seção */}
        <div className="flex items-center gap-3 mb-10 sm:mb-12">
          <span
            className="w-6 h-[2px] bg-[#C9A586] shrink-0"
            aria-hidden="true"
          />
          <span className="font-sans text-[13px] sm:text-[14px] font-medium text-[#30231F] tracking-normal">
            Por que contar com nossa assessoria?
          </span>
        </div>

        {/* Grade de 4 Diferenciais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-8 sm:gap-y-12 lg:gap-0">
          {DIFFERENTIAL_ITEMS.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === DIFFERENTIAL_ITEMS.length - 1;

            return (
              <div
                key={item.id}
                className="relative flex flex-col items-center justify-center text-center px-4 lg:px-6 group"
              >
                {/* Ícone */}
                <div className="mb-3.5 sm:mb-4 text-[#46352D] group-hover:text-[#C9A586] transition-colors duration-300">
                  <Icon
                    className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] stroke-[1.5]"
                    aria-hidden="true"
                  />
                </div>

                {/* Texto Centralizado Idêntico ao Mockup */}
                <p className="font-sans text-[14px] sm:text-[15px] lg:text-[16px] font-normal sm:font-medium text-[#30231F] leading-[1.45] max-w-[220px]">
                  <span className="block">{item.line1}</span>
                  <span className="block">{item.line2}</span>
                </p>

                {/* Divisória Vertical (desktop) */}
                {!isLast && (
                  <div
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[85px] bg-[#D8CDC3]"
                    aria-hidden="true"
                  />
                )}

                {/* Divisória Vertical no Tablet (coluna ímpar) */}
                {index % 2 === 0 && (
                  <div
                    className="hidden sm:block lg:hidden absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[75px] bg-[#D8CDC3]"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
