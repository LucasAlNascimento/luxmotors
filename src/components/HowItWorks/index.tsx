export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Escolha seu ícone",
      description: "Explore nossa curadoria de superesportivos e SUVs. Selecione o carro que combina perfeitamente com sua ocasião.",
    },
    {
      num: "02",
      title: "Reserva Simplificada",
      description: "Defina o período, escolha opcionais de entrega e finalize com segurança pelo nosso concierge ou plataforma online.",
    },
    {
      num: "03",
      title: "Dirija o Extraordinário",
      description: "Receba o veículo impecável no local desejado. Ajuste os bancos, ligue o motor e desfrute de cada quilômetro.",
    },
  ];

  return (
    <section className="w-full bg-gray-200 py-24 px-6 md:px-12 lg:px-24 border-b border-gray-300/40">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-medium">
            Jornada Exclusiva
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 font-display">
            Como Funciona
          </h2>
          <p className="text-xs text-gray-500 leading-relaxed mt-2 tracking-wide">
            Criamos uma jornada sem fricção e totalmente sob medida para que seu único foco seja a estrada.
          </p>
        </div>

        {/* Linha de Passos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-5xl md:text-6xl font-light text-gray-400/50 font-display select-none">
                  {step.num}
                </span>
              </div>

              <div className="flex flex-col gap-2 pr-6">
                <h3 className="text-lg font-light tracking-tight text-gray-950">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed tracking-wide">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
