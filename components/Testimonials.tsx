"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const tData = [
  { name: "Monalisa Azevedo", time: "Cliente há mais de 1 ano", text: "Há um ano meu filho de 4 patas frequenta a Tozza. Ele adora. Ana é muito atenciosa e se preocupa com tudo. Fico absolutamente tranquila." },
  { name: "Ney Araujo", time: "Assinante do Clubinho", text: "Tive a felicidade de encontrar o Tozza, estabelecimento com funcionários responsáveis e carinhosos, que oferecem sempre um atendimento ótimo." },
  { name: "Livia Rodrigues", time: "Avaliação 5 estrelas", text: "Ana e Douglas são ótimos profissionais. Sempre trataram a minha cachorrinha com amor e carinho e ela ama ir pra lá tomar banho." },
  { name: "Ana Carla Costa", time: "Cliente Recorrente", text: "Atendimento super atencioso, repleto de carinho e competência. Minha pet ama o estabelecimento e os funcionários!" },
  { name: "Airton Oliveira", time: "Local Guide", text: "Ótimo serviço, todos atendem com simpatia e são muito flexíveis, preço justo e bom atendimento!" },
];
const testimonials = [...tData, ...tData];

export default function Testimonials() {
  return (
    // ID ADICIONADO AQUI PARA FAZER A ANCORAGEM FUNCIONAR
    <section id="depoimentos" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-zinc-500 dark:text-zinc-400 text-xs font-semibold tracking-widest uppercase mb-4">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white tracking-wide font-montserrat">O que dizem nossos clientes</h2>
        </div>
        <div className="relative group mt-10">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-50 via-zinc-50/50 to-transparent dark:from-zinc-950 dark:via-zinc-950/50 z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-50 via-zinc-50/50 to-transparent dark:from-zinc-950 dark:via-zinc-950/50 z-10 pointer-events-none" />
          <motion.div className="flex gap-6 w-full" animate={{ x: "-50%" }} transition={{ repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" }} style={{ width: "fit-content" }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 md:p-10 rounded-xl flex flex-col h-[280px] w-[350px] md:w-[400px] flex-shrink-0">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-black text-black dark:fill-white dark:text-white" />)}
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8 flex-grow font-light leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-black dark:text-white tracking-wide text-sm font-montserrat">{testimonial.name}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">{testimonial.time}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}