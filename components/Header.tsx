"use client";

import { Moon, Sun } from "lucide-react";

interface HeaderProps {
  dark: boolean;
  toggleDark: () => void;
}

export default function Header({ dark, toggleDark }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo para modo CLARO: usa a versão com letras pretas */}
          <img
            src="/logofundobranco.png"
            alt="Tozza Boutique"
            className="dark:hidden w-32 h-auto object-contain"
          />
          {/* Logo para modo ESCURO: usa a versão com letras brancas */}
          <img
            src="/logofundopreto.png"
            alt="Tozza Boutique"
            className="hidden dark:block w-32 h-auto object-contain"
          />
        </div>

        {/* Direita: toggle dark/light */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-flex text-xs font-medium tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
            Estética Premium
          </span>

          <button
            type="button"
            id="btn-toggle-theme"
            onClick={toggleDark}
            aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
            className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer touch-manipulation select-none"
          >
            {dark ? (
              <Sun className="w-4 h-4 pointer-events-none" />
            ) : (
              <Moon className="w-4 h-4 pointer-events-none" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
