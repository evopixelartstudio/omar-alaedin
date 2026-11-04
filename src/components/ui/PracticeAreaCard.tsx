import React from "react";
import Image from "next/image";
import { LucideIcon } from "lucide-react";

export interface PracticeArea {
  id: string;
  line1: string;
  line2: string;
  imageSrc: string;
  icon: LucideIcon;
  altText: string;
  customPosition?: string;
  whatsappMessage?: string;
}

interface PracticeAreaCardProps {
  area: PracticeArea;
  index: number;
}

export function PracticeAreaCard({ area, index }: PracticeAreaCardProps) {
  const Icon = area.icon;
  const phoneNumber = "5516988206075";
  const fullName = `${area.line1} ${area.line2}`;
  const message =
    area.whatsappMessage ||
    `Olá, gostaria de saber mais sobre a atuação em ${fullName}.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${fullName} - Solicitar orientação jurídica especializada`}
      className="group relative w-full aspect-[1.8/1] sm:aspect-[1.85/1] rounded-[16px] overflow-hidden block border border-[#DED4CA]/40 shadow-sm hover:shadow-lg hover:border-[#C9A586]/70 transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A586] bg-[#211B19]"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Background Photography with gentle zoom */}
      <Image
        src={area.imageSrc}
        alt={area.altText}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
        className={`object-cover ${
          area.customPosition || "object-right"
        } transition-transform duration-500 ease-out group-hover:scale-[1.05]`}
      />

      {/* Cinematic dark gradient matching mockup: dark at left for text legibility, clear at right */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 via-55% to-transparent transition-opacity duration-400 group-hover:opacity-90"
        aria-hidden="true"
      />

      {/* Subtle border highlight on hover */}
      <div
        className="absolute inset-0 rounded-[16px] border border-transparent group-hover:border-[#C9A586]/50 transition-colors duration-300 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content pinned to middle-left as in mockup */}
      <div className="absolute inset-0 p-5 sm:p-6 lg:p-7 flex flex-col justify-center items-start z-10">
        {/* Lucide Icon in Beige */}
        <div className="mb-2 sm:mb-2.5 text-[#C9A586] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-[#E4C5A7]">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.6]" />
        </div>

        {/* Practice Area Title in two lines like mockup */}
        <h3 className="font-serif text-[#F5F0EB] text-[20px] sm:text-[23px] lg:text-[25px] font-medium leading-[1.12] tracking-tight drop-shadow-sm transition-colors duration-300 group-hover:text-white">
          <span className="block">{area.line1}</span>
          <span className="block">{area.line2}</span>
        </h3>
      </div>
    </a>
  );
}
