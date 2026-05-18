"use client";

import { Star, Truck } from "lucide-react";

interface StoreProps {
  onCardClick: (servico: string) => void;
}

const productCategories = [
  {
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-200 dark:border-emerald-800",
    title: "Alimentação e Petiscos",
    emoji: "🍖",
    items: ["Rações premium", "Sachês e patês", "Ossos e petiscos naturais"],
  },
  {
    bg: "bg-pink-50 dark:bg-pink-900/20",
    border: "border-pink-200 dark:border-pink-900",
    title: "Higiene e Farmácia",
    emoji: "🧴",
    items: [
      "Shampoos e condicionadores",
      "Tapetes higiênicos",
      "Medicamentos e suplementos",
    ],
  },
  {
    bg: "bg-amber-50 dark:bg-amber-900/20",
    border: "border-amber-200 dark:border-amber-800",
    title: "Conforto",
    emoji: "🛏️",
    items: ["Caminhas e colchonetes", "Arranhadores", "Brinquedos"],
  },
  {
    bg: "bg-violet-50 dark:bg-violet-900/20",
    border: "border-violet-200 dark:border-violet-900",
    title: "Acessórios",
    emoji: "🎀",
    items: [
      "Coleiras e guias",
      "Roupas e fantasias",
      "Comedouros e bebedouros",
    ],
  },
];

export default function Store({ onCardClick }: StoreProps) {
  return (
    <>
      {/* ── Vitrine de Produtos ── */}
      <section className="py-16 px-4 bg-stone-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Nossa Loja
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
              Tudo que seu pet precisa 🛒
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
              Estoque completo e entrega no conforto da sua casa.
            </p>
          </div>

          {/*
            Cards de categoria como âncoras nativas.
            onClick atualiza o estado; href="#formulario" faz o scroll.
            Conteúdo interno com pointer-events-none para o toque
            sempre chegar à tag <a>.
          */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {productCategories.map((cat, i) => (
              <a
                key={i}
                href="#formulario"
                onClick={() => onCardClick("Outro produto")}
                className={`rounded-3xl border ${cat.border} ${cat.bg} p-4 sm:p-5 hover:scale-[1.03] hover:shadow-md active:scale-95 transition-all duration-200 flex flex-col gap-2 text-left cursor-pointer touch-manipulation select-none`}
              >
                <div className="text-2xl pointer-events-none">{cat.emoji}</div>
                <h3 className="font-bold text-slate-800 dark:text-white text-sm leading-snug pointer-events-none">
                  {cat.title}
                </h3>
                <ul className="space-y-1 mt-1 pointer-events-none">
                  {cat.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-slate-500 dark:text-slate-400 text-xs flex items-start gap-1"
                    >
                      <span className="text-emerald-500 font-bold">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>

          {/* CTA principal da loja */}
          <div className="text-center">
            <a
              href="#formulario"
              onClick={() => onCardClick("Outro produto")}
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-slate-900 font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer touch-manipulation select-none"
            >
              <Truck className="w-5 h-5 pointer-events-none" />
              Consultar estoque e pedir entrega
            </a>
          </div>
        </div>
      </section>

      {/* ── Badge Google Rating ── */}
      <section className="py-8 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-stone-50 dark:bg-slate-800 border border-stone-100 dark:border-slate-700 rounded-3xl px-6 py-5 shadow-sm">
            <div className="flex gap-0.5 pointer-events-none">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-center sm:text-left pointer-events-none">
              <p className="font-bold text-slate-800 dark:text-white text-base">
                ⭐ 5.0 no Google
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Avaliado pelos nossos clientes de Olaria — obrigado pela confiança! 🐾
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
