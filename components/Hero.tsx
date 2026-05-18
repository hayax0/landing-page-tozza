"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { WHATSAPP_BASE_URL } from "./constants";

export default function Hero() {
  const whatsappMsg = encodeURIComponent(
    "Olá, Tozza Boutique! Gostaria de agendar um horário para o meu pet. Poderia me informar os horários disponíveis?",
  );

  return (
    <section className="relative bg-white dark:bg-black py-28 sm:py-36 px-6 transition-colors duration-300 overflow-hidden">
      {/* Detalhe decorativo sutil — linha horizontal centralizada */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Pílula de destaque B&W */}
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-block border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-medium uppercase tracking-widest px-4 py-2 rounded-full mb-10"
        >
          Referência em Estética Pet na Tijuca
        </motion.span>

        {/* Título H1 — Montserrat, espaçamento elegante */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight tracking-wide mb-6"
        >
          Seu pet merece cuidado de excelência.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-zinc-600 dark:text-zinc-400 text-lg sm:text-xl mb-14 leading-relaxed max-w-2xl mx-auto font-light"
        >
          Banho especial, tosa de raça, hidratação profissional e muito mais.
          Atendimento especializado e acolhedor na Tijuca, Rio de Janeiro.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Botão primário com scale hover/active */}
          <a
            href="#formulario"
            id="btn-hero-agendar"
            className="btn-primary w-full sm:w-auto inline-flex items-center justify-center bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100 font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer touch-manipulation select-none shadow-sm"
          >
            Agendar Horário
          </a>

          {/* Botão secundário */}
          <a
            href={`${WHATSAPP_BASE_URL}${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-hero-whatsapp"
            className="btn-primary w-full sm:w-auto inline-flex items-center justify-center bg-transparent text-black dark:text-white border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-500 font-medium text-sm tracking-widest uppercase px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer touch-manipulation select-none"
          >
            Falar no WhatsApp
          </a>
        </motion.div>

        {/* Scroll hint minimalista */}
        <div className="mt-20 flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-600 text-xs uppercase tracking-widest animate-bounce pointer-events-none">
          <span>Descubra nossos serviços</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* Detalhe decorativo inferior */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
    </section>
  );
}
