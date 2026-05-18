"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import { WHATSAPP_BASE_URL } from "./constants";

const servicesList = [
  "Banho",
  "Banho de Gato",
  "Tosa Completa",
  "Tosa Higiênica",
  "Tosa Bebê",
  "Tosa na Tesoura",
  "Tosa da Raça (Trimming)",
  "Tosa de Gato",
  "Hidratação",
  "Remoção de Subpelo",
  "Desembolo",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    tutorName: "",
    petName: "",
    species: "",
    breed: "",
    service: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppRedirect = () => {
    const { tutorName, petName, species, breed, service } = formData;

    // Se não preencheu nada, manda a msg padrão
    if (!tutorName && !petName && !service) {
      window.open(
        `${WHATSAPP_BASE_URL}${encodeURIComponent(
          "Olá, Tozza Boutique! Gostaria de agendar um horário.",
        )}`,
        "_blank",
      );
      return;
    }

    // Monta a string estruturada
    let msg = `Olá, Tozza Boutique!\n\nMe chamo *${
      tutorName || "Tutor"
    }*.\n\nGostaria de agendar um(a) *${service || "serviço"}*`;

    if (petName) {
      msg += ` para o meu pet *${petName}*`;
    }

    if (species) {
      msg += ` (${species})`;
    }

    if (breed) {
      msg += ` da raça *${breed}*`;
    }

    msg += ".\n\nPoderiam me informar os horários disponíveis?";

    window.open(`${WHATSAPP_BASE_URL}${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section
      id="formulario"
      className="py-24 px-6 bg-white dark:bg-black transition-colors duration-300 scroll-mt-20 border-t border-zinc-100 dark:border-zinc-900"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block text-zinc-500 dark:text-zinc-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Agendamento
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white tracking-wide mb-4">
            Agende pelo WhatsApp
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
            Preencha o formulário abaixo e entraremos em contato para confirmar
            o melhor horário.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 rounded-xl"
        >
          <form
            className="space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              handleWhatsAppRedirect();
            }}
          >
            {/* Tutor */}
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest uppercase text-black dark:text-white">
                Nome do Tutor
              </label>
              <input
                type="text"
                name="tutorName"
                value={formData.tutorName}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 focus:border-black dark:focus:border-white py-3 outline-none text-black dark:text-white placeholder-zinc-400 font-light transition-colors"
                placeholder="Ex: Ana Paula"
              />
            </div>

            {/* Pet Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-black dark:text-white">
                  Nome do Pet
                </label>
                <input
                  type="text"
                  name="petName"
                  value={formData.petName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 focus:border-black dark:focus:border-white py-3 outline-none text-black dark:text-white placeholder-zinc-400 font-light transition-colors"
                  placeholder="Ex: Thor"
                />
              </div>

              {/* Novo campo de Espécie */}
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-black dark:text-white">
                  Espécie
                </label>
                <select
                  name="species"
                  value={formData.species}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 focus:border-black dark:focus:border-white py-3 outline-none text-black dark:text-white font-light appearance-none cursor-pointer"
                >
                  <option value="" className="bg-white dark:bg-zinc-900">
                    Selecione
                  </option>
                  <option
                    value="Cachorro"
                    className="bg-white dark:bg-zinc-900"
                  >
                    Cachorro
                  </option>
                  <option value="Gato" className="bg-white dark:bg-zinc-900">
                    Gato
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-black dark:text-white">
                  Raça
                </label>
                <input
                  type="text"
                  name="breed"
                  value={formData.breed}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 focus:border-black dark:focus:border-white py-3 outline-none text-black dark:text-white placeholder-zinc-400 font-light transition-colors"
                  placeholder="Ex: Golden"
                />
              </div>
            </div>

            {/* Serviço */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold tracking-widest uppercase text-black dark:text-white">
                Serviço Desejado
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 focus:border-black dark:focus:border-white py-3 outline-none text-black dark:text-white font-light appearance-none cursor-pointer"
              >
                <option value="" className="bg-white dark:bg-zinc-900">
                  Selecione
                </option>
                {servicesList.map((srv) => (
                  <option
                    key={srv}
                    value={srv}
                    className="bg-white dark:bg-zinc-900"
                  >
                    {srv}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-8 bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 py-4 font-bold text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
            >
              <Send className="w-4 h-4" />
              Enviar via WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
