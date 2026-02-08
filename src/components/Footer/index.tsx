export default function Footer() {
  return (
    <footer className="flex fixed bottom-0 justify-between items-center w-full p-5 bg-gray-200 shadow-md md:px-11">
      <p>© 2023 Luxmotors Car Rentals Inc.</p>
      <div className="flex items-center justify-center gap-2">
        <img
          className="w-8 rounded-md"
          src="/assets/icons/Brazil.png"
          alt="Ícone Brasil"
        />
        <p className="text-sm font-fabrikatMedium">Brazil</p>
      </div>
    </footer>
  );
}
