export default function Brands() {
  const brands = [
    { src: "/assets/brands/audi-logo.svg", alt: "Audi", width: "w-16" },
    { src: "/assets/brands/bmw-logo.png", alt: "BMW", width: "w-9" },
    { src: "/assets/brands/jaguar-logo.png", alt: "Jaguar", width: "w-20" },
    { src: "/assets/brands/mercedes-logo.png", alt: "Mercedes", width: "w-9" },
    { src: "/assets/brands/landrover-logo.png", alt: "Land Rover", width: "w-16" },
    { src: "/assets/brands/porsche-logo.png", alt: "Porsche", width: "w-8" },
  ];

  return (
    <div className="flex flex-col mt-32 pb-32 items-center justify-center gap-1 md:flex-row md:pb-0 lg:mt-0">
      {brands.map((brand, i) => (
        <div
          key={i}
          className="flex items-center justify-center w-40 h-24 border-r border-gray-300/60 last:border-r-0 first:border-l first:border-gray-300/60"
        >
          <img
            className={`${brand.width} opacity-40 grayscale hover:opacity-80 transition-opacity duration-500 object-contain`}
            src={brand.src}
            alt={`Logo ${brand.alt}`}
          />
        </div>
      ))}
    </div>
  );
}