"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "atendimento-presencial",
    question: "O atendimento é apenas presencial?",
    answer:
      "Não. Realizamos atendimentos presenciais em nosso escritório em Ribeirão Preto – SP e também atendimentos 100% digitais e remotos para clientes de qualquer localidade do país, com total segurança, sigilo e agilidade.",
  },
  {
    id: "como-funciona-consulta",
    question: "Como funciona a consulta?",
    answer:
      "Na conversa inicial, você apresenta sua demanda diretamente. Analisamos os fatos, examinamos os riscos e indicamos com clareza as melhores alternativas jurídicas para o seu caso.",
  },
  {
    id: "quais-documentos",
    question: "Quais documentos são necessários?",
    answer:
      "A documentação necessária varia de acordo com a área do Direito e a complexidade do caso. Durante nosso primeiro contato, fornecemos uma orientação clara e precisa sobre quais documentos providenciar.",
  },
  {
    id: "atende-empresas",
    question: "Atende empresas também?",
    answer:
      "Sim. Oferecemos assessoria jurídica completa para empresas (Direito Empresarial, Trabalhista consultivo e preventivo, Contratos e Compliance), além do suporte dedicado a pessoas físicas.",
  },
  {
    id: "prazo-retorno",
    question: "Qual o prazo para retorno?",
    answer:
      "Nosso compromisso é responder com rapidez e transparência. Contatos realizados pelo WhatsApp são respondidos com agilidade durante o horário de atendimento.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl =
    "https://wa.me/5516988206075?text=" +
    encodeURIComponent(
      "Olá, estive no site e gostaria de tirar uma dúvida sobre a assessoria jurídica."
    );

  return (
    <section
      id="faq"
      className="relative w-full bg-[#181413] text-[#F5F0EB] py-20 sm:py-24 lg:py-28 scroll-mt-20 border-t border-[#473A34]/50 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda — Conteúdo Editorial */}
          <div className="lg:col-span-5 flex flex-col items-start justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span
                className="w-7 h-[2px] bg-[#C9A586] shrink-0"
                aria-hidden="true"
              />
              <span className="text-[12px] sm:text-[13px] font-sans font-medium text-[#F5F0EB]/90">
                Perguntas Frequentes
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-[#F5F0EB] text-[36px] sm:text-[44px] lg:text-[48px] font-medium leading-[1.12] tracking-tight mb-5">
              Tire suas dúvidas
            </h2>

            {/* Description */}
            <p className="font-sans text-[15px] sm:text-[16px] text-[#D8CFCA] leading-[1.68] mb-8 font-normal max-w-md">
              Reunimos aqui as principais perguntas sobre nossos serviços,
              atendimento e como funciona a assessoria jurídica.
            </p>

            {/* Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tirar dúvidas no WhatsApp"
              className="inline-flex items-center justify-center gap-2.5 h-[50px] px-7 rounded-[8px] bg-[#C9A586] hover:bg-[#d8b598] text-[#211B19] font-sans font-semibold text-[15px] transition-all duration-300 shadow-md hover:shadow-lg group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A586]"
            >
              <span>Ver todas as perguntas</span>
              <ArrowRight className="w-4 h-4 text-[#211B19] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Coluna Direita — Accordion */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#473A34]/60 border-y border-[#473A34]/60">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.id} className="py-5 sm:py-6 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between text-left gap-4 font-sans text-[15px] sm:text-[16px] font-medium text-[#F5F0EB] hover:text-[#C9A586] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A586] rounded-xs"
                    aria-expanded={isOpen}
                  >
                    <span className="leading-snug">{item.question}</span>
                    <span className="shrink-0 p-1 rounded text-[#C9A586] transition-transform duration-300">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100 pt-3.5" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="font-sans text-[14px] sm:text-[15px] text-[#BDB2AC] leading-relaxed">
                      {item.answer}
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
