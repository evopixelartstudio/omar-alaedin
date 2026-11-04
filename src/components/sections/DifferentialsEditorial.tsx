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
      className="relative w-full bg-[#211B19] text-[#F5F0EB] py-20 sm:py-24 lg:py-28 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Coluna 1 — Conteúdo Editorial Esquerda (4 colunas) */}
          <div className="lg:col-span-4 flex flex-col items-start justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span
                className="w-7 h-[2px] bg-[#C9A586] shrink-0"
                aria-hidden="true"
              />
              <span className="text-[12px] sm:text-[13px] font-sans font-medium text-[#F5F0EB]/90">
                Nossos Diferenciais
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-[#F5F0EB] text-[34px] sm:text-[42px] lg:text-[46px] font-medium leading-[1.12] tracking-tight mb-5">
              <span className="block">Por que escolher a</span>
              <span className="block">nossa assessoria?</span>
            </h2>

            {/* Description */}
            <p className="font-sans text-[15px] sm:text-[16px] text-[#D8CFCA] leading-[1.68] mb-8 font-normal">
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

          {/* Coluna 2 — Fotografia do Escritório Central (4 colunas) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-[18px] overflow-hidden shadow-2xl border border-[#C9A586]/25 group">
              <Image
                src="/escritorio-diferenciais.png"
                alt="Ambiente sofisticado de escritório e biblioteca jurídica"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                quality={92}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Coluna 3 — Lista de 4 Diferenciais Direita (4 colunas) */}
          <div className="lg:col-span-4 flex flex-col space-y-6 sm:space-y-7">
            {EDITORIAL_DIFFERENTIALS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="shrink-0 p-2.5 rounded-[8px] bg-[#30231F] border border-[#C9A586]/30 text-[#C9A586] transition-all duration-300 group-hover:border-[#C9A586] group-hover:bg-[#3d2d28]">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <div>
                    <h3 className="font-sans text-[15px] sm:text-[16px] font-semibold text-[#F5F0EB] mb-1">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[13px] sm:text-[14px] text-[#D8CFCA]/80 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
