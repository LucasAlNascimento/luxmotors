import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="w-full bg-neutral-900 py-24 px-6 md:px-12 lg:px-24 border-b border-gray-800">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <span className="text-[10px] tracking-[0.35em] uppercase text-amber-500 font-semibold">
          Pronto para o Próximo Nível?
        </span>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white font-display leading-tight">
          Vivencie o Extraordinário nas Melhores Estradas
        </h2>
        
        <p className="text-xs md:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed tracking-wide font-light">
          Escolha entre superesportivos com tração integral, SUVs imponentes e os sedãs mais confortáveis do planeta. Reserve agora e sinta o poder em suas mãos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            to="/catalog"
            className="h-14 px-8 flex items-center justify-center text-xs tracking-[0.25em] uppercase bg-white text-black hover:bg-neutral-200 transition-colors duration-300 font-medium"
          >
            Explorar Catálogo
          </Link>
          
          <Link
            to="/login"
            className="h-14 px-8 flex items-center justify-center text-xs tracking-[0.25em] uppercase border border-neutral-700 text-white hover:border-white transition-colors duration-300 font-medium"
          >
            Criar Minha Conta
          </Link>
        </div>
      </div>
    </section>
  );
}
