import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Purpose() {
  return (
    <section
      id="proposito"
      className="relative w-full bg-[#F5F0EB] text-[#30231F] py-20 sm:py-24 lg:py-28 scroll-mt-20 overflow-hidden border-b border-[#DED4CA]/50"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Coluna Esquerda — Fotografia Cinematográfica */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-[18px] overflow-hidden shadow-xl border border-[#DED4CA]/60 group">
              <Image
                src="/proposito-balanca.png"
                alt="Balança da Justiça dourada e livros jurídicos clássicos"
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                quality={92}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Coluna Direita — Conteúdo Editorial */}
          <div className="w-full lg:w-1/2 max-w-xl flex flex-col items-start justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span
                className="w-7 h-[2px] bg-[#C9A586] shrink-0"
                aria-hidden="true"
              />
              <span className="text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.2em] uppercase text-[#554A45]">
                NOSSO PROPÓSITO
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-[#30231F] text-[34px] sm:text-[42px] lg:text-[48px] font-medium leading-[1.12] tracking-tight mb-5">
              <span className="block">Mais do que processos,</span>
              <span className="block">viemos para proteger</span>
              <span className="block">o que é importante para você.</span>
            </h2>

            {/* Description */}
            <p className="font-sans text-[15px] sm:text-[16px] text-[#554A45] leading-[1.7] mb-8 font-normal">
              Acreditamos que a advocacia vai além da solução de conflitos. Nossa
              missão é atuar de forma preventiva, estratégica e eficiente, para
              que você tenha segurança jurídica em todas as suas decisões, seja
              na vida pessoal ou no seu negócio.
            </p>

            {/* Button */}
            <Link
              href="#sobre"
              className="inline-flex items-center justify-center gap-2.5 h-[50px] px-7 rounded-[8px] bg-[#211B19] hover:bg-[#30231F] text-[#F5F0EB] font-sans font-medium text-[15px] transition-all duration-300 shadow-md hover:shadow-lg group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A586]"
            >
              <span>Conheça nossa história</span>
              <ArrowRight className="w-4 h-4 text-[#C9A586] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
