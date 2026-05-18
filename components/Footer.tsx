"use client";

import { ADDRESS, INSTAGRAM_URL, MAPS_URL, WHATSAPP_NUMBER } from "./constants";

// O Footer é PERMANENTEMENTE ESCURO — ignora o tema global
export default function Footer() {
  return (
    <footer className="bg-black text-zinc-400 py-16 px-6 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-12 pb-16 border-b border-zinc-900">
          {/* Coluna 1: Logo + tagline */}
          <div className="space-y-6">
            {/* No footer escuro, sempre usamos a logo com letras brancas */}
            <img
              src="/logofundopreto.png"
              alt="Tozza Boutique"
              className="w-32 h-auto object-contain"
            />
            <p className="text-sm leading-relaxed font-light">
              Estética pet de alto padrão. Cuidado especializado, ambiente
              sofisticado e resultados impecáveis.
            </p>
          </div>

          {/* Coluna 2: Contato */}
          <div className="space-y-6">
            <h3 className="font-semibold text-white text-xs uppercase tracking-widest">
              Contato
            </h3>
            <ul className="space-y-4 text-sm font-light">
              <li>{ADDRESS}</li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  WhatsApp: (21) 99646-9600
                </a>
              </li>
              <li>
                <a
                  href="tel:+552134397946"
                  className="hover:text-white transition-colors duration-200"
                >
                  Telefone: (21) 3439-7946
                </a>
              </li>
              <li>
                <a
                  href="mailto:tozzapet@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  tozzapet@gmail.com
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  Instagram: @tozzapet
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Funcionamento */}
          <div className="space-y-6">
            <h3 className="font-semibold text-white text-xs uppercase tracking-widest">
              Funcionamento
            </h3>
            <div className="space-y-4 text-sm font-light">
              <div className="flex justify-between gap-4">
                <span>Terça a Sexta</span>
                <span className="text-white">10:00 – 18:00</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Sábado</span>
                <span className="text-white">09:00 – 15:00</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Segunda e Domingo</span>
                <span className="text-zinc-600">Fechado</span>
              </div>
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center border border-zinc-800 text-white hover:bg-zinc-900 text-xs tracking-widest uppercase py-3 rounded-lg transition-all duration-300 hover:border-zinc-600"
            >
              Ver no Google Maps
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light">
          <p>© {new Date().getFullYear()} Tozza Boutique.</p>
          <p>Estética Pet — Rio de Janeiro</p>
        </div>
      </div>
    </footer>
  );
}
