import React from "react";
import Image from "next/image";
import {
  UserRound,
  ShieldCheck,
  MessageSquare,
  Scale,
  ArrowRight,
} from "lucide-react";

const EDITORIAL_DIFFERENTIALS = [
  {
    icon: UserRound,
    title: "Atendimento personalizado",
    description: "Cada cliente recebe atenção exclusiva e soluções sob medida.",
  },
  {
    icon: ShieldCheck,
    title: "Estratégia preventiva",
    description: "Evite problemas e proteja seu patrimônio e seus direitos.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação clara",
    description: "Você sempre informado sobre o andamento do seu caso.",
  },
  {
    icon: Scale,
    title: "Compromisso com resultados",
    description: "Atuação focada na sua tranquilidade e segurança jurídica.",
  },
];

export function DifferentialsEditorial() {
  const whatsappUrl =
    "https://wa.me/5516988206075?text=" +
    encodeURIComponent("Olá, gostaria de falar com um especialista.");

  return (
    <section
      id="diferenciais"
      className="relative w-full scroll-mt-20 overflow-hidden"
    >
      {/* Background Split: Left side #F5F0EB (Cream), Right side #211B19 (Dark) as in Mockup */}
      <div className="absolute inset-0 flex flex-col lg:flex-row pointer-events-none" aria-hidden="true">
        <div className="w-full lg:w-[42%] bg-[#F5F0EB]" />
        <div className="w-full lg:w-[58%] bg-[#211B19]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          {/* Coluna 1 — Conteúdo Editorial Esquerda (sobre fundo #F5F0EB) */}
          <div className="lg:col-span-5 bg-[#F5F0EB] text-[#30231F] flex flex-col justify-center px-6 sm:px-10 lg:px-12 xl:px-16 py-16 lg:py-20 reveal-on-scroll">
            <div className="max-w-md">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-7 h-[2px] bg-[#C9A586] shrink-0"
                  aria-hidden="true"
                />
                <span className="text-[12px] sm:text-[13px] font-sans font-medium text-[#554A45]">
                  Nossos Diferenciais
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-serif text-[#30231F] text-[34px] sm:text-[42px] lg:text-[46px] font-medium leading-[1.12] tracking-tight mb-5">
                <span className="block">Por que escolher a</span>
                <span className="block">nossa assessoria?</span>
              </h2>

              {/* Description */}
              <p className="font-sans text-[15px] sm:text-[16px] text-[#554A45] leading-[1.68] mb-8 font-normal">
                Nosso trabalho é guiado por valores sólidos, experiência e um
                atendimento próximo. Entendemos que cada caso é único e merece uma
                atenção especial.
              </p>

              {/* Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com um Especialista no WhatsApp"
                className="inline-flex items-center justify-center gap-2.5 h-[50px] px-7 rounded-[8px] bg-[#C9A586] hover:bg-[#d8b598] text-[#211B19] font-sans font-semibold text-[15px] transition-all duration-300 shadow-md hover:shadow-lg group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A586]"
              >
                <span>Falar com um Especialista</span>
                <ArrowRight className="w-4 h-4 text-[#211B19] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Coluna 2 e 3 — Fotografia Central e 4 Diferenciais (sobre fundo #211B19) */}
          <div className="lg:col-span-7 bg-[#211B19] text-[#F5F0EB] flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 lg:px-12 py-16 lg:py-20 gap-8 lg:gap-10">
            {/* Fotografia Central do Escritório */}
            <div className="w-full sm:w-1/2 flex justify-center reveal-on-scroll delay-150">
              <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-[16px] overflow-hidden shadow-2xl border border-[#C9A586]/20 group">
                <Image
                  src="/escritorio-diferenciais.png"
                  alt="Ambiente sofisticado de escritório e biblioteca jurídica"
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  quality={92}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Lista dos 4 Diferenciais */}
            <div className="w-full sm:w-1/2 flex flex-col space-y-6 reveal-on-scroll delay-300">
              {EDITORIAL_DIFFERENTIALS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-3.5 group">
                    <div className="shrink-0 p-2 rounded-[8px] bg-[#30231F] border border-[#C9A586]/30 text-[#C9A586] transition-all duration-300 group-hover:border-[#C9A586] group-hover:bg-[#3d2d28]">
                      <Icon className="w-4 h-4 stroke-[1.75]" />
                    </div>
                    <div>
                      <h3 className="font-sans text-[14px] sm:text-[15px] font-semibold text-[#F5F0EB] mb-0.5">
                        {item.title}
                      </h3>
                      <p className="font-sans text-[12px] sm:text-[13px] text-[#D8CFCA]/80 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
