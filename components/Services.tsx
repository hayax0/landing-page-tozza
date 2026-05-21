import { Bath, Scissors, Crown, Droplet } from "lucide-react";

const services = [
  { icon: <Bath className="w-5 h-5" />, title: "Banho Especial", description: "Banho completo com produtos selecionados e de alta qualidade.", features: ["Produtos premium", "Secagem profissional"] },
  { icon: <Scissors className="w-5 h-5" />, title: "Tosa Higiênica", description: "Tosa focada no conforto e higiene, sem alterar o visual da raça.", features: ["Patas e virilha", "Corte de unhas"] },
  { icon: <Crown className="w-5 h-5" />, title: "Tosa da Raça", description: "Tosa especializada respeitando o padrão estético de cada raça.", features: ["Padrão de raça", "Trimming"] },
  { icon: <Droplet className="w-5 h-5" />, title: "Hidratação", description: "Tratamento intensivo que restaura maciez e brilho do pelo.", features: ["Máscara hidratante", "Nutrição profunda"] },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block text-zinc-500 dark:text-zinc-400 text-xs font-semibold tracking-widest uppercase mb-4">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white tracking-wide font-montserrat">Cuidado especializado para cada pet</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl flex flex-col h-full shadow-sm">
              <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-black dark:text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-black dark:text-white mb-3 font-montserrat">{service.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 flex-grow leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-8 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs text-zinc-500 dark:text-zinc-500"><span className="w-1 h-1 rounded-full bg-black dark:bg-white mr-2"></span>{feature}</li>
                ))}
              </ul>
              <a href="#formulario" className="w-full text-center py-3 bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300">Agendar</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
