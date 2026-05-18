"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Monalisa Azevedo",
    time: "Cliente há mais de 1 ano",
    text: "Há um ano meu filho de 4 patas frequenta a Tozza. Ele adora. Ana é muito atenciosa e se preocupa com tudo. Me manda mensagem perguntando sobre alergias e perfume. Fico absolutamente tranquila.",
  },
  {
    name: "Ney Araujo",
    time: "Assinante do Clubinho",
    text: "Tive a felicidade de encontrar o Tozza, estabelecimento com funcionários responsáveis e carinhosos, que oferecem sempre um atendimento ótimo para a minha querida Amy. Assino o clubinho de banhos semanais.",
  },
  {
    name: "Livia Rodrigues",
    time: "Avaliação 5 estrelas",
    text: "Ana e Douglas são ótimos profissionais. Sempre trataram a minha cachorrinha com amor e carinho e ela ama ir pra lá tomar banho. Recomendo fortemente.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block text-zinc-500 dark:text-zinc-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white tracking-wide">
            O que dizem nossos clientes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 md:p-10 rounded-xl flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-black text-black dark:fill-white dark:text-white"
                  />
                ))}
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8 flex-grow font-light leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div>
                <p className="font-bold text-black dark:text-white tracking-wide text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                  {testimonial.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
