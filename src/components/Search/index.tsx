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
    <div className="relative z-10 mx-auto my-auto -translate-y-11 w-96 h-24 bg-gray-200 rounded-full shadow-xl md:w-1/2">
      <form
        className="flex items-center gap-3 px-4 h-full"
        onSubmit={handleSearch}
      >
        <input
          className="flex-1 h-14 px-4 rounded-full bg-transparent outline-none"
          placeholder="Marca ou modelo"
          value={filters.marcaModelo}
          onChange={(e) => handleChange("marcaModelo", e.target.value)}
        />

				<NumericFormat
					className="w-24 h-14 px-3 rounded-full outline-none"
					placeholder="Ano"
					allowNegative={false}
					value={filters.ano}
					isAllowed={(values) => {
						const max = 9999;
						return values.floatValue == null || values.floatValue <= max;
					}}
					onValueChange={(values) =>
						handleChange("ano", values.value)
					}
				/>

        <NumericFormat
					className="w-44 h-14 px-3 rounded-full outline-none"
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
					onValueChange={(values) =>
						handleChange("precoDiaria", values.value)
					}
				/>

        <button
          type="submit"
          className="flex items-center justify-center w-14 h-14 bg-black text-white rounded-full hover:scale-105 duration-300"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
}