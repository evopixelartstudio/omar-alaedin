import React from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface WhatsAppButtonProps {
  variant?: "primary" | "secondary" | "header";
  text?: string;
  message?: string;
  className?: string;
  iconClassName?: string;
}

export function WhatsAppButton({
  variant = "header",
  text = "Falar no WhatsApp",
  message,
  className = "",
  iconClassName = "w-4 h-4",
}: WhatsAppButtonProps) {
  const phoneNumber = "5516988206075";
  const encodedMessage = message ? encodeURIComponent(message) : "";
  const href = encodedMessage
    ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    : `https://wa.me/${phoneNumber}`;

  // Base luxury styles
  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 font-sans font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A586] focus-visible:ring-offset-2 focus-visible:ring-offset-[#211B19] select-none";

  let variantClasses = "";

  if (variant === "header") {
    // Elegant pill button matching the mockup header
    variantClasses =
      "bg-[#30231F]/80 hover:bg-[#3d2d28] text-[#F5F0EB] text-sm px-5 py-2.5 rounded-full border border-[#C9A586]/40 hover:border-[#C9A586] shadow-sm hover:shadow-[#C9A586]/10 hover:shadow-md";
  } else if (variant === "secondary") {
    // Secondary button: transparent background, beige border, white text, subtle hover
    variantClasses =
      "bg-transparent hover:bg-[#30231F]/60 text-[#F5F0EB] text-base px-7 h-14 rounded border border-[#C9A586] hover:border-[#E4C5A7] shadow-sm";
  } else {
    // Primary: beige background, dark text
    variantClasses =
      "bg-[#C9A586] hover:bg-[#d4b295] text-[#211B19] text-base font-semibold px-7 h-14 rounded shadow-md hover:shadow-lg hover:shadow-[#C9A586]/15";
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${text} - abre em nova aba no WhatsApp`}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      <WhatsAppIcon className={`${iconClassName} shrink-0 text-current`} />
      <span>{text}</span>
    </a>
  );
}

