import React from "react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="w-full py-5 flex items-center gap-5 bg-gray-700 border-b border-gray-600">
      <Logo />
      <p> Rocketseat - Todos os direitos reservados </p>
    </footer>
  );
}
