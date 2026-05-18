"use client";

import { motion } from "framer-motion";
import { Bath, Crown, Droplet, Scissors } from "lucide-react";

const services = [
  {
    icon: <Bath className="w-6 h-6" />,
    title: "Banho Especial",
    description:
      "Banho completo com produtos selecionados e de alta qualidade, pensados para cada tipo de pelo. Seu pet sai perfumado, suave e feliz.",
    features: ["Produtos premium", "Secagem profissional", "Perfume especial"],
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Tosa Higiênica",
    description:
      "Tosa focada no conforto e higiene do pet, sem alterar o visual da raça. Ideal para manutenção entre as tosas completas.",
    features: ["Patas e virilha", "Corte de unhas", "Limpeza de orelhas"],
  },
  {
    icon: <Crown className="w-6 h-6" />,
    title: "Tosa da Raça",
    description:
      "Tosa especializada que respeita o padrão estético de cada raça. Realizada por profissionais treinados com tesouras e pentes específicos.",
    features: ["Padrão de raça", "Trimming", "Acabamento na tesoura"],
  },
  {
    icon: <Droplet className="w-6 h-6" />,
    title: "Hidratação",
    description:
      "Tratamento intensivo que restaura a maciez e o brilho do pelo, combatendo ressecamento e frizz com máscaras de nutrição profunda.",
    features: ["Máscara hidratante", "Nutrição profunda", "Resultado imediato"],
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="inline-block text-zinc-500 dark:text-zinc-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white tracking-wide">
            Cuidado especializado para cada pet
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Cada serviço é pensado para o bem-estar, conforto e beleza do seu
            melhor amigo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 md:p-10 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-zinc-400 dark:hover:border-zinc-600 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-black dark:text-white mb-8 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-black dark:text-white mb-4 tracking-wide">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8 flex-grow font-light leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-10">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-zinc-600 dark:text-zinc-400 font-light"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#formulario"
                className="w-full inline-flex justify-center items-center py-4 bg-transparent border border-zinc-200 dark:border-zinc-800 text-black dark:text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 mt-auto"
              >
                Agendar
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
