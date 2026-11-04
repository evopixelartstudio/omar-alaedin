import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Scale,
  Users,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const DIFFERENTIALS = [
  {
    icon: ShieldCheck,
    title: "Atendimento",
    subtitle: "Personalizado",
  },
  {
    icon: Scale,
    title: "Atuação Estratégica",
    subtitle: "e Segura",
  },
  {
    icon: Users,
    title: "Transparência",
    subtitle: "em Todas as Etapas",
  },
  {
    icon: Handshake,
    title: "Compromisso",
    subtitle: "com Resultados",
  },
];

export function Hero() {
  const whatsappUrlPrimary =
    "https://wa.me/5516988206075?text=" +
    encodeURIComponent(
      "Olá, encontrei o site da Omar Alaedin Assessoria Jurídica e gostaria de agendar uma consulta."
    );

  return (
    <section
      id="inicio"
      className="relative w-full min-h-[760px] lg:min-h-screen flex flex-col justify-between pt-[88px] bg-[#211B19] overflow-hidden"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/hero.png"
          alt="Dr. Omar Alaedin em seu escritório de advocacia"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[78%_center] lg:object-[82%_center] xl:object-[86%_center] opacity-90 transition-opacity duration-700"
        />

        {/* Sophisticated Gradients for text contrast & lawyer preservation */}
        {/* Desktop horizontal gradient: dark at left, transitioning smoothly before reaching lawyer */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#211B19] via-[#211B19]/85 via-50% to-transparent to-85%" />

        {/* Tablet / Medium screens gradient */}
        <div className="hidden sm:block lg:hidden absolute inset-0 bg-gradient-to-r from-[#211B19] via-[#211B19]/90 to-[#211B19]/40" />

        {/* Mobile vertical gradient: ensures text legibility over any background */}
        <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-[#211B19]/95 via-[#211B19]/85 to-[#211B19]" />

        {/* Subtle top shade for header separation */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#211B19]/80 to-transparent" />

        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#211B19] to-transparent" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl xl:max-w-[650px]">
          {/* Eyebrow / Tagline — Exatamente como no Mockup */}
          <div className="flex items-center gap-3.5 mb-6">
            <span className="w-8 h-[2px] bg-[#C9A586]" aria-hidden="true" />
            <span className="text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase text-[#F5F0EB]/90 font-sans">
              ASSESSORIA JURÍDICA ESPECIALIZADA
            </span>
          </div>

          {/* Headline — Exatamente com as quebras do Mockup */}
          <h1 className="font-serif text-[#F5F0EB] text-[42px] sm:text-[54px] md:text-[62px] lg:text-[70px] xl:text-[76px] font-medium leading-[1.08] tracking-tight mb-6 sm:mb-8 drop-shadow-sm">
            <span className="block">Soluções jurídicas</span>
            <span className="block">com estratégia, segurança</span>
            <span className="block text-[#E4C5A7]">e compromisso</span>
          </h1>

          {/* Description — Texto idêntico ao Mockup */}
          <p className="font-sans text-base sm:text-lg text-[#D8CFCA] leading-relaxed max-w-[540px] mb-8 sm:mb-10 font-normal">
            Atuação preventiva e contenciosa para pessoas e empresas, com atendimento
            personalizado e foco na melhor solução para o seu caso.
          </p>

          {/* Action Buttons — Botão Bege + Link "Conheça nossas áreas →" como no Mockup */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-8">
            {/* Primary Button */}
            <a
              href={whatsappUrlPrimary}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar uma Consulta com Omar Alaedin via WhatsApp"
              className="inline-flex items-center justify-center gap-3 h-13 px-7 rounded-[8px] bg-[#C9A586] hover:bg-[#d8b699] text-[#211B19] font-sans font-semibold text-base transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#C9A586]/20 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A586]"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#211B19] transition-transform duration-300 group-hover:scale-110 shrink-0" />
              <span>Agendar uma Consulta</span>
            </a>

            {/* Link Text Conheça Nossas Áreas */}
            <Link
              href="#areas-de-atuacao"
              className="inline-flex items-center gap-2 text-[#F5F0EB] hover:text-[#C9A586] font-sans text-sm sm:text-base font-medium transition-colors duration-200 group py-2"
            >
              <span className="border-b border-[#F5F0EB]/40 group-hover:border-[#C9A586] pb-0.5 transition-colors">
                Conheça nossas áreas
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Faixa inferior da Hero: Diferenciais (Card arredondado integrado como no Mockup) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pb-8 lg:pb-10">
        <div className="w-full bg-[#30231F]/90 backdrop-blur-md border border-[#C9A586]/20 rounded-[14px] shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#C9A586]/15">
            {DIFFERENTIALS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 py-5 sm:py-6 px-6 transition-colors duration-300 hover:bg-[#C9A586]/5 group"
                >
                  <div className="shrink-0 text-[#C9A586] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-7 h-7 stroke-[1.6]" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm sm:text-[15px] font-semibold text-[#F5F0EB] tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-[13px] text-[#D8CFCA]/85 font-normal leading-tight">
                      {item.subtitle}
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
