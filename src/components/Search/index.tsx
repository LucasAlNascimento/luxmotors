import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { NumericFormat } from "react-number-format";

export default function Search() {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    marcaModelo: "",
    ano: "",
    precoDiaria: "",
  });

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });

    navigate(`/catalog?${params.toString()}`);
  };

  const handleChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="relative z-10 mx-auto my-auto -translate-y-11 w-96 bg-gray-200 rounded-md shadow-lg border border-gray-300/80 overflow-hidden md:w-1/2">
      <form
        className="flex items-stretch h-16"
        onSubmit={handleSearch}
      >
        <input
          className="flex-1 px-6 bg-transparent outline-none text-xs tracking-[0.2em] uppercase placeholder:text-gray-400 border-r border-gray-400/30"
          placeholder="Marca ou modelo"
          value={filters.marcaModelo}
          onChange={(e) => handleChange("marcaModelo", e.target.value)}
        />

        <NumericFormat
          className="w-24 px-4 bg-transparent outline-none text-xs tracking-[0.2em] placeholder:text-gray-400 border-r border-gray-400/30"
          placeholder="Ano"
          allowNegative={false}
          value={filters.ano}
          isAllowed={(values) => {
            const max = 9999;
            return values.floatValue == null || values.floatValue <= max;
          }}
          onValueChange={(values) => handleChange("ano", values.value)}
        />

        <NumericFormat
          className="w-40 px-4 bg-transparent outline-none text-xs tracking-[0.2em] placeholder:text-gray-400 border-r border-gray-400/30"
          placeholder="Valor"
          thousandSeparator="."
          decimalSeparator=","
          prefix="R$ "
          decimalScale={2}
          fixedDecimalScale
          allowNegative={false}
          value={filters.precoDiaria}
          isAllowed={(values) => {
            const max = 999999;
            return values.floatValue == null || values.floatValue <= max;
          }}
          onValueChange={(values) => handleChange("precoDiaria", values.value)}
        />

        <button
          type="submit"
          className="flex items-center justify-center w-14 bg-black text-white hover:bg-gray-900 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xs" />
        </button>
      </form>
    </div>
  );
}