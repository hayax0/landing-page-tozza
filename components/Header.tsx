"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#formulario", label: "Agendamento" },
];

interface HeaderProps {
  dark: boolean;
  toggleDark: () => void;
}

export default function Header({ dark, toggleDark }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Evita o scroll de fundo do site quando o menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo à esquerda */}
          <a href="#inicio" className="flex items-center" onClick={() => setIsOpen(false)}>
            <img
              src="/logofundobranco.png"
              alt="Tozza Boutique"
              className="dark:hidden w-28 md:w-32 h-auto object-contain"
            />
            <img
              src="/logofundopreto.png"
              alt="Tozza Boutique"
              className="hidden dark:block w-28 md:w-32 h-auto object-contain"
            />
          </a>

          {/* Grupo de Navegação e Controles */}
          <div className="flex items-center gap-6">
            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-montserrat text-[11px] font-bold tracking-widest uppercase text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black dark:after:bg-white hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Botão de Modo de Tema */}
            <button
              type="button"
              id="btn-toggle-theme"
              onClick={toggleDark}
              aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
              className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer z-50 select-none touch-manipulation"
            >
              {dark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Botão Hambúrguer Mobile */}
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-300 md:hidden z-50 cursor-pointer select-none"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Gaveta Mobile — renderizada FORA do <header> para cobrir 100% da tela */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] flex flex-col bg-white dark:bg-black md:hidden"
          >
            {/* Topo da Gaveta: Logo à esquerda e controles à direita */}
            <div className="flex items-center justify-between w-full px-6 py-4">
              <img
                src={dark ? "/logofundopreto.png" : "/logofundobranco.png"}
                alt="Tozza Boutique"
                className="w-28 h-auto object-contain"
              />
              <div className="flex items-center gap-4">
                {/* Alternador de tema dentro da gaveta */}
                <button
                  type="button"
                  onClick={toggleDark}
                  aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
                  className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-300 cursor-pointer select-none"
                >
                  {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
                {/* Botão Fechar */}
                <button
                  type="button"
                  onClick={toggleMenu}
                  aria-label="Fechar menu"
                  className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-300 cursor-pointer select-none"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Links centralizados verticalmente no restante da tela */}
            <div className="flex flex-col items-center justify-center flex-1 space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-montserrat text-2xl font-extrabold tracking-widest uppercase text-black dark:text-white hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
