import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Purpose() {
  return (
    <section
      id="proposito"
      className="relative w-full bg-[#F5F0EB] text-[#30231F] scroll-mt-20 overflow-hidden"
    >
      <div className="w-full flex flex-col lg:flex-row min-h-[460px] lg:h-[500px] xl:h-[540px]">
        {/* Coluna Esquerda — Fotografia Cinematográfica FULL BLEED (sem formato de cartão, exatamente como no mockup) */}
        <div className="relative w-full lg:w-1/2 h-[360px] sm:h-[440px] lg:h-full overflow-hidden select-none reveal-on-scroll">
          <Image
            src="/proposito-balanca.png"
            alt="Balança da Justiça dourada e livros jurídicos clássicos"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
            quality={95}
          />
        </div>

        {/* Coluna Direita — Conteúdo Editorial sobre fundo claro */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-14 pt-16 sm:pt-20 lg:pt-16 bg-[#F5F0EB] reveal-on-scroll delay-150">
          <div className="max-w-[540px] flex flex-col items-start">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-7 h-[2px] bg-[#C9A586] shrink-0"
                aria-hidden="true"
              />
              <span className="text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.2em] uppercase text-[#554A45]">
                NOSSO PROPÓSITO
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-[#30231F] text-[34px] sm:text-[42px] lg:text-[46px] font-medium leading-[1.14] tracking-tight mb-5">
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
