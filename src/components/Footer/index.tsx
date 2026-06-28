export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-between items-center w-full px-11 py-4 bg-gray-200 border-t border-gray-300/60 mt-auto">
      <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400">
        © {currentYear} Luxmotors Car Rentals Inc.
      </p>

      <div className="flex items-center gap-3">
        <div className="w-px h-3 bg-gray-400/50" />
        <img
          className="w-5 rounded-sm opacity-80"
          src="/assets/icons/Brazil.png"
          alt="Ícone Brasil"
        />
        <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400">Brazil</p>
      </div>
    </footer>
  );
}