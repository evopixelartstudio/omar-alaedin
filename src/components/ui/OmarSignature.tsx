import React from "react";

export function OmarSignature({
  className = "w-[170px] h-auto text-[#D6B493]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 240 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Assinatura manuscrita estilizada de Omar Alaedin"
      role="img"
    >
      {/* Handcrafted fluid calligraphic signature paths mimicking the mockup */}
      {/* Initial 'O' flourish */}
      <path
        d="M28 42C23 34 26 18 38 15C50 12 55 24 53 38C51 49 42 56 31 54C21 52 16 38 22 25C28 14 44 8 58 14C65 17 68 25 67 32C66 38 60 44 54 45"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 'm', 'a', 'r' cursive connectors */}
      <path
        d="M58 41C61 36 65 34 68 37C70 39 69 46 68 49C71 42 76 35 80 37C83 39 82 45 80 48C83 43 87 37 91 39C93 42 91 48 89 50C92 46 97 40 102 42C105 44 104 50 102 52"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Capital 'A' transition and flourish */}
      <path
        d="M109 48C115 35 125 15 131 8C133 6 135 7 134 12C130 25 124 43 121 55"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* 'l', 'a', 'e', 'd', 'i', 'n' letters */}
      <path
        d="M125 38C132 30 144 14 146 17C148 20 142 35 140 46C143 38 150 36 153 39C155 43 151 49 148 51C152 44 160 38 163 42C165 46 159 52 156 53C161 41 168 24 171 21C172 20 171 25 169 35C168 45 168 53 173 51C176 49 181 40 183 43C184 46 182 52 180 54C184 48 190 41 195 44C198 47 195 53 192 56"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Tittle for 'i' */}
      <circle cx="184" cy="33" r="1.4" fill="currentColor" />
      {/* Sweeping signature underline tail */}
      <path
        d="M45 56C82 58 135 60 172 58C198 56 222 51 234 46"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

