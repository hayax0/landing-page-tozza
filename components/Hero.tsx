"use client";

import { motion } from "framer-motion";
import { WHATSAPP_BASE_URL } from "./constants";

export default function Hero() {
  const whatsappMsg = encodeURIComponent("Olá, Tozza Boutique! Gostaria de agendar um horário para o meu pet. Poderia me informar os horários disponíveis?");
  const fadeInUp: any = { 
    initial: { opacity: 0, y: 30 }, 
    animate: { opacity: 1, y: 0 }, 
    transition: { duration: 0.6, ease: "easeOut" } 
  };

  return (
    <section id="inicio" className="relative bg-white dark:bg-black py-24 sm:py-32 px-6 transition-colors duration-300 overflow-hidden border-b border-zinc-100 dark:border-zinc-900">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.span 
          {...fadeInUp} 
          className="inline-block border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-medium uppercase tracking-widest px-4 py-2 rounded-full mb-8"
        >
          Referência em Estética Pet na Tijuca
        </motion.span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight tracking-wide mb-6 font-montserrat max-w-3xl">
          Seu pet merece cuidado de excelência.
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg sm:text-xl mb-12 leading-relaxed max-w-2xl font-light">
          Banho especial, tosa de raça, hidratação profissional e muito mais. Atendimento especializado e acolhedor na Tijuca, Rio de Janeiro.
        </p>
        <motion.div 
          {...fadeInUp} 
          transition={{ delay: 0.4, duration: 0.6 }} 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          <a href="#formulario" className="btn-primary w-full sm:w-auto inline-flex items-center justify-center bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100 font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm">Agendar Horário</a>
          <a href={`${WHATSAPP_BASE_URL}${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto inline-flex items-center justify-center bg-transparent text-black dark:text-white border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 font-medium text-sm tracking-widest uppercase px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95">Falar no WhatsApp</a>
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
    </section>
  );
}
