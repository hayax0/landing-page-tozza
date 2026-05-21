"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const petPhotos = [
  { id: 0, src: "/fotospets/cachorro1.jpg", alt: "Tozza VIP Beagle" },
  { id: 1, src: "/fotospets/cachorro2.jpg", alt: "Tozza VIP Golden" },
  { id: 2, src: "/fotospets/cachorro3.jpg", alt: "Tozza VIP Spitz" },
  { id: 3, src: "/fotospets/cachorro4.jpg", alt: "Tozza VIP Yorkshire" },
];

export default function PetGallery() {
  const [stack, setStack] = useState([0, 1, 2, 3]);
  const [exitX, setExitX] = useState<number | string>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const activeIndex = stack[0];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setExitX(400); // Desliza para a direita
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setExitX(-400); // Desliza para a esquerda
  };

  // Controla a rotação lógica do array de pilha após a animação de saída terminar
  useEffect(() => {
    if (exitX !== 0) {
      const timer = setTimeout(() => {
        if (exitX === 400) {
          // Próximo: o card do topo vai para o fundo da pilha
          setStack((prev) => [...prev.slice(1), prev[0]]);
        } else if (exitX === -400) {
          // Anterior: o card do fundo vem para o topo
          setStack((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
        }
        setExitX(0);
        setIsAnimating(false);
      }, 350); // Deve bater com a duração da animação
      return () => clearTimeout(timer);
    }
  }, [exitX]);

  // Captura o término do drag manual
  const handleDragEnd = (event: any, info: any) => {
    if (isAnimating) return;
    const threshold = 100;
    if (info.offset.x > threshold) {
      handleNext();
    } else if (info.offset.x < -threshold) {
      handlePrev();
    }
  };

  return (
    <section id="galeria" className="py-24 px-6 bg-white dark:bg-black transition-colors duration-300 scroll-mt-20 overflow-hidden border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="inline-block text-zinc-500 dark:text-zinc-400 text-xs font-semibold tracking-widest uppercase mb-4">Galeria VIP</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white tracking-wide font-montserrat mb-4">Pilha de Fotos VIP</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed">
            Arraste os cards para o lado ou use as setas para navegar em nossa seleção de clientes especiais.
          </p>
        </div>

        {/* Estrutura Centralizada da Pilha e Navegação */}
        <div className="relative max-w-2xl mx-auto flex items-center justify-center gap-4 md:gap-12 mt-12">
          {/* Seta Esquerda */}
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-black dark:text-white shadow-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 cursor-pointer shrink-0 z-20 active:scale-95"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Pilha de Cards (Deck) */}
          <div className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] shrink-0">
            {stack.map((photoIndex, depth) => {
              const photo = petPhotos[photoIndex];
              const isTop = depth === 0;

              return (
                <motion.div
                  key={photo.id}
                  layout
                  style={{
                    zIndex: petPhotos.length - depth,
                  }}
                  animate={
                    isTop && exitX !== 0
                      ? { x: exitX, rotate: exitX === 400 ? 12 : -12, opacity: 0 }
                      : {
                          x: 0,
                          rotate: 0,
                          scale: 1 - depth * 0.05,
                          y: depth * 15,
                          opacity: depth === 3 ? 0 : 1 - depth * 0.25,
                        }
                  }
                  transition={
                    isTop && exitX !== 0
                      ? { duration: 0.35, ease: "easeOut" }
                      : { type: "spring", stiffness: 300, damping: 25 }
                  }
                  drag={isTop ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onDragEnd={handleDragEnd}
                  className={`absolute inset-0 p-3 pb-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-xl flex flex-col justify-between select-none ${
                    isTop ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
                  }`}
                >
                  {/* Foto com cantos arredondados */}
                  <div className="relative w-full h-[250px] md:h-[300px] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-w-768px) 280px, 320px"
                      className="object-cover pointer-events-none"
                      priority={isTop}
                    />
                  </div>
                  {/* Legenda Estilo Polaroid */}
                  <div className="mt-4 text-center">
                    <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 font-montserrat tracking-wider uppercase">
                      {photo.alt}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Seta Direita */}
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-black dark:text-white shadow-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 cursor-pointer shrink-0 z-20 active:scale-95"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bolinhas Indicadoras de Status */}
        <div className="flex justify-center gap-2.5 mt-8">
          {petPhotos.map((photo) => (
            <button
              key={photo.id}
              onClick={() => {
                if (isAnimating) return;
                const indexInStack = stack.indexOf(photo.id);
                if (indexInStack > 0) {
                  setIsAnimating(true);
                  setExitX(400); // Visual swipe
                  setTimeout(() => {
                    setStack((prev) => {
                      const newStack = [...prev];
                      const movedItems = newStack.splice(0, indexInStack);
                      return [...newStack, ...movedItems];
                    });
                    setExitX(0);
                    setIsAnimating(false);
                  }, 350);
                }
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === photo.id
                  ? "w-6 bg-black dark:bg-white"
                  : "bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600"
              }`}
              aria-label={`Ver foto ${photo.id + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
