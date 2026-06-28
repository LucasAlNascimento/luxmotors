import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Marcus Vinícius",
      role: "Diretor Executivo, Alpha Holding",
      quote: "Serviço espetacular do início ao fim. A entrega do Porsche 911 no aeroporto de Congonhas foi cirúrgica. Carro limpo como se estivesse saindo da concessionária. Incomparável.",
      stars: 5,
    },
    {
      name: "Beatriz Nogueira",
      role: "Advogada e Sócia, Nogueira Advocacia",
      quote: "Alugamos uma Range Rover Sport para um casamento no interior de SP. Atendimento do concierge impecável e carro impecável. Certamente faremos mais viagens com a Luxmotors.",
      stars: 5,
    },
    {
      name: "Eduardo Siqueira",
      role: "Investidor de Renda Variável",
      quote: "A facilidade de poder alugar um carro de alto padrão de forma rápida e segura mudou minha perspectiva de viagens a negócios. Equipe de parabéns pelo excelente cuidado.",
      stars: 5,
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-24 px-6 md:px-12 lg:px-24 border-b border-gray-300/40">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-medium">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 font-display">
            A Opinião de Quem Dirige
          </h2>
          <p className="text-xs text-gray-500 leading-relaxed mt-2 tracking-wide">
            A satisfação dos nossos clientes é o combustível que nos move a buscar sempre a perfeição.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-8 bg-gray-200 border border-gray-300/50 shadow-sm rounded-sm group hover:border-gray-400/50 transition-all duration-300"
            >
              <div className="flex flex-col gap-6">
                {/* Estrelas & Ícone de citação */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.stars)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-3.5 h-3.5 fill-amber-500 text-amber-500 stroke-[1]"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gray-400/40 rotate-180" />
                </div>

                <p className="text-xs text-gray-600 italic leading-relaxed tracking-wide font-light">
                  "{rev.quote}"
                </p>
              </div>

              {/* Informações do Cliente */}
              <div className="flex flex-col gap-1 border-t border-gray-300/60 pt-4 mt-8">
                <h4 className="text-sm font-medium text-gray-950">{rev.name}</h4>
                <span className="text-[9px] tracking-wider uppercase text-gray-400">
                  {rev.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
