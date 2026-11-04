import React from "react";
import {
  BriefcaseBusiness,
  Building2,
  FileText,
  Landmark,
  ArrowRight,
} from "lucide-react";
import {
  PracticeAreaCard,
  type PracticeArea,
} from "@/components/ui/PracticeAreaCard";

const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "direito-trabalhista",
    line1: "Direito",
    line2: "Trabalhista",
    imageSrc: "/omar_area_trabalhista.png",
    icon: BriefcaseBusiness,
    altText: "Martelo de juiz representando Direito Trabalhista",
    customPosition: "object-[right_center]",
    whatsappMessage:
      "Olá, gostaria de orientação jurídica na área de Direito Trabalhista.",
  },
  {
    id: "direito-empresarial",
    line1: "Direito",
    line2: "Empresarial",
    imageSrc: "/omar_area_empresarial.png",
    icon: Building2,
    altText: "Contrato empresarial e caneta representando Direito Empresarial",
    customPosition: "object-[right_center]",
    whatsappMessage:
      "Olá, gostaria de orientação jurídica na área de Direito Empresarial.",
  },
  {
    id: "direito-civil-contratos",
    line1: "Direito",
    line2: "Civil e Contratos",
    imageSrc: "/omar_area_civil_contratos.png",
    icon: FileText,
    altText: "Assinatura de documentos jurídicos e Direito Civil",
    customPosition: "object-[right_center]",
    whatsappMessage:
      "Olá, gostaria de orientação jurídica na área de Direito Civil e Contratos.",
  },
  {
    id: "direito-administrativo",
    line1: "Direito",
    line2: "Administrativo",
    imageSrc: "/omar_area_administrativo.png",
    icon: Landmark,
    altText: "Colunas de tribunal e Direito Administrativo",
    customPosition: "object-[right_center]",
    whatsappMessage:
      "Olá, gostaria de orientação jurídica na área de Direito Administrativo.",
  },
];

export function PracticeAreas() {
  const whatsappConsultUrl =
    "https://wa.me/5516988206075?text=" +
    encodeURIComponent("Olá, gostaria de obter orientação jurídica.");

  return (
    <section
      id="areas-de-atuacao"
      className="relative w-full bg-[#F5F0EB] text-[#30231F] py-20 sm:py-24 lg:py-28 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-14">
          {/* Coluna Esquerda — Conteúdo Editorial */}
          <div className="w-full lg:w-[42%] max-w-xl flex flex-col justify-center reveal-on-scroll">
            {/* Identificador Superior */}
            <div className="flex items-center gap-3 mb-5">
              <span
                className="w-7 h-[2px] bg-[#C9A586] shrink-0"
                aria-hidden="true"
              />
              <span className="text-[12px] sm:text-[13px] font-sans font-medium text-[#554A45]">
                Áreas de Atuação
              </span>
            </div>

            {/* Título Principal */}
            <h2 className="font-serif text-[#30231F] text-[36px] sm:text-[44px] lg:text-[48px] xl:text-[52px] font-medium leading-[1.12] tracking-tight mb-5 max-w-[480px]">
              <span className="block">Atuação jurídica em</span>
              <span className="block">diversas frentes do Direito</span>
            </h2>

            {/* Descrição */}
            <p className="font-sans text-[15px] sm:text-[16px] text-[#554A45] leading-[1.65] max-w-[440px] mb-8 lg:mb-10 font-normal">
              Soluções completas para você, sua empresa e seus negócios, com foco
              em segurança, conformidade e resultados.
            </p>

            {/* Botão Desktop/Tablet */}
            <div className="hidden lg:block">
              <a
                href={whatsappConsultUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com um Especialista no WhatsApp"
                className="inline-flex items-center justify-center gap-2.5 h-[50px] px-7 rounded-[8px] bg-[#C9A586] hover:bg-[#d4b295] text-[#30231F] font-sans font-semibold text-[15px] transition-all duration-300 shadow-sm hover:shadow-md group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A586]"
              >
                <span>Falar com um Especialista</span>
                <ArrowRight className="w-4 h-4 text-[#30231F] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Coluna Direita — Grid 2x2 com os 4 Cards */}
          <div className="w-full lg:w-[58%] reveal-on-scroll delay-150">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {PRACTICE_AREAS.map((area, index) => (
                <PracticeAreaCard key={area.id} area={area} index={index} />
              ))}
            </div>

            {/* Botão Mobile */}
            <div className="mt-8 lg:hidden">
              <a
                href={whatsappConsultUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com um Especialista no WhatsApp"
                className="flex items-center justify-center gap-2.5 h-[50px] w-full rounded-[8px] bg-[#C9A586] hover:bg-[#d4b295] text-[#30231F] font-sans font-semibold text-[15px] transition-all duration-300 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A586]"
              >
                <span>Falar com um Especialista</span>
                <ArrowRight className="w-4 h-4 text-[#30231F]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
