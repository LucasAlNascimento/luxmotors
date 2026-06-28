import { ShieldCheck, Clock, MapPin, Sparkles } from "lucide-react";

export default function Benefits() {
  const items = [
    {
      icon: <MapPin className="w-8 h-8 text-amber-500/80 stroke-[1.25]" />,
      title: "Entrega VIP",
      description: "Levamos e retiramos o veículo no local de sua preferência (hotel, aeroporto ou residência) com discrição e pontualidade absoluta.",
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-500/80 stroke-[1.25]" />,
      title: "Suporte Concierge 24/7",
      description: "Um assistente dedicado para atender qualquer necessidade, desde orientações sobre a máquina até roteiros personalizados durante o aluguel.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-amber-500/80 stroke-[1.25]" />,
      title: "Frota Incomparável",
      description: "Veículos revisados nos mínimos detalhes com inspeção rigorosa. A frota de superesportivos e SUVs mais exclusiva do Brasil.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-500/80 stroke-[1.25]" />,
      title: "Segurança Premium",
      description: "Coberturas securitárias completas, assistência 24h e suporte total para você se concentrar apenas no prazer de dirigir.",
    },
  ];

  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-24 px-6 md:px-12 lg:px-24 border-b border-black">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="text-[10px] tracking-[0.3em] uppercase text-amber-500 font-medium">
            Experiência Luxmotors
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white font-display">
            Redefinindo o Padrão de Mobilidade
          </h2>
          <p className="text-xs text-neutral-400 leading-relaxed mt-2 tracking-wide">
            Mais do que alugar carros premium, nós entregamos sensações e exclusividade sob medida para a sua jornada.
          </p>
        </div>

        {/* Grid de benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 p-8 bg-neutral-800/40 border border-neutral-800 hover:border-amber-500/30 rounded-sm transition-all duration-500 group hover:-translate-y-1 shadow-lg"
            >
              <div className="p-3 bg-neutral-800 w-fit rounded-sm group-hover:bg-neutral-750 transition-colors duration-300">
                {item.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-light tracking-tight text-white group-hover:text-amber-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed tracking-wide">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
