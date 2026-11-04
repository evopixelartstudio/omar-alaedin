"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const NAV_ITEMS = [
  { label: "Início", href: "#inicio", active: true },
  { label: "Áreas de Atuação", href: "#areas-de-atuacao" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Processo", href: "#processo" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-[#211B19]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#C9A586]/10"
          : "bg-[#211B19]/50 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 h-[88px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#inicio"
          className="relative flex items-center transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A586]"
          aria-label="Omar Alaedin Assessoria Jurídica - Início"
        >
          <div className="relative h-[48px] sm:h-[54px] w-[160px] sm:w-[190px]">
            <Image
              src="/logo-nav.png"
              alt="Omar Alaedin Assessoria Jurídica"
              fill
              priority
              sizes="(max-width: 640px) 160px, 190px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8"
          aria-label="Navegação Principal"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-200 group ${
                item.active
                  ? "text-[#F5F0EB]"
                  : "text-[#D8CFCA]/85 hover:text-[#F5F0EB]"
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#C9A586] transition-all duration-300 ${
                  item.active
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Right CTA Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <WhatsAppButton
            variant="header"
            text="Falar no WhatsApp"
            iconClassName="w-4 h-4 text-[#C9A586]"
          />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="lg:hidden flex items-center justify-center p-2 rounded-md text-[#F5F0EB] hover:text-[#C9A586] hover:bg-[#30231F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A586]"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#211B19]/98 backdrop-blur-xl border-b border-[#C9A586]/20 shadow-2xl ${
          mobileMenuOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="px-6 flex flex-col gap-4">
          <nav className="flex flex-col gap-3" aria-label="Navegação Mobile">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-base font-medium tracking-wide border-b border-white/5 transition-colors ${
                  item.active
                    ? "text-[#C9A586] font-semibold"
                    : "text-[#D8CFCA] hover:text-[#F5F0EB]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-2">
            <WhatsAppButton
              variant="header"
              text="Falar no WhatsApp"
              className="w-full justify-center py-3"
              iconClassName="w-5 h-5 text-[#C9A586]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
